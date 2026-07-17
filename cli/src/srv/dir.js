import { readFile, readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import { compileFile } from "pug";
import rmStart from "../lib/rmStart.js";
import rmEnd from "../lib/rmEnd.js";
import SRV_PUB from "../const/SRV_PUB.js";
import { FILE, FOLDER, HTML, MAP } from "./pub/kind.js";

const RENDER_TEMPLATE = compileFile(join(SRV_PUB, "index.pug")),
  HTML_TEMPLATE = RENDER_TEMPLATE(),
  CONTENT_TYPE = "Content-Type",
  HTML_UTF8 = "text/html; charset=utf-8";

export default async (pathname, file_path) => {
  const index_path = join(file_path, "index.html");
  try {
    const index_stat = await stat(index_path);
    if (index_stat.isFile()) {
      const body = await readFile(index_path);
      return [body, 200, { [CONTENT_TYPE]: HTML_UTF8 }];
    }
  } catch {}

  const files = await readdir(file_path, { withFileTypes: true });
  files.sort((a, b) => {
    const a_is_dir = a.isDirectory(),
      b_is_dir = b.isDirectory(),
      a_is_html = !a_is_dir && a.name.endsWith(".html"),
      b_is_html = !b_is_dir && b.name.endsWith(".html"),
      a_priority = a_is_html ? HTML : a_is_dir ? FOLDER : FILE,
      b_priority = b_is_html ? HTML : b_is_dir ? FOLDER : FILE;
    if (a_priority !== b_priority) return a_priority - b_priority;
    return a.name.localeCompare(b.name);
  });

  const title = pathname === "/" ? pathname : rmEnd(rmStart(pathname, "/"), "/"),
    files_data = files.map((item) => {
      const { name } = item,
        is_dir = item.isDirectory();
      let type = is_dir ? FOLDER : FILE;
      if (!is_dir && name.endsWith(".html")) {
        type = HTML;
      }
      return { name, is_dir, type };
    }),
    injected_data =
      "const DATA = " +
      JSON.stringify({
        pathname,
        title,
        files: files_data,
        MAP,
        HTML,
        FOLDER
      }) +
      ";",
    html = HTML_TEMPLATE.replace("/* DATA */", injected_data);

  return [html, 200, { [CONTENT_TYPE]: HTML_UTF8 }];
};
