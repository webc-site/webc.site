import { join } from "node:path";
import { existsSync } from "node:fs";
import site from "./site.js";
import npmCopy from "../site/npmCopy.js";

export default async (root) => {
  const pkg_path = join(root, "package.json");
  if (!existsSync(pkg_path)) {
    return;
  }

  await site(root);
  await npmCopy(root);
};
