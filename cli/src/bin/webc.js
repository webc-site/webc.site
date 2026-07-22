#!/usr/bin/env node
import { readdirSync } from "node:fs";
import { join, basename } from "node:path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { CLI_I18N } from "../cli/cli.js";

const BIN_DIR = import.meta.dirname,
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
    desc = CLI_I18N[cmd_name] || cmd_name;

  y = y.command(
    cmd_name,
    desc,
    (yargs) => yargs.help("h").alias("h", "help"),
    async (argv) => {
      const mod = await import(join(BIN_DIR, file)),
        fn = mod.default,
        pwd = process.cwd();
      if (typeof fn === "function") {
        await fn(pwd, argv);
      }
    }
  );
}

y.parse();
