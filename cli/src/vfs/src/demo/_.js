import { join } from "node:path";
import { existsSync } from "node:fs";
import importLi from "@1-/jsparser/importLi.js";

export default (src, dir) => {
  const has_demo_i18n = existsSync(join(dir, "demo/i18n"));
  if (!src) {
    if (has_demo_i18n) {
      return 'import cT from "./c-t.js";\nexport default (root) => { cT(root); };\n';
    }
    if (existsSync(join(dir, "_.js"))) {
      return 'import "../_.js";\nexport default () => {};\n';
    }
    return;
  }
  let prefix = "";
  if (existsSync(join(dir, "_.js")) && !importLi(src)[0].includes("../_.js")) {
    prefix += 'import "../_.js";\n';
  }
  if (has_demo_i18n && !src.includes('import cT from "./c-t.js"')) {
    prefix += 'import cT from "./c-t.js";\n';
  }
  let code = src;
  if (has_demo_i18n && !src.includes("cT(")) {
    if (src.includes("export default")) {
      code = code.replace(
        /export\s+default\s*(async\s*)?(\(([^)]*)\)|([A-Za-z0-9_]+))\s*=>\s*{/,
        (m, async_kw = "", p1, p2, p3) => {
          const param = (p2 !== undefined ? p2 : p3 || "").trim() || "root";
          return "export default " + async_kw + "(" + param + ") => { cT(" + param + ");";
        }
      );
    } else {
      code += "\ncT(document);\n";
    }
  }
  return prefix ? prefix + code : code;
};
