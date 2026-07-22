import i18nyml from "@1-/i18nyml";
import { join, basename } from "node:path";

const CLI_DIR = join(import.meta.dirname, "../..");

export default (meta) => i18nyml(join(CLI_DIR, "i18n"), basename(meta.filename, ".js"));
