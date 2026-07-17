import { rmSync, mkdirSync, existsSync, copyFileSync } from "node:fs";
import { join } from "node:path";
import { build } from "vite";
import site from "./site.js";
import viteConfig from "../dist/vite.js";
import read from "@3-/read";
import write from "@3-/write";
import htmlMinify from "@1-/minify_htm";

const HTML = ".html",
  INDEX_HTML = "index" + HTML;

export default async (dir) => {
  await site(dir);
  const base_dir = join(dir, "dist"),
    dist_dir = join(base_dir, "dist"),
    site_dir = join(base_dir, "site"),
    public_dir = join(dir, "public");

  rmSync(dist_dir, { recursive: true, force: true });
  mkdirSync(dist_dir, { recursive: true });

  const input = {};

  if (existsSync(site_dir)) {
    const index_html_path = join(site_dir, INDEX_HTML);
    if (existsSync(index_html_path)) {
      input.index = index_html_path;
    }
  }

  if (Object.keys(input).length > 0) {
    await build(viteConfig(site_dir, dist_dir, input, public_dir));
    Object.keys(input).forEach((key) => {
      const file_path = join(dist_dir, key + HTML),
        html = htmlMinify(read(file_path))
          .replaceAll("href=./", "href=/")
          .replaceAll("src=./", "src=/");
      write(file_path, html);
    });

    const index_html_path = join(dist_dir, INDEX_HTML),
      redirects_src = join(site_dir, "_redirects");
    copyFileSync(index_html_path, join(dist_dir, "404" + HTML));

    if (existsSync(redirects_src)) {
      copyFileSync(redirects_src, join(dist_dir, "_redirects"));
    }
  }

  // 生成 llms.txt
  const llmsDist = (await import("../dist/llms.js")).default;
  await llmsDist(dir, dist_dir);
};
