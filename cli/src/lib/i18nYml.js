import loadYml from "@1-/yml/load.js";
import { existsSync } from "node:fs";
import { join } from "node:path";

export const compileYml = (file_path) => {
  if (existsSync(file_path)) {
    try {
      return loadYml(file_path) || {};
    } catch (e) {
      console.error(e);
      return {};
    }
  }
  return {};
};

export default (dir_path) => {
  const js_val = compileYml(join(dir_path, "js.yml")),
    pug_val = compileYml(join(dir_path, "pug.yml"));
  return "export const js = " + JSON.stringify(js_val) + ", pug = " + JSON.stringify(pug_val) + ";";
};
