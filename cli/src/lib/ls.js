import { join } from "node:path";
import { existsSync, readdirSync, rmSync } from "node:fs";
import initCache from "./cache.js";
import write from "./write.js";
import lsWebc from "./ls/webc.js";
import lsJs from "./ls/js.js";
import lsMd from "./ls/md.js";

const arrJson = (kind_li) =>
  kind_li.length ? "[" + kind_li.map((item) => JSON.stringify(item)).join(",  ") + "]" : "[]";

export default async (root, comp_li) => {
  const src_dir = join(root, "src"),
    ls_dir = join(src_dir, "_/ls");
  if (existsSync(ls_dir)) {
    for (const name of readdirSync(ls_dir)) {
      if (name !== ".cache") rmSync(join(ls_dir, name), { recursive: true, force: true });
    }
  }

  const [cacheGet, cacheSet, saveCache] = initCache(join(ls_dir, ".cache"), "scan.msgpack"),
    ignore_file = join(src_dir, "conf/webcLsIgnore.js"),
    ignore_li = (await import(ignore_file)).default,
    ignore = new Set(ignore_li.map((name) => name.toLowerCase())),
    scan_li = comp_li.filter((name) => !ignore.has(name.toLowerCase())),
    comp_map = lsWebc(src_dir, scan_li, cacheGet, cacheSet),
    doc_dir = join(root, "doc"),
    js_map = await lsJs(doc_dir, cacheGet, cacheSet, root),
    lang_li = [...new Set([...comp_map.keys(), ...js_map.keys()])];

  for (const lang of lang_li) {
    const [webc, css, base] = comp_map.get(lang) || [[], [], []],
      js = js_map.get(lang) || [],
      file_path = join(ls_dir, lang + ".js"),
      content =
        "export const webc = " +
        arrJson(webc) +
        ", css = " +
        arrJson(css) +
        ", base = " +
        arrJson(base) +
        ", js = " +
        arrJson(js) +
        ";";

    write(file_path, content);
  }

  await lsMd(root);
  saveCache();
};
