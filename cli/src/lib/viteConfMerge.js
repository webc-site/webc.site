import { existsSync } from "node:fs";
import { join } from "node:path";
import merge from "@3-/merge";

export default async (root, conf) => {
  const path = join(root, "vite.config.js");
  return existsSync(path) ? merge(conf, (await import(path)).default) : conf;
};
