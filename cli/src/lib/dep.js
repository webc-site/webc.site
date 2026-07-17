import read from "@3-/read";
import importLi from "@1-/jsparser/importLi.js";
import importScan from "./importScan.js";

export const importsOf = (file_path) => importLi(read(file_path))[0],
  importsAllOf = (file_path) => importScan(read(file_path), file_path);
