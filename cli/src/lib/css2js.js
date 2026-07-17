import write from "@3-/write";
import read from "@3-/read";
import { dirname, join, resolve, relative } from "node:path";
import { existsSync } from "node:fs";
import svgMinify from "./svgMinify.js";
import svgEncode from "./svgEncode.js";
import md5 from "@3-/base64url/md5B64.js";

export default (css_content, css_path, js_path) => {
  const normalized_path = css_path.replace(/\\/g, "/"),
    idx = normalized_path.lastIndexOf("/dist/site/_/"),
    root = css_path.slice(0, idx),
    rel_path = css_path.slice(idx + 13),
    dist_under = join(root, "dist/site/_"),
    final_js_path = js_path || join(dirname(css_path), "css.js"),
    rel_dir = dirname(rel_path),
    styl_dir = join(root, "src", rel_dir === "." ? "styl" : rel_dir),
    import_li = [],
    link_li = [],
    svg_vars = new Set();

  // 1. 替换 @import
  let clean_css = css_content.replace(
    /@import\s*(?:url\()?(['"]?)([^'")\s]+?)\1\)?\s*;?/g,
    (match, quote, import_path) => {
      if (
        import_path.startsWith("//") ||
        import_path.startsWith("http://") ||
        import_path.startsWith("https://")
      ) {
        link_li.push(import_path);
        return "";
      }
      const js_import_path = import_path.endsWith("/_.css")
        ? import_path.slice(0, -6) + "/css.js"
        : import_path.endsWith(".css")
          ? import_path.slice(0, -4) + ".js"
          : import_path;
      import_li.push(js_import_path);
      return "";
    }
  );

  // 2. 替换并处理 svg url
  clean_css = clean_css.replace(
    /url\(\s*['"]?([^'")\s]+?\.svg)(?:[#?][^'")\s]*)?['"]?\s*\)/g,
    (match, url_path) => {
      const [path_part] = url_path.split(/(?=[#?])/);
      if (!path_part.startsWith(".")) {
        return match;
      }

      const svg_abs_path = resolve(styl_dir, path_part);
      if (existsSync(svg_abs_path)) {
        const raw = read(svg_abs_path).trim(),
          cleaned = svgMinify(raw),
          hash = md5(cleaned).slice(0, 12),
          svg_js_path = join(dist_under, "svg", hash + ".js");

        if (!existsSync(svg_js_path)) {
          const encoded = svgEncode(cleaned),
            svg_js_content =
              '(await import("../js/dom.js")).css(":root{--' +
              hash +
              ':url(\\"' +
              encoded +
              '\\")}")';
          write(svg_js_path, svg_js_content);
        }
        svg_vars.add(hash);
        return "var(--" + hash + ")";
      }
      return match;
    }
  );

  if (!clean_css && !import_li.length && !svg_vars.size && !link_li.length) {
    const empty_content = "export default()=>{}";
    if (final_js_path) {
      write(final_js_path, empty_content);
    }
    return empty_content;
  }

  const toRel = (target) => {
      const rel = relative(dirname(final_js_path), target).replace(/\\/g, "/");
      return rel.startsWith(".") ? rel : "./" + rel;
    },
    import_fn_li = ["D"];

  if (clean_css) {
    import_fn_li.push("css");
  }
  if (link_li.length) {
    import_fn_li.push("newEl");
  }

  const import_statement_li = import_fn_li.length
      ? [
          "import{" +
            import_fn_li.join(",") +
            '}from"' +
            toRel(join(dist_under, "js/dom.js")) +
            '";'
        ]
      : [],
    call_li = [];

  import_li.forEach((p) => {
    call_li.push("(await import(" + JSON.stringify(p) + ")).default(root)");
  });

  link_li.forEach((url) => {
    call_li.push(
      'const el=newEl("link");el.rel="stylesheet";el.href=' +
        JSON.stringify(url) +
        ";(root.head||root).appendChild(el)"
    );
  });

  svg_vars.forEach((md5) => {
    import_statement_li.push('import"' + toRel(join(dist_under, "svg", md5 + ".js")) + '";');
  });

  if (clean_css) {
    call_li.push("css(" + JSON.stringify(clean_css) + ",root)");
  }

  const is_async = import_li.length > 0,
    js_content =
      import_statement_li.join("") +
      "export default" +
      (is_async ? " async" : "") +
      "(root=D)=>{" +
      call_li.join(";") +
      "}";

  if (final_js_path) {
    write(final_js_path, js_content);
  }
  return js_content;
};
