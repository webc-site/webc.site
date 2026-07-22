import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import pug from "pug";
import write from "@3-/write";
import npm from "./npm.js";
import ls from "./ls.js";
import stylSvg from "./stylSvg.js";
import redirect from "../site/redirect.js";
import tranFrom from "./tranFrom.js";
import demo from "../site/demo.js";

export default async (root, site = "site") => {
  const site_dir = join(root, "dist", site),
    src_dir = join(root, "src");
  if (existsSync(site_dir)) {
    rmSync(site_dir, { recursive: true, force: true });
  }
  await npm(root, site, false);
  await demo(root, site_dir, false);
  await stylSvg(join(src_dir, "styl", "demo.styl"), join(site_dir, "_.css"), false);

  await ls(root, join(site_dir, "_", "ls"));

  const default_pug_path = join(src_dir, "pug", "default.pug"),
    title = (await import(join(src_dir, "conf", "TITLE.js"))).default,
    html = pug.renderFile(default_pug_path, {
      filename: default_pug_path,
      pretty: true,
      title,
      body: "<c-webc-site></c-webc-site>",
      css_li: ["/_.css"],
      js_src_li: ["/WebC.site.js"]
    });

  ["index", "404"].forEach((file) => write(join(site_dir, file + ".html"), html));

  await redirect(site_dir, tranFrom(root));
};
