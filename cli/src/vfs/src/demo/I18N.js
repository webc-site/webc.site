import { existsSync } from "node:fs";
import { join, basename } from "node:path";
import wrap from "../../lib/i18n.js";
import { relDemoToI18n } from "../../../const/PATH.js";

export default (src, dir, root) => {
  const demo_i18n = join(dir, "demo/i18n"),
    name = basename(dir);
  return existsSync(demo_i18n)
    ? (src || "").replace(/\bexport\s+const\s+js\s*=\s*[^;\n]+;?/, "") +
        "export const i18n = (code) => import(`" +
        relDemoToI18n(name) +
        "${code}.js`);\nexport default async (code) => (await i18n(code)).js;\n"
    : wrap(src, demo_i18n, root);
};
