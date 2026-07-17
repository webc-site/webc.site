import { join, relative } from "node:path";
import { existsSync, statSync } from "node:fs";
import walkRelIgnore from "@1-/walk/walkRelIgnore.js";
import { FILE } from "@1-/walk";
import dirLs from "../dirLs.js";
import jsDocTitle from "../jsDocTitle.js";

const lsLang = async (js_dir, cacheGet, cacheSet, root_dir) => {
  const list_li = [];

  await walkRelIgnore(js_dir, async (type, rel_path) => {
    if (type === FILE && rel_path.endsWith(".md")) {
      const file_path = join(js_dir, rel_path),
        prefix = rel_path.slice(0, -3),
        cache_key = relative(root_dir, file_path),
        stat = statSync(file_path),
        { mtimeMs: mtime, size } = stat,
        [cached_mtime, cached_size, cached_desc] = cacheGet(cache_key) || [],
        desc = cached_mtime === mtime && cached_size === size ? cached_desc : jsDocTitle(file_path);

      if (desc !== cached_desc) {
        cacheSet(cache_key, [mtime, size, desc]);
      }

      list_li.push([prefix, desc]);
    }
  });

  return list_li.sort((a, b) => (a[0] > b[0] ? 1 : -1));
};

export default async (doc_dir, cacheGet, cacheSet, root_dir) => {
  const lang_map = new Map(),
    lang_li = dirLs(doc_dir);

  for (const lang of lang_li) {
    const js_dir = join(doc_dir, lang, "js");
    if (existsSync(js_dir)) {
      lang_map.set(lang, await lsLang(js_dir, cacheGet, cacheSet, root_dir));
    }
  }

  return lang_map;
};
