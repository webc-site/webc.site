import read from "@3-/read";
import { stat } from "node:fs/promises";
import { join } from "node:path";
import { existsSync } from "node:fs";
import ERR from "@3-/log/ERR.js";
import pub from "./pub.js";
import dir from "./dir.js";
import file from "./file.js";

const HTML = ".html",
  INDEX_HTML = "index" + HTML,
  isCleanUrl = (path) => path !== "/" && !path.endsWith(HTML) && !path.endsWith("/"),
  tryFile = async (name, fp) => {
    try {
      const s = await stat(fp);
      if (s.isFile()) {
        return await file(name, fp);
      }
    } catch {}
  };

export default (dist, host, port) => {
  const redirect_map = {},
    redirect_path = join(dist, "_redirects");

  if (existsSync(redirect_path)) {
    try {
      read(redirect_path)
        .split("\n")
        .forEach((raw_line) => {
          const line = raw_line.trim();
          if (!line || line.startsWith("#")) return;
          const [from, to, code] = line.split(/\s+/);
          if (code) {
            redirect_map[from] = [to, parseInt(code, 10)];
          }
        });
    } catch {}
  }

  return async (req, res) => {
    try {
      const url = new URL(req.url, "http://" + host + ":" + port),
        pathname = decodeURIComponent(url.pathname);

      let res_data = pathname.startsWith("/-/")
        ? await pub(pathname, req.headers["if-none-match"])
        : undefined;

      if (!res_data) {
        const redirect =
          redirect_map[pathname] ||
          (pathname.endsWith(HTML) ? redirect_map[pathname.slice(0, -HTML.length)] : undefined);

        if (redirect) {
          const [to, code] = redirect;
          if (code === 200) {
            const redirect_to = to === "/" ? "/" + INDEX_HTML : to;
            res_data = await tryFile(redirect_to, join(dist, redirect_to));
          } else {
            res.writeHead(code, { Location: to });
            res.end();
            return;
          }
        }
      }

      if (!res_data) {
        const file_path = join(dist, pathname);

        if (isCleanUrl(pathname)) {
          res_data = await tryFile(pathname + HTML, file_path + HTML);
        }

        if (!res_data) {
          try {
            const file_stat = await stat(file_path);

            if (file_stat.isDirectory()) {
              res_data = await dir(pathname, file_path);
            } else if (file_stat.isFile()) {
              res_data = await file(pathname, file_path);
            }
          } catch {
            res_data = ["Not Found", 404];
          }
        }
      }

      if (!res_data || res_data[1] === 404) {
        const res_404 = await tryFile("404" + HTML, join(dist, "404" + HTML));
        if (res_404) {
          res_data = res_404;
          res_data[1] = 404;
        }
      }

      const [body, status = 200, res_headers = {}] = res_data || ["Not Found", 404];
      res.writeHead(status, res_headers);
      res.end(body);
    } catch (err) {
      ERR(err);
      res.writeHead(500);
      res.end("Internal Server Error");
    }
  };
};
