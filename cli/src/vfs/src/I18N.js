import { join } from "node:path";
import wrap from "../lib/i18n.js";

export default (src, dir, root) => wrap(src, join(dir, "i18n"), root);
