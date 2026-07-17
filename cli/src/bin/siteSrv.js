#!/usr/bin/env bun

import { join } from "node:path";
import { env } from "node:process";
import int from "@3-/int";
import site from "./site.js";
import runSrv from "../srv/run.js";

const main = async (root) => {
  const dist = join(root, "dist/site"),
    port = env.WEBC_SITE_PORT ? int(env.WEBC_SITE_PORT) : 8889;

  await runSrv(dist, () => site(root), port);
};

if (import.meta.main) {
  await main(process.cwd());
}

export default main;
