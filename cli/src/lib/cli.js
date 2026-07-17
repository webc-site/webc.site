import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { resolve } from "node:path";
import { readdirSync } from "node:fs";
import ERR from "@3-/log/ERR.js";
import i18n from "./i18n.js";
import isWebc from "./isWebc.js";

const SRC = "src",
  _ = i18n({ filename: "dev.js" }),
  getCompName = (root, webc_path, default_path) => {
    webc_path =
      webc_path ||
      yargs(hideBin(process.argv))
        .usage(_.usage)
        .command("$0 [webc-path]", _.cmdDesc, (yargs) =>
          yargs.positional("webc-path", {
            describe: _.pathDesc,
            type: "string"
          })
        )
        .help().argv.webcPath ||
      default_path;

    if (!webc_path) return "";

    const target = webc_path.replace(/^src\//, "").toLowerCase(),
      dirs = readdirSync(resolve(root, SRC), { withFileTypes: true })
        .filter((d) => d.isDirectory() && isWebc(d.name))
        .map((d) => d.name),
      match = dirs.find((name) => name.toLowerCase() === target);

    if (!match) {
      ERR(_.notFound + ": " + webc_path);
      return;
    }
    return match;
  };

export default getCompName;
