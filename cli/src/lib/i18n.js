import i18nyml from "@1-/i18nyml";
import { join, basename } from "node:path";
import ROOT from "../const/ROOT.js";

export default (meta) => i18nyml(join(ROOT, "i18n"), basename(meta.filename, ".js"));
