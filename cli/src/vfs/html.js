import { join } from "node:path";
import { existsSync } from "node:fs";
import read from "@3-/read";
import pug from "pug";
import webcSiteConst from "../const/WebC.site.js";
import rmStart from "../lib/rmStart.js";
import extReplace from "../lib/extReplace.js";
import importDefault from "../lib/importDefault.js";
import { DIR_DEMO } from "../const/PATH.js";
import IS_PROD from "../const/IS_PROD.js";
import cssLi from "../lib/cssLi.js";
import pugCompile from "../lib/pugCompile.js";

const find = (root, path_li) =>
    path_li.filter((path) => existsSync(join(root, path))).map((path) => "/" + path),
  demoBody = (demo_html, has_back = true) => {
    const back = has_back ? '<c-back href="/"></c-back>' : "";
    return "<c-vs><c-nav>" + back + "<c-i18n></c-i18n></c-nav>" + demo_html + "</c-vs>";
  },
  distPath = (src_path) => {
    const rel = rmStart(rmStart(src_path, "/"), "src/");
    if (!IS_PROD) {
      return "./" + (extReplace(rel, "styl", "css") || rel);
    }
    if (rel.endsWith("/_.styl")) {
      return "./" + rel.slice(0, -7) + "/css.js";
    }
    return "./" + (extReplace(rel, "styl", "js") || rel);
  },
  DEMO_DIR = "./" + DIR_DEMO.join("/") + "/",
  importD = (name) => '(await import("' + DEMO_DIR + name + '.js")).default(document);',
  lsScript = (src, name, prefix = "./_/") => {
    const demo_js_path = join(src, name, "demo/_.js"),
      has_demo_i18n = existsSync(join(src, name, "demo/i18n")),
      has_com_js = existsSync(join(src, name, "_.js")),
      has_demo_js = existsSync(demo_js_path) || has_demo_i18n || has_com_js,
      import_li = ['import"' + prefix + 'js/demo.js";'];
    let body_script = "";
    if (has_demo_js) {
      const has_default =
        (has_demo_i18n || has_com_js) && !existsSync(demo_js_path)
          ? true
          : read(demo_js_path).includes("export default");
      if (has_default) {
        body_script += importD(name);
      } else {
        import_li.push('import"' + DEMO_DIR + name + '.js";');
      }
    }

    return '<script type="module">' + import_li.join("") + body_script + "</script>";
  },
  renderHtml = async (root) => {
    const default_tpl = pugCompile(root),
      title_fn = await importDefault(root, "src/conf/TITLE.js"),
      ignore_li = await importDefault(root, "src/conf/webcLsIgnore.js"),
      ignore_set = new Set(ignore_li.map((k) => k.toLowerCase()));

    return (com, dir) => {
      const demo_pug_path = join(dir, "demo/_.pug");
      if (!existsSync(demo_pug_path)) return;

      const title = title_fn(com),
        demo_html = pug.compile(read(demo_pug_path), { filename: demo_pug_path })(),
        is_webc_site = com === webcSiteConst,
        prefix = "./_/",
        has_back = !ignore_set.has(com.toLowerCase()),
        body_content = is_webc_site ? demo_html : demoBody(demo_html, has_back),
        script_html = lsScript(join(root, "src"), com, prefix);
      let js_li = [];
      const css_li = cssLi(prefix),
        url_li = IS_PROD ? [prefix + "_.js", prefix + "demo.js"] : [],
        push = (sub) =>
          find(root, ["src/" + com + "/" + sub + ".styl"]).forEach((p) => {
            let url = distPath(p).replace(/^\.\//, prefix);
            if (IS_PROD) {
              url_li.push(url);
            } else {
              css_li.push(url);
            }
          });

      push("demo/_");
      push("_");

      if (IS_PROD) {
        js_li = [
          "[" +
            url_li.map((url) => "import('" + url + "')").join(",") +
            "].forEach(async p=>(await p).default(document))"
        ];
      }

      return default_tpl({
        body: body_content + script_html,
        css_li,
        js_li,
        title
      });
    };
  };

export default renderHtml;
