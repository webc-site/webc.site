import { createServer } from "node:http";
import { env } from "node:process";
import { networkInterfaces } from "node:os";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import open from "../lib/open.js";
import getCompName from "../lib/cli.js";
import GREEN from "@3-/log/GREEN.js";
import killold from "@3-/killold";
import handler from "./handler.js";

const ANY = "0.0.0.0",
  HTTP = "http://";

export default async (dist, run, default_port = 8889) => {
  const argv = yargs(hideBin(process.argv))
      .command("$0 [webc-path]", "Start static server", (yargs) =>
        yargs.positional("webc-path", {
          type: "string"
        })
      )
      .option("port", {
        alias: "p",
        type: "number",
        default: default_port,
        describe: "Port to bind the server to"
      })
      .help()
      .alias("h", "help").argv,
    comp_name = getCompName(process.cwd(), argv.webcPath);

  if (comp_name === undefined) return;

  const url_path = comp_name ? "/" + comp_name : "",
    port = argv.port;

  if (run) {
    await run();
  }

  await killold();
  const host = env.WEBC_HOST || ANY,
    server = createServer(handler(dist, host, port));

  server.listen(port, host);

  if (host === ANY) {
    for (const net_li of Object.values(networkInterfaces())) {
      for (const net of net_li) {
        if (net.family === "IPv4" || net.family === 4) {
          GREEN(HTTP + net.address + ":" + port + url_path);
        }
      }
    }
  } else {
    GREEN(HTTP + host + ":" + port + url_path);
  }
  await open(HTTP + (host === ANY ? "127.0.0.1" : host) + ":" + port + url_path);
};
