import { join } from "node:path";
import vfsInit from "../vfs.js";
import resolveId from "./url/vurl.js";
import srv from "./url/static.js";
import clean from "./clean.js";
import demo from "./webc/demo.js";
import lang from "./webc/lang.js";
import yml from "./webc/yml.js";
import com from "./webc/com.js";

export default async (root) => {
  const vfs = await vfsInit(root),
    src_dir = join(root, "src") + "/";

  return {
    name: "webc-dev-server",
    resolveId(id, importer) {
      return resolveId(root, vfs, id, importer);
    },
    load(id) {
      for (const fn of [
        demo.bind(null, vfs),
        lang.bind(null, root),
        yml,
        com.bind(null, src_dir, vfs)
      ]) {
        const code = fn(id);
        if (code !== undefined) return code;
      }
      return null;
    },
    transform(code, id) {
      if (id.endsWith("/I18N.js")) {
        return {
          code: code.replace(
            /\bimport\(([`'"])([^`'"]*\/\$\{code\}\.js)([`'"])\)/g,
            "import(/* @vite-ignore */ $1$2$3)"
          ),
          map: null
        };
      }
      if (id.endsWith("/WebC.demo/_.js")) {
        return {
          code: code.replace(
            /\bimport\(([`'"`])\.\.\/_\/demo\/\$\{url\}\.js([`'"`])\)/g,
            "import(/* @vite-ignore */ $1/_/demo/${url}.js$2)"
          ),
          map: null
        };
      }
    },
    configureServer: (server) => {
      server.middlewares.use(clean(root, server));
      server.middlewares.use(srv(root, vfs, server));
    }
  };
};
