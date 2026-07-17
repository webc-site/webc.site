import walkRelIgnore from "@1-/walk/walkRelIgnore.js";
import { FILE } from "@1-/walk";
import { existsSync, readdirSync, rmdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { MD } from "./const.js";

export const list = async (dir, ext = MD) => {
    const file_li = [];
    if (!existsSync(dir)) return file_li;

    await walkRelIgnore(dir, async (kind, rel_path) => {
      if (kind === FILE && rel_path.endsWith(ext)) {
        file_li.push(join(dir, rel_path));
      }
    });
    return file_li;
  },
  clean = (dir) => {
    if (!existsSync(dir)) return;
    const list_li = readdirSync(dir);
    for (const file of list_li) {
      const full_path = join(dir, file);
      if (statSync(full_path).isDirectory()) {
        clean(full_path);
      }
    }
    if (readdirSync(dir).length === 0) {
      rmdirSync(dir);
    }
  };
