import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import vfsInit from "../../vfs.js";
import { parse } from "yuku-parser";
import write from "@3-/write";
import isStr from "@3-/is_str";
import writeDict from "./writeDict.js";
import { I18N, JS_YML, PUG_YML } from "./const.js";
import ymlLangMap from "./ymlLangMap.js";
import { relDemoToI18n } from "../../const/PATH.js";

export const extractExports = (code) => {
  try {
    const res = parse(code),
      replace_li = [],
      walk = (node) => {
        if (!node || typeof node !== "object") return;
        if (
          node.type === "ExportNamedDeclaration" &&
          node.declaration &&
          node.declaration.type === "VariableDeclaration"
        ) {
          const decl = node.declaration;
          if (decl.kind === "const") {
            for (const d of decl.declarations) {
              if (
                d.type === "VariableDeclarator" &&
                d.id &&
                d.id.type === "Identifier" &&
                d.init &&
                d.init.type === "Literal" &&
                isStr(d.init.value)
              ) {
                replace_li.push({
                  start: d.init.start,
                  end: d.init.end,
                  name: d.id.name,
                  key: d.init.value
                });
              }
            }
          }
        }
        for (const key in node) {
          const val = node[key];
          if (Array.isArray(val)) {
            for (const item of val) walk(item);
          } else {
            walk(val);
          }
        }
      };
    if (res.program) {
      walk(res.program);
    }
    return replace_li;
  } catch {
    return [];
  }
};

const processI18nJs = async (
  src,
  dist,
  name,
  from_lang,
  lang_map,
  mid,
  i18n_dir,
  import_path,
  vfs
) => {
  const key = (mid ? mid + "/" : "") + "I18N.js",
    map = vfs(name),
    dest_js_path = join(dist, name, mid, "I18N.js");
  let code = map(key);
  if (code === undefined) return;
  code = code
    .replace(/\bexport\s+default\s+async\s*\(code\)\s*=>[\s\S]*$/, "")
    .replace("import(`" + relDemoToI18n(name), "import(`../../" + name + "/demo/i18n/");
  const replace_li = extractExports(code),
    key_li = replace_li.map((r) => r.key);

  if (replace_li.length) {
    const sorted = [...replace_li].sort((a, b) => b.start - a.start);
    for (const rep of sorted) {
      const idx = key_li.indexOf(rep.key);
      code = code.slice(0, rep.start) + idx + code.slice(rep.end);
    }
  }

  if (code && !code.endsWith("\n")) {
    code += "\n";
  }

  const from_js_yml = join(i18n_dir, from_lang, JS_YML),
    from_pug_yml = join(i18n_dir, from_lang, PUG_YML),
    type = !existsSync(from_js_yml) && existsSync(from_pug_yml) ? "pug" : "js",
    suffix =
      (import_path.startsWith("/") || import_path.startsWith("../")) &&
      !import_path.includes("/demo/")
        ? "[" + JSON.stringify(name) + "]"
        : "",
    import_expr = code.includes("export const i18n =")
      ? "i18n(code)"
      : "import(" +
        (import_path.startsWith("/") || import_path.startsWith(".") ? "/* @vite-ignore */ " : "") +
        "`" +
        import_path +
        "`" +
        ")";

  code += "export default async (code) => (await " + import_expr + ")." + type + suffix + ";\n";

  write(dest_js_path, code);

  ymlLangMap(i18n_dir, JS_YML, key_li, lang_map, name);
};

export default async (src, dist, component_li, from_lang) => {
  const vfs = await vfsInit(dirname(src)),
    js_lang_map = {},
    js_demo_lang_map = {};
  await Promise.all(
    component_li.flatMap((name) =>
      [
        [js_lang_map, "", `../_/\${code}.js`],
        [js_demo_lang_map, "demo", "../../" + name + "/demo/i18n/${code}.js"]
      ].map(([lang_map, mid, import_path]) =>
        processI18nJs(
          src,
          dist,
          name,
          from_lang,
          lang_map,
          mid,
          join(src, name, mid, I18N),
          import_path,
          vfs
        )
      )
    )
  );

  for (const [lang, dict] of Object.entries(js_lang_map)) {
    writeDict(join(dist, "_", lang + ".js"), { js: dict });
  }

  return js_demo_lang_map;
};
