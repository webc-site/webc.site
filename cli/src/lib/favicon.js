import {
  IconTransformationType as TYPE,
  generateFaviconFiles as genFiles
} from "@realfavicongenerator/generate-favicon";
import {
  getNodeImageAdapter as nodeAdapter,
  loadAndConvertToSvg as loadSvg
} from "@realfavicongenerator/image-adapter-node";
import { existsSync } from "node:fs";
import { join } from "node:path";
import load from "@1-/yml/load.js";
import write from "@3-/write";

const DIR_FAVICON = "src/misc/favicon",
  bgTrans = (type, scale, bg) => ({
    type,
    backgroundColor: bg,
    backgroundRadius: 0,
    imageScale: scale
  });

export default async (root) => {
  const svg_path = join(root, DIR_FAVICON, "favicon.svg");
  if (!existsSync(svg_path)) return;

  const conf_path = join(root, DIR_FAVICON, "conf.yml");
  let bg = "#000000",
    title = "";

  if (existsSync(conf_path)) {
    const conf = load(conf_path) || {};
    bg = conf.bg || bg;
    title = conf.title || title;
  }

  if (!title) {
    const title_js = join(root, "src/conf/TITLE.js"),
      title_fn = (await import(title_js)).default;
    title = title_fn();
  }

  const dist = join(root, "public"),
    adapter = await nodeAdapter(),
    icon_src = { icon: await loadSvg(svg_path) },
    fav_conf = {
      icon: {
        desktop: {
          regularIconTransformation: { type: TYPE.None },
          darkIconType: "none"
        },
        touch: {
          transformation: bgTrans(TYPE.Background, 0.95, bg),
          appTitle: title
        },
        webAppManifest: {
          transformation: bgTrans(TYPE.Background, 0.9, bg),
          backgroundColor: bg,
          themeColor: bg,
          name: title,
          shortName: title
        }
      },
      path: "/",
      skipMetadataInjection: false
    },
    res_files = await genFiles(icon_src, fav_conf, adapter);

  Object.entries(res_files).forEach(([name, data]) => {
    write(join(dist, name), data);
  });
};
