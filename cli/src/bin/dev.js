import { env } from "node:process";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { join } from "node:path";
import { readdirSync, existsSync } from "node:fs";
import runVite from "../vite.js";
import killold from "@3-/killold";
import ls from "../lib/ls.js";
import watchWebc from "../lib/watchWebc.js";

const ANY_IP = "0.0.0.0",
  LOCAL_IP = "127.0.0.1",
  WEBC_LS = "WebC.ls";

export default async (root) => {
  await killold();
  const webc_dir = join(root, "src", "webc");
  if (!existsSync(webc_dir)) {
    console.error("webc directory not found: " + webc_dir);
    return 1;
  }

  // Generate initial ls files and start watching
  await ls(root, join(root, "src", "_/ls"));
  watchWebc(root);

  const component_li = readdirSync(webc_dir)
      .filter((file) => file.endsWith(".js"))
      .map((file) => file.slice(0, -3)),
    argv = yargs(hideBin(process.argv))
      .usage("usage: $0 [component]")
      .command("$0 [component]", "start development server for a component", (yargs) => {
        yargs.positional("component", {
          describe: "component name",
          type: "string"
        });
      })
      .option("port", {
        alias: "p",
        describe: "server port",
        type: "number",
        default: env.DEV_PORT || 8888
      })
      .option("host", {
        describe: "server host",
        type: "string",
        default: ANY_IP
      })
      .help("h")
      .alias("h", "help")
      .parse(),
    input_name = argv.component || WEBC_LS,
    input_name_lower = input_name.toLowerCase(),
    matched = component_li.find((c) => c.toLowerCase() === input_name_lower) || WEBC_LS,
    port = argv.port || 8888,
    host = argv.host || ANY_IP,
    open_host = host === ANY_IP ? LOCAL_IP : host;

  await runVite(root, host, port, matched, component_li, open_host);
};
