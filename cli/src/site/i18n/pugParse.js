import { existsSync } from "node:fs";
import { join } from "node:path";
import ctRepl from "../../lib/ctRepl.js";
import { PUG_YML, I18N } from "./const.js";
import ymlLangMap from "./ymlLangMap.js";
import vfsInit from "../../vfs.js";
import WebC from "../../const/WebC.site.js";
import write from "@3-/write";

const parsePage = async (src, dist, name, pug_lang_map, vfs) => {
  const demo_dir = join(src, name, "demo"),
    demo_pug_path = join(demo_dir, "_.pug");
  if (!existsSync(demo_pug_path)) return;

  const demo_i18n_dir = join(demo_dir, I18N),
    map = vfs(name),
    html_key = name + ".html";
  let html = await map(html_key);
  if (html !== undefined) {
    let [new_html, key_li] = ctRepl(html);

    if (existsSync(demo_i18n_dir)) {
      ymlLangMap(demo_i18n_dir, PUG_YML, key_li, pug_lang_map, name);
    }

    if (name === WebC) {
      write(join(dist, "index.html"), new_html);
    }
  }
};

export default async (src, dist, component_li) => {
  const vfs = await vfsInit(join(src, "..")),
    pug_lang_map = {};

  for (const name of component_li) {
    await parsePage(src, dist, name, pug_lang_map, vfs);
  }

  return pug_lang_map;
};
