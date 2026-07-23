#!/usr/bin/env node
import { existsSync, readdirSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { CLI_I18N } from "../cli/cli.js";

const pwd = () => {
    const cwd = process.cwd();
    let dir = cwd;
    while (dir) {
      if (existsSync(join(dir, "src/webc"))) return dir;
      const parent = dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }
    return cwd;
  },
  BIN_DIR = import.meta.dirname,
  file_li = readdirSync(BIN_DIR).filter((f) => f.endsWith(".js") && basename(f, ".js") !== "webc");

let y = yargs(hideBin(process.argv))
  .scriptName("webc")
  .usage("Usage: webc <command> [options]")
  .demandCommand(1, "Please specify a command")
  .help("h")
  .alias("h", "help")
  .strict();

for (const file of file_li) {
  const cmd_name = basename(file, ".js"),
    desc = CLI_I18N[cmd_name] ?? cmd_name;

  y = y.command(
    cmd_name,
    desc,
    (y) => y.help("h").alias("h", "help"),
    async (argv) => {
      const mod = await import(join(BIN_DIR, file));
      await mod.default(pwd(), argv);
    }
  );
}

if (import.meta.main) y.parse();
