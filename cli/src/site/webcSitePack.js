import { join, resolve, dirname, relative } from "node:path";
import { existsSync } from "node:fs";
import read from "@3-/read";
import write from "@3-/write";
import minifyTo from "../lib/minifyTo.js";
import parseDemo from "../vfs/src/demo.js";
import ctRepl from "../lib/ctRepl.js";
import { DIR_DEMO } from "../const/PATH.js";
import vfsInit from "../vfs.js";

export default async (src, dist, component_li) => {
  const task_li = [],
    root = join(src, ".."),
    vfs = await vfsInit(root);

  for (const name of component_li) {
    const target_file = join(dist, ...DIR_DEMO, name + ".js");
    let code = parseDemo("../../", join(src, name), "/_/");

    const htm_start = code.indexOf(',HTM="');
    if (htm_start !== -1) {
      const htm_val_start = htm_start + 6,
        htm_val_end = code.lastIndexOf('"'),
        htm_json = code.slice(htm_val_start - 1, htm_val_end + 1),
        htm_str = JSON.parse(htm_json),
        [replaced_htm] = ctRepl(htm_str);
      code =
        code.slice(0, htm_val_start - 1) +
        JSON.stringify(replaced_htm) +
        code.slice(htm_val_end + 1);
    }

    write(target_file, code);
    task_li.push(
      minifyTo([target_file], [target_file], {
        plugins: [
          {
            name: "vfs-load",
            resolveId(id, importer) {
              if (id.startsWith(".") && importer) {
                const abs_path = resolve(dirname(importer), id),
                  dist_under = join(dist, "_"),
                  mapped_path = abs_path.startsWith(dist_under + "/")
                    ? join(src, abs_path.slice(dist_under.length + 1))
                    : abs_path,
                  rel_to_src = relative(src, mapped_path).replace(/\\/g, "/");
                if (!rel_to_src.startsWith("../")) {
                  const parts = rel_to_src.split("/"),
                    com_name = parts[0],
                    rel_to_com = parts.slice(1).join("/"),
                    is_demo = rel_to_com.startsWith("demo/");
                  if (is_demo) {
                    if (
                      com_name &&
                      (vfs(com_name)(rel_to_com) !== undefined || rel_to_com === "demo/I18N.js")
                    ) {
                      return mapped_path;
                    }
                  } else {
                    if (rel_to_com === "_.js" && component_li.includes(com_name)) {
                      return join(dist, "_", com_name + ".js");
                    }
                    return join(dist, "_", rel_to_src);
                  }
                }
              }
            },
            load(id) {
              const rel_to_src = relative(src, id).replace(/\\/g, "/");
              if (!rel_to_src.startsWith("../")) {
                const parts = rel_to_src.split("/"),
                  com_name = parts[0],
                  rel_to_com = parts.slice(1).join("/");
                if (rel_to_com === "demo/I18N.js") {
                  const disk_path = join(dist, "_", com_name, "demo", "I18N.js");
                  if (existsSync(disk_path)) {
                    return { code: read(disk_path) };
                  }
                }
                const code = vfs(com_name)(rel_to_com);
                if (code !== undefined) {
                  return { code };
                }
              }
            }
          }
        ],
        external: (id) => {
          if (id.startsWith("/")) {
            return !id.startsWith(src);
          }
          if (id.startsWith(".")) {
            return false;
          }
          return true;
        }
      })
    );
  }
  await Promise.all(task_li);
};
