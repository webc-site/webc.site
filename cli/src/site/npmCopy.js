import {
  rmSync,
  mkdirSync,
  existsSync,
  copyFileSync,
  cpSync,
  readdirSync,
  statSync
} from "node:fs";
import { join, dirname, basename } from "node:path";
import { DIR } from "@1-/walk";
import walkRelIgnore from "@1-/walk/walkRelIgnore.js";
import read from "@3-/read";
import write from "@3-/write";
import packageClean from "@1-/package_clean";
import readme, { README_MD } from "../bin/readme.js";
import webcLs from "../lib/webcLs.js";
import ext from "@3-/ext";

const JS = "js";

export default async (root) => {
  const src = join(root, "src"),
    dist_site_under = join(root, "dist/site/_"),
    dist_npm = join(root, "dist/npm"),
    component_li = webcLs(src),
    pkg_path = join(root, "package.json"),
    src_under_dir = join(dist_site_under, "_"),
    dest_under_dir = join(dist_npm, "_"),
    cp = (from, to) => copyFileSync(from, join(to, basename(from))),
    svg_dir = join(dist_site_under, "svg");
  rmSync(dist_npm, { recursive: true, force: true });
  mkdirSync(dist_npm, { recursive: true });

  await readme(root);
  const readme_file = join(root, README_MD);
  if (existsSync(readme_file)) {
    cp(readme_file, dist_npm);
  }

  const site_entry_js = join(dist_site_under, "_.js");
  if (existsSync(site_entry_js)) {
    cp(site_entry_js, dist_npm);
  }

  cpSync(join(dist_site_under, JS), join(dist_npm, JS), {
    recursive: true,
    filter: (src) => statSync(src).isDirectory() || src.endsWith("." + JS)
  });

  if (existsSync(svg_dir)) {
    cpSync(svg_dir, join(dist_npm, "svg"), { recursive: true });
  }

  if (existsSync(src_under_dir)) {
    mkdirSync(dest_under_dir, { recursive: true });
    readdirSync(src_under_dir).forEach((name) => {
      if (name.endsWith("." + JS)) {
        cp(join(src_under_dir, name), dest_under_dir);
      }
    });
  }

  write(
    join(dist_npm, "package.json"),
    JSON.stringify(packageClean(JSON.parse(read(pkg_path))), null, 2)
  );

  for (const name of component_li) {
    const src_comp_dir = join(dist_site_under, name);
    if (existsSync(src_comp_dir)) {
      await walkRelIgnore(src_comp_dir, async (type, rel_path) => {
        if (type !== DIR && !rel_path.startsWith("demo/") && ext(rel_path) === JS) {
          const dest_dir = join(dist_npm, name, dirname(rel_path));
          mkdirSync(dest_dir, { recursive: true });
          cp(join(src_comp_dir, rel_path), dest_dir);
        }
      });
      const entry_js_file = join(dist_site_under, name + ".js");
      if (existsSync(entry_js_file)) {
        cp(entry_js_file, dist_npm);
      }
    }
  }
};
