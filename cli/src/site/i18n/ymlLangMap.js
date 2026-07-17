import { existsSync } from "node:fs";
import { join } from "node:path";
import loadYml from "@1-/yml/load.js";
import dirLs from "../../lib/dirLs.js";

export default (i18n_dir, yml_name, key_li, lang_map, name) => {
  if (!existsSync(i18n_dir)) return;
  const lang_li = dirLs(i18n_dir);

  for (const lang of lang_li) {
    const yml_path = join(i18n_dir, lang, yml_name);
    if (!existsSync(yml_path)) continue;

    const yml_data = loadYml(yml_path) || {},
      arr = key_li.map((k) => (yml_data[k] !== undefined ? yml_data[k] : k));

    if (!lang_map[lang]) lang_map[lang] = {};
    lang_map[lang][name] = arr;
  }
};
