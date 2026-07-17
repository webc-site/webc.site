import { existsSync } from "node:fs";
import { join, relative } from "node:path";
import ext from "@3-/ext";
import extReplace from "../../lib/extReplace.js";
import resolveVirtual from "./styl.js";
import { HOST, resolvePath, respondStyl } from "../styl.js";
import webcLs from "../../lib/webcLs.js";
import read from "@3-/read";
import cssLi from "../../lib/cssLi.js";
import pugCompile from "../../lib/pugCompile.js";

export default (root, vfs, server) => {
  const comp_li = webcLs(join(root, "src")),
    comp_map = new Map(comp_li.map((name) => [name.toLowerCase(), name]));

  return async (req, res, next) => {
    const { url: raw_url } = req;
    if (!raw_url) return next();

    const [path_name, query] = raw_url.split("?");

    if (query === "raw") {
      const file_path = join(root, decodeURIComponent(path_name));
      if (existsSync(file_path)) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end(read(file_path));
        return;
      }
    }

    if (path_name.startsWith("/_/")) {
      const file_path = path_name.startsWith("/_/svg/")
        ? join(root, "src/styl/svg", path_name.slice(7))
        : resolveVirtual(root, path_name);
      if (file_path && existsSync(file_path)) {
        req.url = req.url.replace(path_name, "/" + relative(root, file_path));
        return next();
      }
    }

    const suffix = ext(path_name);
    if (suffix === "css" && (!query || query === HOST)) {
      const file_path = resolvePath(root, path_name),
        styl_path = file_path.endsWith(".styl") ? file_path : extReplace(file_path, "css", "styl");
      if (styl_path && existsSync(styl_path)) {
        respondStyl(root, styl_path, res, next);
        return;
      }
    }

    if (path_name.startsWith("/js/") && !path_name.includes(".")) {
      const js_name = path_name.slice(4),
        js_file = join(root, "src/js", js_name + ".js");
      if (existsSync(js_file)) {
        try {
          const default_tpl = pugCompile(root),
            body_content = `<c-vs><c-nav><c-back href="/"></c-back><c-i18n></c-i18n></c-nav><c-webc-js rel="${js_name}"></c-webc-js></c-vs>`,
            script_html = `<script type="module">import "/_/js/demo.js"; import "/src/WebC.js/_.js";</script>`,
            css_li = cssLi("/_/", ["/src/WebC.js/_.css"]),
            title = js_name + ".js",
            html = default_tpl({
              body: body_content + script_html,
              css_li,
              js_li: [],
              title
            });

          res.setHeader("Content-Type", "text/html");
          res.end(await server.transformIndexHtml(req.url, html));
          return;
        } catch (err) {
          return next(err);
        }
      }
    }

    const name = path_name.slice(1).toLowerCase(),
      com = path_name === "/" || path_name === "/index.html" ? "WebC.ls" : comp_map.get(name) || "";

    if (com) {
      const map = vfs(com),
        html_key = com + ".html",
        html = await map(html_key);
      if (html !== undefined) {
        try {
          res.setHeader("Content-Type", "text/html");
          res.end(await server.transformIndexHtml(req.url, html));
          return;
        } catch (err) {
          return next(err);
        }
      }
    }

    if (
      path_name.endsWith(".js") &&
      path_name.includes("/i18n/") &&
      existsSync(join(root, path_name.slice(0, -3) + ".yml"))
    ) {
      req.headers["sec-fetch-dest"] = "script";
      req.headers.accept = "*/*";
    }
    next();
  };
};
