import { existsSync } from "node:fs";
import read from "@3-/read";
import write from "@3-/write";

export default (file, content) => {
  if (!existsSync(file) || read(file) !== content) {
    write(file, content);
    return true;
  }
  return false;
};
