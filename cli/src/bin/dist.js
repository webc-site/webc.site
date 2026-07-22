import read from "@3-/read";
import { copyFileSync } from "node:fs";
import { join } from "node:path";
import { env } from "node:process";
import { build } from "vite";
import minifyHtm from "@1-/minify_htm";
import write from "@3-/write";
import distSite from "../lib/distSite.js";
import publicCp from "../lib/publicCp.js";

const SITE = "site",
  DIST = "dist";

export default async (root) => {
  await distSite(root, SITE);
  const site_dir = join(root, DIST, SITE),
    dist_dir = join(root, DIST, DIST);
  await build({
    root: site_dir,
    base: env.CDN || "/",
    configFile: false,
    esbuild: {
      drop: ["debugger"]
    },
    build: {
      outDir: dist_dir,
      emptyOutDir: true,
      assetsDir: "",
      target: "esnext"
    }
  });
  publicCp(root, dist_dir);

  const index_path = join(dist_dir, "index.html"),
    html = minifyHtm(read(index_path));

  write(index_path, html);
  write(join(dist_dir, "404.html"), html);
  copyFileSync(join(site_dir, "_redirects"), join(dist_dir, "_redirects"));
};
