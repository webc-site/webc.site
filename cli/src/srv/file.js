import { readFile, stat } from "node:fs/promises";
import ext from "@3-/ext";
import mime from "../lib/mime.js";

const CONTENT_TYPE = "Content-Type";

export default async (pathname, file_path) => {
  const body = await readFile(file_path),
    res_headers = {
      [CONTENT_TYPE]: mime(file_path)
    },
    suffix = ext(pathname);

  if (suffix === "js" || suffix === "css") {
    const map_path = file_path + ".map";
    try {
      const map_stat = await stat(map_path);
      if (map_stat.isFile()) {
        const base = pathname.slice(pathname.lastIndexOf("/") + 1);
        res_headers["SourceMap"] = base + ".map";
      }
    } catch {}
  }
  return [body, 200, res_headers];
};
