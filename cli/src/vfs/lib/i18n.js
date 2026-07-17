import { env } from "node:process";
import { existsSync } from "node:fs";
import { join } from "node:path";
import tranFrom from "../../lib/tranFrom.js";

export default (src, i18n_dir, root) => {
  if (src || existsSync(i18n_dir)) {
    let code = src || "";
    code = code.replace(/\bexport\s+const\s+js\s*=\s*[^;\n]+;?/, "");

    const from_lang = tranFrom(root),
      from_lang_yml = join(i18n_dir, from_lang, "js.yml"),
      is_build = env.WEBC_BUILD === "1";
    if (existsSync(from_lang_yml)) {
      const ensureNewline = (c) => (c && !c.endsWith("\n") ? c + "\n" : c);
      code =
        ensureNewline(code) +
        (is_build
          ? "export default async (code) => (await import(`./i18n/${code}.js`)).js;\n"
          : 'export default async (code) => (await import(/* @vite-ignore */ "./i18n/" + code + ".js")).js;\n');
    }
    return code;
  }
};
