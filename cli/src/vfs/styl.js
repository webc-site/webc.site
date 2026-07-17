import { writeFileSync, unlinkSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import read from "@3-/read";
import compile from "@1-/stylus/compile.js";
import { rootHost } from "../lib/styl.js";

export default (styl_path, external_import) => {
  const content = read(styl_path),
    pattern = /(@import\s+)(['"])(\.\.\/[^'"]+)\.styl\2/g,
    has_temp = pattern.test(content),
    fp = has_temp ? join(dirname(styl_path), "__temp_" + basename(styl_path)) : styl_path;

  if (has_temp) {
    writeFileSync(fp, content.replace(pattern, "$1url($3.css)"), "utf8");
  }

  try {
    const [css, map] = compile(fp, true, external_import);
    if (has_temp && map && map.sources) {
      map.sources = map.sources.map((src) =>
        basename(src) === basename(fp) ? basename(styl_path) : src
      );
    }
    return [rootHost(css), map];
  } finally {
    if (has_temp) {
      try {
        unlinkSync(fp);
      } catch {}
    }
  }
};
