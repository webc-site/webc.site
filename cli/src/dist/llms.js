import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import read from "@3-/read";
import write from "@3-/write";
import importDefault from "../lib/import/default.js";

const mdLink = (name, url, desc) => "[" + name + "](" + url + ")" + (desc ? " : " + desc : ""),
  httpsPrefix = (url) => (url.startsWith("//") ? "https:" + url : url),
  writeTxt = (dir, name, line_li) => {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    write(join(dir, name), line_li.join("\n") + "\n");
  };

export default async (dir, dist_dir) => {
  const site_dir = join(dir, "dist/site"),
    doc_llms_dir = join(dir, "doc/llms"),
    src_dir = join(dir, "src"),
    js_dir = join(src_dir, "js"),
    i18n_dir = join(js_dir, "i18n"),
    conf_dir = join(src_dir, "conf"),
    [code_li, name_li, GIT_REV, { GIT_CDN }] = await Promise.all([
      importDefault(i18n_dir, "CODE.js"),
      importDefault(i18n_dir, "NAME.js"),
      importDefault(conf_dir, "GIT_REV.js"),
      import(join(conf_dir, "URL.js"))
    ]),
    cdn_base = httpsPrefix(GIT_CDN);

  for (const lang of code_li) {
    const ls_file = join(site_dir, "_/ls", lang + ".js");
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
        mdLink(name, "../../src/webc/" + name + "/i18n/" + lang + "/README.md", desc)
      ),
      ...js_li.map(([name, desc]) => mdLink(name, "../" + lang + "/js/" + name + ".md", desc))
    ];

    if (lang_llms_line_li.length > 0) {
      writeTxt(doc_llms_dir, lang + ".txt", lang_llms_line_li);
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
