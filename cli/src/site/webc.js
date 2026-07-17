import { join } from "node:path";
import { existsSync, writeFileSync } from "node:fs";
import exportLi from "@1-/jsparser/exportLi.js";

export default (src, dist_under, component_li) => {
  for (const name of component_li) {
    const entry_js_path = join(dist_under, name + ".js"),
      has_styl = existsSync(join(src, name, "_.styl")),
      exports = exportLi(join(src, name, "_.js"));
    let entry_content = has_styl ? 'import css from"./' + name + '/css.js";css();' : "";
    if (exports) {
      const has_default = exports.includes("default"),
        has_named = exports.length > (has_default ? 1 : 0);
      if (has_default && has_named) {
        entry_content +=
          'export{default}from"./' + name + '/_.js";export*from"./' + name + '/_.js";';
      } else if (has_default) {
        entry_content += 'export{default}from"./' + name + '/_.js";';
      } else if (has_named) {
        entry_content += 'export*from"./' + name + '/_.js";';
      } else {
        entry_content += 'import"./' + name + '/_.js";';
      }
    }
    if (entry_content.endsWith(";")) {
      entry_content = entry_content.slice(0, -1);
    }
    writeFileSync(entry_js_path, entry_content);
  }
};
