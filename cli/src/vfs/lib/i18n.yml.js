import { existsSync } from "node:fs";
import { join } from "node:path";
import ymlLoad from "@1-/yml/load.js";

const parseYml = (fp, name, def) => {
    if (existsSync(fp)) {
      let parsed = def;
      try {
        parsed = ymlLoad(fp) || def;
      } catch {}
      return "export const " + name + " = " + JSON.stringify(parsed) + ";";
    }
    return "";
  },
  ymlLi = (dir_path, li = []) =>
    [["js", {}], ...li]
      .map(([name, def]) => parseYml(join(dir_path, name + ".yml"), name, def))
      .filter(Boolean)
      .join("\n"),
  jsYml = (dir_path) => ymlLi(dir_path),
  pugJsYml = (dir_path) => ymlLi(dir_path, [["pug", []]]);

export default (path, dir) => {
  if (path.endsWith(".js") && /(^|\/)i18n\//.test(path)) {
    const dir_path = join(dir, path.slice(0, -3));
    if (existsSync(dir_path)) {
      return path.includes("demo/i18n/") ? pugJsYml(dir_path) : jsYml(dir_path);
    }
  }
};
