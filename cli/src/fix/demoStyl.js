#!/usr/bin/env bun
import { readdirSync, statSync, existsSync } from "node:fs";
import { resolve, basename, join, dirname } from "node:path";
import read from "@3-/read";
import write from "@3-/write";

const IMPORT_STYL_RE =
    /^\s*@import\s+["'](?:\.\.\/)+([A-Z][a-zA-Z0-9]*)(?:\/_\.styl|\.styl)?["'];?\s*\n?/gm,
  fixDemoStyl = (styl_file) => {
    if (!existsSync(styl_file)) return;
    const content = read(styl_file);
    if (!content) return;

    const matches = [...content.matchAll(IMPORT_STYL_RE)];
    if (matches.length === 0) return;

    const comp_names = new Set();
    for (const match of matches) {
      comp_names.add(match[1]);
    }

    const new_content = content.replace(IMPORT_STYL_RE, "").trimStart();
    write(styl_file, new_content);

    const demo_dir = dirname(styl_file),
      js_file = join(demo_dir, "_.js");

    let js_content = existsSync(js_file) ? read(js_file) : "";
    let js_modified = false;

    for (const comp of comp_names) {
      const import_stmt = `import "../../${comp}.js";`;
      if (!js_content.includes(import_stmt)) {
        js_content = import_stmt + "\n" + js_content;
        js_modified = true;
      }
    }

    if (js_modified) {
      write(js_file, js_content);
    }
  },
  main = () => {
    const args = process.argv.slice(2);
    let file_li = [];

    if (args.length > 0) {
      file_li = args.map((f) => resolve(f));
    } else {
      const webc_dir = resolve("src/webc");
      if (existsSync(webc_dir)) {
        for (const name of readdirSync(webc_dir)) {
          const comp_dir = join(webc_dir, name);
          if (statSync(comp_dir).isDirectory()) {
            const styl_file = join(comp_dir, "demo", "_.styl");
            if (existsSync(styl_file)) {
              file_li.push(styl_file);
            }
          }
        }
      }
    }

    for (const file of file_li) {
      if (basename(file) === "_.styl" && dirname(file).endsWith("demo")) {
        fixDemoStyl(file);
      }
    }
  };

if (import.meta.main) {
  main();
}
