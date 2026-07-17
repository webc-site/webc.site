#!/usr/bin/env bun
import read from "@1-/read";
import { promises as fs } from "node:fs";
import { join } from "node:path";
import ROOT from "./ROOT.js";

async function walk(dir) {
  const files = [],
    list = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of list) {
    const res = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (
        entry.name === "node_modules" ||
        entry.name === ".git" ||
        entry.name === ".codegraph" ||
        entry.name === "dist"
      ) {
        continue;
      }
      files.push(...(await walk(res)));
    } else if (entry.isFile()) {
      const name = entry.name.toLowerCase();
      if (name.endsWith(".md") || name.endsWith(".yml") || name.endsWith(".yaml")) {
        files.push(res);
      }
    }
  }
  return files;
}

const files = await walk(ROOT);
let count = 0;

for (const file of files) {
  const content = await read(file);
  if (content.includes("```javascript")) {
    const nextContent = content.replaceAll("```javascript", "```js");
    await fs.writeFile(file, nextContent, "utf8");
    console.log(`Replaced: ${file}`);
    count++;
  }
}

console.log(`Total replaced: ${count} files.`);
