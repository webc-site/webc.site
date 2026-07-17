import { transform } from "lightningcss";
import utf8d from "@3-/utf8/utf8d.js";
import utf8e from "@3-/utf8/utf8e.js";
import { basename, join, dirname, relative, resolve } from "node:path";
import extReplace from "../../lib/extReplace.js";
import { stylCompile } from "../../lib/styl.js";
import vfsStylCompile from "../../vfs/styl.js";
import css2js from "../../lib/css2js.js";

export default (root, styl_path, css_path, filename, external_import) => {
  const compile_fn = basename(styl_path).endsWith("_.styl") ? vfsStylCompile : stylCompile;
  let [css] = compile_fn(styl_path, external_import);
  if ((external_import && filename === "demo.styl") || filename === "_.styl") {
    css = css.replace(/@import\s+url\((['"]?)\.\.\/(.+?)\1\)/g, '@import "./$2"');
    css = css.replace(/(@import\s+['"])\.\.\//g, "$1./");
  }
  const original_css_path = join(
    root,
    "dist/site/_",
    extReplace(filename, "styl", "css") || filename
  );
  if (original_css_path !== css_path) {
    const from_dir = dirname(original_css_path),
      to_dir = dirname(css_path);
    css = css.replace(
      /(@(?:import|require)\s+['"])([^'"]+)(['"])/g,
      (match, prefix, import_path, suffix) => {
        if (import_path.startsWith(".")) {
          const abs_path = resolve(from_dir, import_path),
            new_rel = relative(to_dir, abs_path).replace(/\\/g, "/");
          return prefix + new_rel + suffix;
        }
        return match;
      }
    );
  }

  const options = {
      filename,
      code: utf8e(css),
      minify: true,
      sourceMap: false
    },
    { code } = transform(options),
    is_styl_entry = filename.endsWith("/_.styl") || filename === "_.styl",
    js_filename = is_styl_entry
      ? filename === "_.styl"
        ? "_.js"
        : "css.js"
      : extReplace(filename, "styl", "js"),
    js_path = join(dirname(css_path), js_filename);

  css2js(utf8d(code), css_path, js_path);
};
