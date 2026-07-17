import { createServer } from "vite";
import { resolve } from "node:path";
import { chdir, env } from "node:process";
import int from "@3-/int";
import killold from "@3-/killold";
import open from "../lib/open.js";
import viteConf from "../vite.js";
import GREEN from "@3-/log/GREEN.js";
import ls from "../lib/ls.js";
import webcLs from "../lib/webcLs.js";
import getCompName from "../lib/cli.js";

const ANY_IP = "0.0.0.0",
  LOCALHOST = "127.0.0.1",
  SRC = "src";

export default async (root, webc_path) => {
  const comp_name = getCompName(root, webc_path, "WebC.ls"),
    src_dir = resolve(root, SRC);

  if (comp_name === undefined) return;

  chdir(root);
  await Promise.all([killold(), ls(root, webcLs(src_dir))]);

  GREEN("→ " + comp_name);

  const { WEBC_HOST, WEBC_PORT } = env,
    host = WEBC_HOST || ANY_IP,
    port = WEBC_PORT ? int(WEBC_PORT) : 8888,
    server = await createServer(
      await viteConf(root, {
        server: {
          host,
          port,
          open: false,
          hmr: false
        }
      })
    );

  await server.listen();
  server.printUrls();

  const resolved_host = server.config.server.host || LOCALHOST,
    target_host = resolved_host === ANY_IP ? LOCALHOST : resolved_host,
    resolved_port = server.config.server.port,
    url_path = comp_name && comp_name !== "WebC.ls" ? "/" + comp_name : "";
  await open("http://" + target_host + ":" + resolved_port + url_path);
};
