import { existsSync, writeFileSync } from "node:fs";
import { dirname, join, resolve, relative } from "node:path";
import minifyTo from "./minifyTo.js";
import { importsAllOf } from "./dep.js";

const compDep = (dist, name, js_src_dir, js_dist_dir, js_set) => {
    const entry_li = [join(dist, "_", name, "_.js"), join(dist, "_", "_", "demo", name + ".js")];
    for (const entry_file of entry_li) {
      if (existsSync(entry_file)) {
        for (const dep of importsAllOf(entry_file)) {
          if (dep.startsWith(".")) {
            const abs_dist_path = resolve(dirname(entry_file), dep);
            if (abs_dist_path.startsWith(js_dist_dir + "/")) {
              const abs_src_path = join(js_src_dir, relative(js_dist_dir, abs_dist_path));
              if (existsSync(abs_src_path)) {
                js_set.add(abs_src_path);
              }
            }
          }
        }
      }
    }
  },
  minify = async (input_li, js_src_dir, js_dist_dir, imported_js_set) => {
    const input_map = {},
      dest_map = {};
    for (const file of input_li) {
      const rel = relative(js_src_dir, file),
        key = rel.slice(0, -3);
      input_map[key] = file;
      dest_map[key] = join(js_dist_dir, rel);
    }
    await minifyTo(input_map, dest_map, {
      external: (id, importer) => {
        if (id.startsWith(".")) {
          if (!importer) return true;
          const abs_path = resolve(dirname(importer), id);
          return imported_js_set.has(abs_path) || !abs_path.startsWith(js_src_dir + "/");
        }
        return !id.startsWith("/");
      }
    });
  };

export default async (src, dist, component_li) => {
  const js_src_dir = join(src, "js"),
    js_dist_dir = join(dist, "_/js");
  if (!existsSync(js_src_dir)) return;

  const imported_js_set = new Set(
    ["dom", "rmWait", "c-t", "demo"].map((p) => join(js_src_dir, p + ".js")).filter(existsSync)
  );

  await Promise.all(
    component_li.map(async (name) => {
      compDep(dist, name, js_src_dir, js_dist_dir, imported_js_set);
    })
  );

  const input_li = [...imported_js_set];
  if (input_li.length) {
    await minify(input_li, js_src_dir, js_dist_dir, imported_js_set);
  }

  const imported_li = input_li.map((file) => relative(js_src_dir, file).slice(0, -3)).sort();
  writeFileSync(
    join(src, "_/imported.js"),
    "// GEN BY @webc.site/cli\n" +
      (imported_li.length
        ? `export default "${imported_li.join(";")}".split(
  ";"
);\n`
        : "export default [];\n")
  );
};
