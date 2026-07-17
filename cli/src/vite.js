import { defineConfig } from "vite";
import webcPlugin from "./vite/webc.js";
import declineHmr from "./vite/declineHmr.js";
import merge from "@3-/merge";
import viteConfMerge from "./lib/viteConfMerge.js";
import define from "./lib/define.js";

export default async (root, conf) => {
  const plugins = [await webcPlugin(root)];
  if (conf?.server) {
    plugins.push(declineHmr());
  }

  conf = merge(
    {
      configFile: false,
      root,
      plugins,
      define: await define(root, !!conf?.server)
    },
    conf
  );
  return defineConfig(await viteConfMerge(root, conf));
};
