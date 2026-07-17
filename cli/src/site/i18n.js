import { join } from "node:path";
import write from "@3-/write";
import writeDict from "./i18n/writeDict.js";
import jsParse from "./i18n/jsParse.js";
import pugParse from "./i18n/pugParse.js";
import { I18N } from "./i18n/const.js";

const addKeys = (set, map) => {
    for (const data of Object.values(map)) {
      for (const k of Object.keys(data)) set.add(k);
    }
  },
  saveDemo = (dist, lang, name, pug_arr, js_arr) => {
    const obj = {},
      fp = join(dist, "_", name, "demo", I18N, lang + ".js");
    if (pug_arr) obj.pug = pug_arr;
    if (js_arr) obj.js = js_arr;
    if (Object.keys(obj).length > 0) {
      writeDict(fp, obj);
    } else {
      write(fp, "export {};");
    }
  };

export default async (src, dist, component_li, all_lang_li, from_lang) => {
  const [js_demo_lang_map, pug_lang_map] = await Promise.all([
      jsParse(src, join(dist, "_"), component_li, from_lang),
      pugParse(src, dist, component_li)
    ]),
    active_set = new Set();
  addKeys(active_set, pug_lang_map);
  addKeys(active_set, js_demo_lang_map);

  for (const lang of all_lang_li) {
    const pug_data = pug_lang_map[lang] || {},
      js_data = js_demo_lang_map[lang] || {};
    for (const name of active_set) {
      saveDemo(dist, lang, name, pug_data[name], js_data[name]);
    }
  }
};
