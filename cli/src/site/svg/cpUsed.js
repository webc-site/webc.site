import { join, dirname, relative, resolve } from "node:path";
import { existsSync, mkdirSync, copyFileSync } from "node:fs";
import { DIR } from "@1-/walk";
import walkRelIgnore from "@1-/walk/walkRelIgnore.js";
import read from "@3-/read";

export default async (root) => {
  const src = join(root, "src"),
    dist_site = join(root, "dist/site"),
    dist_under = join(dist_site, "_"),
    used_svgs = [];

  await walkRelIgnore(dist_site, async (type, rel_path) => {
    if (type !== DIR && rel_path.endsWith(".css")) {
      const css_file_path = join(dist_site, rel_path),
        code = read(css_file_path);
      if (!code) return;

      const matches = code.matchAll(/url\(\s*['"]?([^'")\s]+?\.svg)(?:[#?][^'")\s]*)?['"]?\s*\)/g);
      for (const match of matches) {
        const rel_svg_url = match[1];
        if (rel_svg_url.startsWith("data:")) continue;

        const dest_svg_path = resolve(dirname(css_file_path), rel_svg_url),
          rel_to_under = relative(dist_under, css_file_path);
        let src_svg_path;
        if (!rel_to_under.startsWith("..") && rel_to_under.includes("/")) {
          const component_name = rel_to_under.split("/")[0],
            rel_to_comp = relative(join(dist_under, component_name), dirname(css_file_path));
          src_svg_path = resolve(src, component_name, rel_to_comp, rel_svg_url);
        } else {
          const rel_to_dist_site_under = relative(dist_under, dirname(css_file_path));
          src_svg_path = resolve(src, "styl", rel_to_dist_site_under, rel_svg_url);
          if (!existsSync(src_svg_path)) {
            const alt = resolve(src, "styl/_", rel_to_dist_site_under, rel_svg_url);
            if (existsSync(alt)) {
              src_svg_path = alt;
            }
          }
        }

        if (existsSync(src_svg_path)) {
          used_svgs.push({ from: src_svg_path, to: dest_svg_path });
        }
      }
    }
  });

  used_svgs.forEach(({ from, to }) => {
    mkdirSync(dirname(to), { recursive: true });
    copyFileSync(from, to);
  });
};
