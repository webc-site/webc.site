#!/usr/bin/env bun
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import run from "@1-/fix/run.js";

const main = async () => {
  const file_li = process.argv
    .slice(2)
    .map((file) => resolve(file))
    .filter(existsSync);

  if (file_li.length > 0) {
    await run(file_li);
  }
};

if (import.meta.main) {
  await main();
}
