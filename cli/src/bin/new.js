#!/usr/bin/env bun

import { join } from "node:path";
import { existsSync, readdirSync, mkdirSync, copyFileSync } from "node:fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import write from "@3-/write";
import tranFrom from "../lib/tranFrom.js";
import i18n from "../lib/i18n.js";

const CSS = "css",
  JS = "js",
  SRC = "src",
  _ = i18n(import.meta),
  cap = (s) => s.charAt(0).toUpperCase() + s.slice(1),
  copy = (src, dest, filter) => {
    if (!existsSync(dest)) {
      mkdirSync(dest, { recursive: true });
    }
    for (const entry of readdirSync(src, { withFileTypes: true })) {
      const { name } = entry,
        src_path = join(src, name),
        dest_path = join(dest, name);
      if (entry.isDirectory()) {
        copy(src_path, dest_path, filter);
      } else if (entry.isFile() && filter(name, src_path)) {
        copyFileSync(src_path, dest_path);
      }
    }
  },
  parser = yargs(hideBin(process.argv))
    .usage(_.usage)
    .command("$0 <type> <name>", _.cmdDesc, (y) => {
      y.positional("type", {
        type: "string",
        choices: [CSS, JS],
        desc: _.typeDesc
      }).positional("name", {
        type: "string",
        desc: _.nameDesc
      });
    })
    .help()
    .alias("h", "help");

export default (root) => {
  const i18n_from = tranFrom(root),
    args = process.argv.slice(2),
    { type, name } = parser.parse(args);
  if (args.length === 0) {
    parser.showHelp();
    process.exit(0);
  }

  if (!type || !name) {
    parser.showHelp();
    process.exit(1);
  }

  const com_name = cap(name),
    is_css = type === CSS,
    tmpl_dir = join(root, SRC, "tmpl"),
    target_dir = join(root, SRC, com_name),
    i18n_dir = "i18n/" + i18n_from;

  copy(
    tmpl_dir,
    target_dir,
    is_css ? (name, path) => !name.endsWith("." + JS) || /[\\/]demo[\\/]/.test(path) : () => true
  );

  [
    [i18n_dir + "/README.md", "# "],
    ["demo/" + i18n_dir + "/pug.yml", ""]
  ].forEach(([rel_path, content]) => write(join(target_dir, rel_path), content));

  console.log("✅ " + target_dir);
};
