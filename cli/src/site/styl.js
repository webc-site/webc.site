import { join } from "node:path";
import { existsSync, writeFileSync, unlinkSync } from "node:fs";
import read from "@3-/read";
import { DIR } from "@1-/walk";
import walkRelIgnore from "@1-/walk/walkRelIgnore.js";
import compileStyl from "./styl/compile.js";
import extReplace from "../lib/extReplace.js";

const srcStyl = async (root, src, dist) => {
  const demo_styl = join(src, "styl/demo.styl"),
    demo_css = join(dist, "demo.css");
  if (existsSync(demo_styl)) {
    compileStyl(root, demo_styl, demo_css, "demo.styl", true);
  }

  const import_styl = join(src, "styl/import.styl"),
    main_styl = join(src, "styl/_.styl"),
    combined_styl = join(src, "styl/__temp__.styl"),
    css_path = join(dist, "_.css");

  let content = "";
  if (existsSync(import_styl)) {
    content += read(import_styl) + "\n";
  }
  if (existsSync(main_styl)) {
    content += read(main_styl);
  }
  if (content) {
    writeFileSync(combined_styl, content, "utf8");
    try {
      compileStyl(root, combined_styl, css_path, "_.styl", false);
    } finally {
      try {
        unlinkSync(combined_styl);
      } catch {}
    }
  }
};

export default async (root, src, dist, component_li) => {
  await Promise.all([
    srcStyl(root, src, dist),
    ...component_li.map(async (name) => {
      const dir_path = join(src, name);
      await walkRelIgnore(dir_path, async (type, rel_path) => {
        if (type !== DIR) {
          const css_rel_part = extReplace(rel_path, "styl", "css");
          if (css_rel_part) {
            const styl_path = join(dir_path, rel_path),
              css_path = join(dist, name, css_rel_part);

            compileStyl(root, styl_path, css_path, name + "/" + rel_path, true);
          }
        }
      });
    })
  ]);
};
