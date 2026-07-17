import { existsSync, rmSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import minifyTo from "../lib/minifyTo.js";
import { importsOf } from "../lib/dep.js";
import { DIR_DEMO } from "../const/PATH.js";

const packFile = async (entry_file, minify = true, i18n_del_li = []) => {
  const dir = dirname(entry_file);

  if (existsSync(entry_file)) {
    const local_import_set = new Set();

    for (const dep of importsOf(entry_file)) {
      if (dep.startsWith("./")) {
        const abs_path = join(dir, dep);
        if (basename(abs_path) === "_.js") {
          continue;
        }
        if (existsSync(abs_path)) {
          local_import_set.add(abs_path);
        }
      }
    }

    await minifyTo(
      [entry_file],
      [entry_file],
      {
        external: (id) => {
          let abs_path;
          if (id.startsWith(".")) {
            abs_path = join(dir, id);
          } else if (id.startsWith("/")) {
            abs_path = id;
          }
          if (abs_path && local_import_set.has(abs_path)) {
            return false;
          }
          return true;
        }
      },
      minify
    );

    for (const abs_path of local_import_set) {
      rmSync(abs_path, { force: true });
      rmSync(abs_path + ".map", { force: true });
    }
  }

  const i18n_path = join(dir, "I18N.js");
  if (existsSync(i18n_path)) {
    rmSync(i18n_path, { force: true });
    rmSync(i18n_path + ".map", { force: true });
  }

  for (const fp of i18n_del_li) {
    if (existsSync(fp)) {
      rmSync(fp, { force: true });
      rmSync(fp + ".map", { force: true });
    }
  }
};

export default async (src, dist, component_li) => {
  const root_dist = dirname(dist),
    task_li = [];
  for (const name of component_li) {
    task_li.push(packFile(join(dist, name, "_.js")));
    task_li.push(packFile(join(root_dist, ...DIR_DEMO, name + ".js")));
    task_li.push(
      (async () => {
        const i18n_path = join(dist, name, "demo", "I18N.js");
        if (existsSync(i18n_path)) {
          rmSync(i18n_path, { force: true });
          rmSync(i18n_path + ".map", { force: true });
        }
      })()
    );
  }
  await Promise.all(task_li);
};
