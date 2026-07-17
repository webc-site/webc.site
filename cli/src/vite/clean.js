import { join } from "node:path";
import { statSync } from "node:fs";
import webcLs from "../lib/webcLs.js";

const JS_YML = "js.yml",
  PUG_YML = "pug.yml",
  MAP = new Map(),
  fileState = (fp) => {
    try {
      const { mtimeMs, size } = statSync(fp);
      return [fp, mtimeMs, size];
    } catch {
      return null;
    }
  },
  comDeps = (src, com, lang, dir_prefix, file_li) => {
    const dir = join(src, com, dir_prefix, lang);
    return file_li.map((file) => fileState(join(dir, file))).filter(Boolean);
  },
  deps = (root, path_name) => {
    const src = join(root, "src"),
      match_lang = path_name.match(/^\/_\/([a-z-]+)\.js$/);

    if (match_lang) {
      const [, lang] = match_lang;
      return webcLs(src).flatMap((name) => comDeps(src, name, lang, "i18n", [JS_YML]));
    }

    const match_com = path_name.match(/\/src\/([^/]+)\/(demo\/)?i18n\/([^/]+)\.js$/);
    if (match_com) {
      let dir_prefix = "i18n";
      const [, com, is_demo, lang] = match_com,
        file_li = [JS_YML];
      if (is_demo) {
        dir_prefix = "demo/" + dir_prefix;
        file_li.push(PUG_YML);
      }
      return comDeps(src, com, lang, dir_prefix, file_li);
    }

    return null;
  },
  changed = (current_dep_li, last_dep_li) => {
    if (!last_dep_li || current_dep_li.length !== last_dep_li.length) return true;
    for (let i = 0; i < current_dep_li.length; ++i) {
      const [cur_fp, cur_mtime, cur_size] = current_dep_li[i],
        [lst_fp, lst_mtime, lst_size] = last_dep_li[i];
      if (cur_fp !== lst_fp || cur_mtime !== lst_mtime || cur_size !== lst_size) {
        return true;
      }
    }
    return false;
  };

export default (root, server) => (req, res, next) => {
  const { url } = req;
  if (url) {
    const [path_name] = url.split("?"),
      norm = path_name.replace(/\\/g, "/"),
      is_virtual = norm.endsWith(".js") && (norm.startsWith("/_/") || norm.includes("/i18n/"));

    if (is_virtual) {
      const current_dep_li = deps(root, norm),
        last_dep_li = MAP.get(norm);
      if (current_dep_li && changed(current_dep_li, last_dep_li)) {
        const abs_path = join(root, path_name),
          mod_li = [
            server.moduleGraph.getModuleByUrl(url),
            server.moduleGraph.getModuleById(path_name),
            server.moduleGraph.getModuleById(abs_path),
            ...(server.moduleGraph.getModulesByFile(abs_path) || [])
          ].filter(Boolean),
          mod_set = new Set(mod_li);

        for (const mod of mod_set) {
          server.moduleGraph.invalidateModule(mod);
        }
        MAP.set(norm, current_dep_li);
      }
    }
  }
  next();
};
