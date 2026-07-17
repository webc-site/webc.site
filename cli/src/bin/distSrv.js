#!/usr/bin/env bun

import { join } from "node:path";
import { env } from "node:process";
import int from "@3-/int";
import dist from "./dist.js";
import runSrv from "../srv/run.js";

const main = async (root) => {
  const dist_dir = join(root, "dist/dist"),
    port = env.WEBC_DIST_PORT ? int(env.WEBC_DIST_PORT) : 8890;
  await runSrv(dist_dir, () => dist(root), port);
};

if (import.meta.main) {
  await main(process.cwd());
}

export default main;
