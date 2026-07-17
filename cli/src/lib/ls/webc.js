import { join } from "node:path";
import { existsSync, statSync } from "node:fs";
import read from "@3-/read";
import mdTitle from "../mdTitle.js";
import dirLs from "../dirLs.js";
import isWebc from "../isWebc.js";

const WEBC = 0,
  CSS = 1,
  BASE = 2,
  KIND_NUM = 3,
  isBase = (src_dir, comp) => {
    const styl_file = join(src_dir, comp, "_.styl");
    if (!existsSync(styl_file)) return true;
    for (const line of read(styl_file).split("\n")) {
      if (line.includes("import")) {
        const [, name] = line.match(/\.\.\/([^/ \n\r'"]+)/) || [];
        if (name && isWebc(name) && existsSync(join(src_dir, name, "_.js"))) return false;
      }
    }
    return true;
  },
  kind = (is_webc, src_dir, comp) => (is_webc ? (isBase(src_dir, comp) ? BASE : WEBC) : CSS),
  readmeDesc = (readme_file, rel, cacheGet, cacheSet) => {
    const { mtimeMs: mtime, size } = statSync(readme_file),
      [cached_mtime, cached_size, cached_desc] = cacheGet(rel) || [];

    if (cached_mtime === mtime && cached_size === size) {
      return cached_desc;
    }
    const desc = mdTitle(readme_file);
    cacheSet(rel, [mtime, size, desc]);
    return desc;
  },
  lsI18n = (src_dir, comp, cacheGet, cacheSet, lang_map) => {
    const i18n_dir = join(src_dir, comp, "i18n");
    if (!existsSync(i18n_dir)) return;

    const is_webc = existsSync(join(src_dir, comp, "_.js")),
      lang_li = dirLs(i18n_dir);

    for (const lang of lang_li) {
      const readme_file = join(i18n_dir, lang, "README.md");
      if (!existsSync(readme_file)) continue;

      const rel = readme_file.slice(src_dir.length + 1),
        desc = readmeDesc(readme_file, rel, cacheGet, cacheSet);

      if (!lang_map.has(lang)) lang_map.set(lang, []);
      const kind_li = lang_map.get(lang);
      while (kind_li.length < KIND_NUM) kind_li.push([]);

      kind_li[kind(is_webc, src_dir, comp)].push([comp, desc]);
    }
  };

export default (src_dir, comp_li, cacheGet, cacheSet) => {
  const lang_map = new Map();
  for (const comp of comp_li) {
    lsI18n(src_dir, comp, cacheGet, cacheSet, lang_map);
  }
  return lang_map;
};
