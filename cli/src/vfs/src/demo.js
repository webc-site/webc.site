import read from "@3-/read";
import { existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { compile } from "pug";
import { EXPORT_DEFAULT_REGEX } from "../../lib/re.js";
import { DEMO_JS } from "../../const/PATH.js";
import IS_PROD from "../../const/IS_PROD.js";
import ctRepl from "../../lib/ctRepl.js";

const CSS_LI = ["styl/_.styl", "styl/demo.styl", "{name}/_.styl", "{name}/demo/_.styl"],
  stylToCss = (s) => s.replace(/\.styl$/, ".css"),
  stylToJs = (s) => {
    if (s.endsWith("/_.styl")) {
      return s.slice(0, -7) + "/css.js";
    }
    return s.replace(/\.styl$/, ".js");
  },
  stylToUrl = IS_PROD ? stylToJs : stylToCss,
  prodConf = (prefix = "/_/", css_prefix) => {
    const css_p = css_prefix === "/_/" ? css_prefix : prefix;
    return {
      prefix,
      onPug: (x) => x,
      css_url: (styl) => {
        return css_p + stylToUrl(styl.startsWith("styl/") ? styl.slice(5) : styl);
      }
    };
  },
  demoInfo = (dir, name) => {
    const demo_dir = join(dir, name, "demo"),
      js_path = join(demo_dir, "_.js"),
      has_js = existsSync(js_path),
      has_i18n = existsSync(join(demo_dir, "i18n")),
      com_path = join(dir, name),
      has_com_js = existsSync(join(com_path, "_.js")),
      has_com_i18n = name !== "I18n" && existsSync(join(com_path, "I18N.js")),
      raw = has_js ? read(js_path) : "",
      has_default =
        (has_js && (EXPORT_DEFAULT_REGEX.test(raw) || (!raw.trim() && has_i18n))) || has_com_js;
    return [has_js || has_com_js, has_i18n, has_default, has_com_js, has_com_i18n];
  },
  demoJs = (name, has_js, has_i18n, has_default) => {
    const line_li = [];

    if (has_js || has_i18n) {
      const imp_path = "../../" + name + "/" + DEMO_JS,
        call_default = has_default || (!has_js && has_i18n);
      if (call_default) {
        line_li.push('export {default} from "' + imp_path + '";');
      } else {
        line_li.push('import "' + imp_path + '";');
        line_li.push("export default async()=>{};");
      }
    } else {
      line_li.push("export default async()=>{};");
    }

    return line_li.join("");
  },
  prodPath = (name, styl) => {
    styl = styl.replace("{name}", name);
    if (styl === "styl/_.styl") return "../../_.js";
    if (styl === "styl/demo.styl") return "../../demo.js";
    if (styl.endsWith("/_.styl")) {
      return "../../" + styl.slice(0, -7) + "/css.js";
    }
    return "../../" + styl.replace(/\.styl$/, ".js");
  };

export default (prefix, dir, css_prefix) => {
  const name = basename(dir),
    src_dir = dirname(dir),
    conf = prodConf(prefix || "/_/", css_prefix),
    { css_url, onPug } = conf,
    [has_js, has_i18n, has_default, has_com_js, has_com_i18n] = demoInfo(src_dir, name),
    pug_path = join(src_dir, name, "demo/_.pug"),
    exist_styl_li = CSS_LI.filter((styl) =>
      existsSync(join(src_dir, styl.replace("{name}", name)))
    );

  let import_code = "",
    css_export = "";

  if (IS_PROD) {
    const import_statement_li = [],
      var_li = [];
    exist_styl_li.forEach((styl, i) => {
      const var_name = "_css" + i;
      import_statement_li.push("import " + var_name + ' from "' + prodPath(name, styl) + '";');
      var_li.push(var_name);
    });
    import_code = import_statement_li.join("\n") + "\n";
    css_export = "export const CSS = [" + var_li.join(",") + "];";
  } else {
    const css_str = exist_styl_li
      .map((styl) => styl.replace("{name}", name))
      .map(css_url)
      .join(";");
    css_export = "export const CSS = " + JSON.stringify(css_str) + ";";
  }

  const js_code = demoJs(name, has_js, has_i18n, has_default),
    extra_export = [
      ["HAS_JS", has_com_js],
      ["HAS_I18N", has_com_i18n]
    ]
      .map(([key, val]) => (val ? "\nexport const " + key + " = 1;" : ""))
      .join("");
  let htm = "";
  if (existsSync(pug_path)) {
    const raw = read(pug_path),
      html_compiled = compile(onPug ? onPug(raw) : raw, { filename: pug_path })(),
      [new_html] = ctRepl(html_compiled);
    htm = new_html;
  }

  return (
    import_code +
    js_code +
    extra_export +
    "\n" +
    css_export +
    "\nexport const HTM=" +
    JSON.stringify(htm) +
    ";"
  );
};
