#!/usr/bin/env bun

import "../const/SET_PROD.js";
import { rmSync, writeFileSync, copyFileSync } from "node:fs";
import { join } from "node:path";
import { DIR } from "@1-/walk";
import walkRelIgnore from "@1-/walk/walkRelIgnore.js";
import minifyTo from "../lib/minifyTo.js";
import scanLs from "../lib/ls.js";
import webcJs from "../site/webcJs.js";
import webcLs from "../lib/webcLs.js";
import styl from "../site/styl.js";
import i18n from "../site/i18n.js";
import cp from "../site/cp.js";
import pack from "../site/pack.js";
import jsMinify from "../lib/jsMinify.js";
import webcSitePack from "../site/webcSitePack.js";
import cpUsed from "../site/svg/cpUsed.js";
import webc from "../site/webc.js";
import loadYml from "@1-/yml/load.js";
import toLi from "@1-/tran/toLi.js";
import WebC from "../const/WebC.site.js";

const HTML = ".html",
  INDEX_HTML = "index" + HTML,
  R_200 = " / 200",
  minifyDir = async (src, dist) => {
    const input_li = [],
      file_li = [];
    await walkRelIgnore(src, async (type, rel) => {
      if (type != DIR && rel.endsWith(".js") && !rel.endsWith(".test.js")) {
        input_li.push(join(src, rel));
        file_li.push(join(dist, rel));
      }
    });
    if (input_li.length) {
      await minifyTo(input_li, file_li, {
        external: (id) => !id.startsWith(".") && !id.startsWith("/")
      });
    }
  },
  main = async (root) => {
    const dist = join(root, "dist/site"),
      src = join(root, "src"),
      ls = "_/ls",
      component_li = webcLs(src),
      dist_under = join(dist, "_"),
      tran = loadYml(join(root, "tran.yml")).tran,
      from_lang = tran.from,
      all_lang_li = [...new Set([from_lang, ...toLi(tran.to_li)])];
    rmSync(dist, { recursive: true, force: true });

    await scanLs(root, component_li);
    await Promise.all([
      minifyDir(join(src, ls), join(dist, "_", ls)),
      webcJs(src, dist_under, component_li),
      styl(root, src, dist_under, component_li),
      i18n(src, dist, component_li, all_lang_li, from_lang),
      cp(src, dist, component_li)
    ]);
    await webcSitePack(src, dist, component_li);
    await cpUsed(root);
    await pack(src, dist_under, component_li);
    await jsMinify(src, dist, component_li);

    webc(src, dist_under, component_li);

    const { default: imported_li } = await import(join(root, "src/_/imported.js")),
      index_html = join(dist, INDEX_HTML),
      redirects_content =
        component_li
          .filter((name) => name !== WebC)
          .map((name) => "/" + name + R_200)
          .concat(imported_li.map((name) => "/js/" + name + R_200))
          .join("\n") + "\n";
    copyFileSync(index_html, join(dist, "404" + HTML));
    writeFileSync(join(dist, "_redirects"), redirects_content);
  };

if (import.meta.main) {
  await main(process.cwd());
}

export default main;
