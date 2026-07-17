#!/usr/bin/env bun
import read from "@3-/read";
import write from "@3-/write";
import ERR from "@3-/log/ERR.js";
import styl2nest from "./styl2nest.js";

const RULE_MAP = {
    "demo/_.styl": (content) => content.replace(/@import\s+['"]\.\.\/_\.styl['"]\s*\r?\n?/g, "")
  },
  lint = async (file, root) => {
    try {
      const file_content = read(file);
      if (!file_content) return;

      let original = file_content;
      for (const [key, clean] of Object.entries(RULE_MAP)) {
        if (file.endsWith(key)) {
          original = clean(original);
        }
      }

      const formatted = await styl2nest(original, root);
      if (formatted !== file_content) {
        write(file, formatted);
      }
    } catch (e) {
      ERR("Error formatting " + file + ": " + e.message);
      process.exit(1);
    }
  },
  main = async (root, files) => {
    if (files.length === 0) {
      process.exit(0);
    }

    for (const file of files) {
      if (file.endsWith(".styl")) {
        await lint(file, root);
      }
    }
  };

await main(process.cwd(), process.argv.slice(2));
