import { join, resolve, dirname } from "node:path";
import resolveVirtual from "./styl.js";
import isWebc from "../../lib/isWebc.js";
import { URL_VIRTUAL_DEMO_RE, URL_PHYSICAL_DEMO_RE, DEMO_JS } from "../../const/PATH.js";

const getAbsId = (root, id, importer) => {
    if (id.startsWith(".")) {
      return importer ? resolve(dirname(importer.split("?")[0]), id) : resolve(root, id);
    }
    if (id.startsWith("/")) {
      return id.startsWith(root) ? id : resolve(root, id.slice(1));
    }
    return id;
  },
  getRelPath = (root, id, importer) => {
    const abs_id = getAbsId(root, id, importer),
      src_dir = join(root, "src") + "/";
    if (abs_id && abs_id.startsWith(src_dir)) {
      return [abs_id, abs_id.slice(src_dir.length)];
    }
    return [];
  },
  isComFile = (root, vfs, id, importer) => {
    const [abs_id, rel_path] = getRelPath(root, id, importer);

    if (rel_path) {
      const pos = rel_path.indexOf("/");
      if (pos !== -1) {
        const com = rel_path.slice(0, pos);
        if (isWebc(com) && vfs(com)(rel_path.slice(pos + 1)) !== undefined) {
          return abs_id;
        }
      }
    }
    return null;
  };

export default (root, vfs, id, importer) => {
  if (id.startsWith(".")) {
    let importer_path = importer ? importer.split("?")[0] : "/";
    if (importer_path.startsWith("\u0000")) {
      importer_path = importer_path.slice(1);
    }
    if (importer_path.startsWith(root)) {
      importer_path = importer_path.slice(root.length);
    }
    id = resolve(dirname(importer_path), id);
  }

  const match_demo_js = id.match(new RegExp("^\\/_\\/([^/]+)\\/" + DEMO_JS + "$")),
    match_virtual_demo = id.match(URL_VIRTUAL_DEMO_RE),
    match_physical_demo = id.match(URL_PHYSICAL_DEMO_RE);

  if (match_demo_js && isWebc(match_demo_js[1])) {
    return join(root, "src", match_demo_js[1], "demo/_.js");
  }
  if (match_virtual_demo && isWebc(match_virtual_demo[1])) return id;
  if (match_physical_demo && isWebc(match_physical_demo[1])) {
    return join(root, "src", match_physical_demo[1], "demo/_.js");
  }
  if (id === "/_/demo.js") return join(root, "src/demo.js");
  if (id === "/_/_.js") return join(root, "src/_.js");
  if (id.match(/^\/_\/([a-z_-]+)\.js$/)) return id;

  return resolveVirtual(root, id) || isComFile(root, vfs, id, importer);
};
