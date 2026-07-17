import { ERR_NOT_FOUND } from "@1-/stylus/ERR.js";
import { join, basename } from "node:path";
import inlineMap from "../lib/inlineMap.js";
import { stylCompile } from "../lib/styl.js";
import vfsStylCompile from "../vfs/styl.js";

import rmStart from "../lib/rmStart.js";
import resolveVirtual from "./url/styl.js";
import extReplace from "../lib/extReplace.js";

const errStr = (err, file_path) => {
  let msg = "";
  if (Array.isArray(err)) {
    const [code, data] = err;
    msg = code === ERR_NOT_FOUND ? "File not found: " + data : "Error code " + code + ": " + data;
  } else {
    msg = err?.message || String(err);
  }
  return "Stylus compile error (" + file_path + "):\n" + msg;
};

export const HOST = ":host",
  resolvePath = (root, fp) => {
    if (fp.startsWith("/_/")) {
      const p = fp.slice(3),
        mapped = extReplace(p, "css", "styl");
      if (mapped && !p.includes("/")) {
        return join(root, "src/styl", mapped);
      }
    }
    const virtual = resolveVirtual(root, fp);
    if (virtual) return virtual;
    return fp.startsWith("/") && !fp.startsWith(root) ? join(root, rmStart(fp, "/")) : fp;
  },
  respondStyl = (root, file_path, res, next) => {
    try {
      const is_vfs = basename(file_path) === "_.styl" && !file_path.includes("/src/styl/"),
        compile_fn = is_vfs ? vfsStylCompile : stylCompile,
        external_import = basename(file_path) !== "_.styl" || is_vfs,
        [css_raw, map] = compile_fn(file_path, external_import);
      let css = css_raw;
      if (external_import && basename(file_path) === "demo.styl") {
        css = css.replace(/(@(?:import|require)\s+['"])\.\.\//g, "$1./");
      }
      const nested_css = inlineMap(css, map);
      res.setHeader("Content-Type", "text/css");
      res.statusCode = 200;
      res.end(nested_css);
    } catch (err) {
      next(new Error(errStr(err, file_path)));
    }
  };
