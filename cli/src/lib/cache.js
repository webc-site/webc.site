import { join } from "node:path";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { unpack, pack } from "msgpackr";
import upsertGitignore from "@1-/upsert_gitignore";

export default (dir, name) => {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  upsertGitignore(join(dir, ".gitignore"), ["/" + name]);

  const file = join(dir, name);
  let cache = {};
  if (existsSync(file)) {
    try {
      cache = unpack(readFileSync(file));
    } catch {
      cache = {};
    }
  }

  const used = new Set();

  // 返回 [get, set, save]，记录并只保存本次运行用到的 key，用以清理失效缓存
  return [
    (key) => {
      used.add(key);
      return cache[key];
    },
    (key, val) => {
      used.add(key);
      cache[key] = val;
    },
    () => {
      const next = {};
      for (const key of used) {
        if (key in cache) {
          next[key] = cache[key];
        }
      }
      writeFileSync(file, pack(next));
    }
  ];
};
