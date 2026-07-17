import { join } from "node:path";
import { existsSync } from "node:fs";
import webcLs from "./webcLs.js";
import loadYml from "@1-/yml/load.js";

export default (root, lang) => {
  const src = join(root, "src"),
    component_li = webcLs(src),
    dict = {};

  for (const name of component_li) {
    const yml_path = join(src, name, "i18n", lang, "js.yml");
    if (existsSync(yml_path)) {
      dict[name] = loadYml(yml_path) || {};
    }
  }
  return "export const js = " + JSON.stringify(dict) + ";";
};
