import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import read from "@3-/read";
import write from "@3-/write";
import i18nCode from "../lib/i18nCode.js";

const mdLink = (name, url, desc) => "[" + name + "](" + url + ")" + (desc ? " : " + desc : ""),
  writeTxt = (dir, name, line_li) => {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    write(join(dir, name), line_li.join("\n") + "\n");
  };

export default async (dir, dist_dir) => {
  const code_li = await i18nCode(dir),
    name_li = (await import(join(dir, "src/js/i18n/NAME.js"))).default,
    { default: GIT_REV } = await import(join(dir, "src/conf/GIT_REV.js")),
    { GIT_CDN } = await import(join(dir, "src/conf/URL.js")),
    httpsPrefix = (await import("../lib/httpsPrefix.js")).default,
    cdn_base = httpsPrefix(GIT_CDN);

  for (const lang of code_li) {
    const ls_file = join(dir, "src/_/ls", lang + ".js");
    let webc_li = [],
      css_li = [],
      base_li = [],
      js_li = [];

    if (existsSync(ls_file)) {
      try {
        const js_code = read(ls_file).replaceAll("export ", ""),
          run = new Function(js_code + "\nreturn {webc, css, base, js};");
        ({ webc: webc_li = [], css: css_li = [], base: base_li = [], js: js_li = [] } = run());
      } catch (err) {
        console.error("解析 " + ls_file + " 失败: ", err);
      }
    }

    const lang_llms_line_li = [
      ...[...webc_li, ...css_li, ...base_li].map(([name, desc]) =>
        mdLink(name, "../../src/" + name + "/i18n/" + lang + "/README.md", desc)
      ),
      ...js_li.map(([name, desc]) => mdLink(name, "../" + lang + "/js/" + name + ".md", desc))
    ];

    if (lang_llms_line_li.length > 0) {
      writeTxt(join(dir, "doc/llms"), lang + ".txt", lang_llms_line_li);
    }
  }

  writeTxt(dist_dir, "llms.txt", [
    "load index by your language :",
    "",
    ...code_li.map((code, i) =>
      mdLink(name_li[i], cdn_base + GIT_REV + "/doc/llms/" + code + ".txt")
    )
  ]);
};
