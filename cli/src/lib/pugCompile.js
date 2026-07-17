import { join } from "node:path";
import read from "@3-/read";
import pug from "pug";

export default (root, name = "default.pug") => {
  const pug_path = join(root, "src/pug", name);
  return pug.compile(read(pug_path), { filename: pug_path });
};
