import { join, dirname, resolve, relative } from "node:path";
import minifyTo from "../lib/minifyTo.js";
import vfsInit from "../vfs.js";

const JS = "js",
  ENTRY = "_." + JS;

export default async (src, dist, component_li) => {
  const root = dirname(src),
    task_li = [],
    vfs = await vfsInit(root);

  for (const name of component_li) {
    const map = vfs(name),
      entry_code = map(ENTRY);
    if (entry_code !== undefined) {
      const dir_path = join(src, name),
        entry_file = join(dir_path, ENTRY);

      task_li.push(
        minifyTo([entry_file], [join(dist, name, ENTRY)], {
          external: (id, importer) => {
            if (id.startsWith("/")) {
              return id.startsWith(dist) || !id.startsWith(root);
            }
            if (id === "./I18N.js") {
              return true;
            }
            if (id.startsWith(".")) {
              if (importer) {
                const parts = id.split("/");
                if (parts.length === 2 && parts[0] === ".." && parts[1].endsWith(".js")) {
                  const com_name = parts[1].slice(0, -3);
                  if (component_li.includes(com_name)) {
                    return true;
                  }
                }
                const abs_path = join(dirname(importer), id),
                  rel_to_src = relative(src, abs_path).replace(/\\/g, "/");
                if (!rel_to_src.startsWith("../")) {
                  const parts = rel_to_src.split("/"),
                    com_name = parts[0],
                    rel_to_com = parts.slice(1).join("/");
                  if (rel_to_com === "_.js" && component_li.includes(com_name)) {
                    return false;
                  }
                }
                return !abs_path.startsWith(dir_path);
              }
              return id.startsWith("../");
            }
            return true;
          },
          treeshake: { moduleSideEffects: true },
          plugins: [
            {
              name: "vfs-load",
              resolveId(id, importer) {
                if (id === entry_file) {
                  return entry_file;
                }
                const abs_path = id.startsWith("/")
                  ? id
                  : importer
                    ? resolve(dirname(importer), id)
                    : null;
                if (abs_path) {
                  const rel_to_src = relative(src, abs_path).replace(/\\/g, "/");
                  if (!rel_to_src.startsWith("../")) {
                    const parts = rel_to_src.split("/"),
                      com_name = parts[0],
                      rel_to_com = parts.slice(1).join("/");
                    if (rel_to_com === "_.js" && component_li.includes(com_name)) {
                      return "../" + com_name + ".js";
                    }
                  }
                }
              },
              load(id) {
                if (id === entry_file) {
                  return { code: entry_code };
                }
              }
            }
          ]
        })
      );
    }
  }
  await Promise.all(task_li);
};
