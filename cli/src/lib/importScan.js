import importLi from "@1-/jsparser/importLi.js";
import { dirname, join, relative } from "node:path";
import { existsSync, readdirSync, statSync } from "node:fs";

const templateImport = (filename, prefix) => {
  if (!filename) return [];
  const src_file = filename.replaceAll("\\", "/").replace(/\/dist\/(?:site\/)?_\//, "/src/");
  if (!existsSync(src_file)) return [];
  const last_slash = prefix.lastIndexOf("/");
  if (last_slash === -1) return [];
  const dir_rel = prefix.slice(0, last_slash + 1);
  if (!dir_rel.startsWith(".") && !dir_rel.startsWith("/")) return [];
  const abs_dir = join(dirname(src_file), dir_rel);
  if (existsSync(abs_dir) && statSync(abs_dir).isDirectory()) {
    return readdirSync(abs_dir)
      .filter((file) => file.endsWith(".js") && !file.endsWith(".test.js"))
      .map((file) => {
        const dep_rel = relative(dirname(src_file), join(abs_dir, file)).replaceAll("\\", "/");
        return dep_rel.startsWith(".") || dep_rel.startsWith("/") ? dep_rel : "./" + dep_rel;
      });
  }
  return [];
};

export default (code, filename = "_.js") => {
  const [static_li, dynamic_li, template_li] = importLi(code),
    import_li = [...static_li, ...dynamic_li];

  for (const template of template_li) {
    const prefix = template[0];
    import_li.push(...templateImport(filename, prefix));
  }

  return import_li;
};
