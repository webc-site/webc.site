import { join } from "node:path";
import { existsSync } from "node:fs";

export default (_src, dir) =>
  existsSync(join(dir, "demo/i18n"))
    ? 'import { cTranSet } from "../../js/c-t.js";import { i18n } from "./I18N.js";export default (D) => cTranSet(D, async (code) => (await i18n(code)).pug);'
    : undefined;
