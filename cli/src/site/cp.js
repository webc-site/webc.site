import { cpSync, existsSync } from "node:fs";
import { mkdir, copyFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { DIR } from "@1-/walk";
import walkRelIgnore from "@1-/walk/walkRelIgnore.js";
import ext from "@3-/ext";

const EXT_SET = new Set(["avif", "jpg", "jpeg", "png", "webp", "gif", "ico", "svg"]);

export default async (src, dist, component_li) => {
  const public_dir = resolve(src, "../public"),
    task_li = [];

  await mkdir(dist, { recursive: true });

  if (existsSync(public_dir)) {
    task_li.push(
      (async () => {
        cpSync(public_dir, dist, { recursive: true });
      })()
    );
  }

  task_li.push(
    ...component_li.map(async (name) => {
      const comp_src = join(src, name);
      await walkRelIgnore(comp_src, async (type, rel) => {
        if (type !== DIR) {
          if (EXT_SET.has(ext(rel))) {
            const from = join(comp_src, rel),
              to = join(dist, "_", name, rel);
            await mkdir(dirname(to), { recursive: true });
            await copyFile(from, to);
          }
        }
      });
    })
  );

  await Promise.all(task_li);
};
