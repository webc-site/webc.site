import isWebc from "../../lib/isWebc.js";
import { URL_VIRTUAL_DEMO_RE, URL_SRC_DEMO_RE, DEMO_JS } from "../../const/PATH.js";

export default (vfs, id) => {
  const match =
    id.match(new RegExp("^\\/_\\/([^/]+)\\/" + DEMO_JS + "$")) ||
    id.match(URL_VIRTUAL_DEMO_RE) ||
    id.match(URL_SRC_DEMO_RE);
  if (match) {
    const [, name] = match;
    if (isWebc(name)) {
      const map = vfs(name),
        code = map("demo.js");
      if (code !== undefined) {
        return code;
      }
    }
  }
};
