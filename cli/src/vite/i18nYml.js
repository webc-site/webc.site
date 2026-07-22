import { join } from "node:path";
import compileI18n from "../lib/i18nYml.js";

export default (pathname, match) => {
  const lang_code = match[1],
    parent_dir = pathname.slice(0, -match[0].length),
    dir_path = join(parent_dir, "i18n", lang_code);

  return compileI18n(dir_path);
};
