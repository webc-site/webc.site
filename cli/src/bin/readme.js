import fs from "node:fs/promises";
import { join } from "node:path";
import read from "@3-/read";
import write from "@3-/write";
import svgBadge from "../lib/svgBadge.js";
import importDefault from "../lib/importDefault.js";
import i18nCode from "../lib/i18nCode.js";

export const README_MD = "README.md";

export default async (root) => {
  const doc_dir = join(root, "doc"),
    badge_dir = join(doc_dir, ".svg"),
    dir_src_js = join(root, "src/js"),
    entries = await fs.readdir(doc_dir, { withFileTypes: true }),
    CODE = await i18nCode(root),
    NAME = await importDefault(dir_src_js, "i18n/NAME.js"),
    { readme: readmeUrlFn, svg: svgUrlFn } = await import(join(root, "src/conf/URL.js")),
    langs = entries
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
      .map((entry) => entry.name)
      .filter((lang) => CODE.indexOf(lang) !== -1);

  await fs.mkdir(badge_dir, { recursive: true });
  langs.sort((a, b) => CODE.indexOf(a) - CODE.indexOf(b));

  const links = [];
  for (const lang of langs) {
    const idx = CODE.indexOf(lang),
      name = NAME[idx],
      url = await readmeUrlFn(lang),
      svg_content = svgBadge(name),
      badge_path = join(badge_dir, lang + ".svg");
    await fs.writeFile(badge_path, svg_content, "utf8");
    links.push('<a href="' + url + '"><img src="' + svgUrlFn(lang) + '" alt="' + name + '" /></a>');
  }

  const en_readme_path = join(doc_dir, "en", README_MD),
    en_content = read(en_readme_path),
    header = links.join(" ") + "\n\n",
    output_content = header + en_content,
    root_readme_path = join(root, README_MD);

  write(root_readme_path, output_content);
};
