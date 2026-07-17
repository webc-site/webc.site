#!/usr/bin/env bun test --only-failures

import read from "@3-/read";
import { test, expect, describe } from "bun:test";
import htm from "../htm.js";
import { join } from "node:path";
import { load } from "js-yaml";
import { minify } from "@minify-html/node";

const cleanHtml = (html) => {
    const pres = [];
    let tmp = html,
      p = 0;
    for (;;) {
      const idx = tmp.toLowerCase().indexOf("<pre", p);
      if (idx === -1) break;
      const end_idx = tmp.toLowerCase().indexOf("</pre>", idx);
      if (end_idx === -1) {
        pres.push(tmp.slice(idx).replace(/\r\n/g, "\n"));
        tmp = tmp.slice(0, idx) + `<ph-${pres.length - 1}>`;
        break;
      }
      pres.push(tmp.slice(idx, end_idx + 6).replace(/\r\n/g, "\n"));
      const ph = `<ph-${pres.length - 1}>`;
      tmp = tmp.slice(0, idx) + ph + tmp.slice(end_idx + 6);
      p = idx + ph.length;
    }
    tmp = tmp.replace(/\r?\n/g, " ");
    tmp = tmp.replace(
      /\s+(<\/?(ul|ol|li|blockquote|pre|p|h[1-6]|hr|table|thead|tbody|tr|th|td)[^>]*>)/gi,
      "$1"
    );
    tmp = tmp.replace(
      /(<\/?(ul|ol|li|blockquote|pre|p|h[1-6]|hr|table|thead|tbody|tr|th|td)[^>]*>)\s+/gi,
      "$1"
    );
    tmp = tmp.replace(/\s+/g, " ");
    for (let i = 0; i < pres.length; ++i) {
      tmp = tmp.replace(`<ph-${i}>`, pres[i]);
    }
    // 去掉 </code></pre> 前的尾部空白
    tmp = tmp.replace(/\s*<\/code><\/pre>/g, "</code></pre>");
    // 统一 <br> 各种写法
    tmp = tmp.replace(/<br\s*\/?>\s*/g, "<br>");
    return minify(Buffer.from(tmp), { keep_closing_tags: true }).toString().trim();
  },
  runSpec = (group_name, spec_list) => {
    describe(group_name, () => {
      for (let i = 0; i < spec_list.length; ++i) {
        const item = spec_list[i],
          title = "Example " + item.id;

        test(title, () => {
          const md_txt = item.md.replace(/→/g, "\t"),
            html_txt = item.htm.replace(/→/g, "\t"),
            md_val = md_txt.endsWith("\n") ? md_txt.slice(0, -1) : md_txt,
            got = htm(md_val);

          let clean_got = cleanHtml(got),
            clean_expected = cleanHtml(html_txt);

          if (group_name === "GFM Spec Tests") {
            clean_got = clean_got
              .replace(/<br\s*\/?>/gi, " ")
              .replace(/\s+/g, " ")
              .trim();
            clean_expected = clean_expected
              .replace(/<br\s*\/?>/gi, " ")
              .replace(/\s+/g, " ")
              .trim();
          }

          expect(clean_got).toBe(clean_expected);
        });
      }
    });
  },
  loadYml = (file_name) => load(read(join(import.meta.dirname, file_name)));

runSpec("GFM Spec Tests", loadYml("md.spec.yml"));
runSpec("Custom Markdown Tests", loadYml("md.test.yml"));
runSpec("Injection Attack Tests", loadYml("md.injection.yml"));
