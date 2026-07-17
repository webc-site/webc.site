import { join } from "node:path";
import { existsSync } from "node:fs";
import read from "@3-/read";
import renderHtml from "./vfs/html.js";
import { FILE } from "@1-/walk";
import walkRel from "@1-/walk/walkRel.js";
import importDefault from "./lib/importDefault.js";
import i18nRoute from "./vfs/lib/i18n.yml.js";
import stylCompile from "./vfs/styl.js";

const DIR = import.meta.dirname,
  SRC = join(DIR, "vfs/src"),
  MAP = {};

await walkRel(SRC, async (kind, rel) => {
  if (kind === FILE && rel.endsWith(".js")) {
    MAP[rel] = await importDefault(SRC, rel);
  }
});

export default async (root) => {
  const render = await renderHtml(root);
  return (com) => {
    const dir = join(root, "src", com),
      map = {},
      html_key = com + ".html";

    for (const [key, parse] of Object.entries(MAP)) {
      const fp = join(dir, key),
        content = parse(existsSync(fp) ? read(fp) : "", dir, root);
      if (content !== undefined) {
        map[key] = () => content;
      }
    }

    map[html_key] = () => render(com, dir);

    return (path) => {
      if (map[path]) {
        return map[path]();
      }
      if (path === "_.css") {
        const styl_fp = join(dir, "_.styl");
        if (existsSync(styl_fp)) {
          const [css] = stylCompile(styl_fp, false);
          return css;
        }
      }
      const i18n_code = i18nRoute(path, dir);
      if (i18n_code !== undefined) {
        return i18n_code;
      }
      const fp = join(dir, path);
      if (existsSync(fp)) return read(fp);
    };
  };
};
