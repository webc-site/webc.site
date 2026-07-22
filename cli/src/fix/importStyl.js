#!/usr/bin/env bun
import { readdirSync, statSync, existsSync } from "node:fs";
import { resolve, join } from "node:path";
import read from "@3-/read";
import write from "@3-/write";
import { parse } from "yuku-parser";

const isStyl = (v) => v.includes("_.styl") || v.endsWith(".styl"),
  fixImportStyl = (fp) => {
    if (!existsSync(fp)) return;
    const code = read(fp);
    if (!code) return;

    let ast;
    try {
      ast = parse(code);
    } catch {
      return;
    }

    const { body } = ast.program,
      imports = body.filter((n) => n.type === "ImportDeclaration");
    if (imports.length === 0) return;

    const styl_idx = imports.findIndex((n) => isStyl(n.source.value));
    if (styl_idx < 0) return;

    const styl_node = imports[styl_idx],
      move_nodes = imports.slice(styl_idx + 1).filter((n) => {
        const v = n.source.value;
        return v.startsWith("./") && !isStyl(v);
      });

    if (move_nodes.length === 0) return;

    const before_styl = imports.slice(0, styl_idx),
      move_set = new Set(move_nodes),
      after_styl = imports.slice(styl_idx + 1).filter((n) => !move_set.has(n)),
      new_order = [...before_styl, ...move_nodes, styl_node, ...after_styl],
      new_import_str = new_order.map((n) => code.slice(n.start, n.end)).join("\n"),
      start = imports[0].start,
      end = imports[imports.length - 1].end,
      new_code = code.slice(0, start) + new_import_str + code.slice(end);

    if (new_code !== code) {
      write(fp, new_code);
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
          const fp = join(webc_dir, name);
          if (statSync(fp).isFile() && name.endsWith(".js")) {
            file_li.push(fp);
          }
        }
      }
    }

    for (const file of file_li) {
      fixImportStyl(file);
    }
  };

if (import.meta.main) {
  main();
}
