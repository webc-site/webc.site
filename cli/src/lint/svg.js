#!/usr/bin/env bun

import { $ } from "@3-/zx";
import read from "@3-/read";
import write from "@3-/write";
import ERR from "@3-/log/ERR.js";
import svgMinify from "../lib/svgMinify.js";

const minifySvgContent = (content) => {
    try {
      return svgMinify(content);
    } catch (e) {
      ERR(e);
      return content;
    }
  },
  stagedFiles = async () => {
    try {
      const res = await $(["git diff --cached --name-only --diff-filter=ACM"]);
      return res.toString().trim().split("\n").filter(Boolean);
    } catch {
      return [];
    }
  },
  args = process.argv.slice(2),
  minifySvgFile = (file) => {
    const original = read(file);
    if (!original) {
      return false;
    }
    const data = minifySvgContent(original);
    if (data && data.length < original.length) {
      write(file, data);
      const saved = original.length - data.length,
        ratio = ((saved / original.length) * 100).toFixed(2);
      console.log("[" + ratio + "%] Minified " + file + " (saved " + saved + " bytes)");
      return true;
    }
    return false;
  },
  main = async () => {
    const files = args.length ? args : await stagedFiles();
    let changed = false;

    for (const file of files) {
      if (file.endsWith(".svg")) {
        if (minifySvgFile(file)) {
          changed = true;
        }
      }
    }

    if (changed && !args.length) {
      try {
        await $(["git add -u"]);
      } catch (e) {
        ERR("git add failed: " + e.message);
      }
    }
  };

if (import.meta.main) {
  await main();
}
