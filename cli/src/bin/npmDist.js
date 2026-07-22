import { join } from "node:path";
import { existsSync } from "node:fs";
import isPublished from "../lib/isPublished.js";
import npm from "./npm.js";
import publish from "../dist/publish.js";

export default async (root) => {
  const pkg_path = join(root, "package.json");
  if (!existsSync(pkg_path)) {
    return;
  }

  const [, ver, published] = await isPublished(pkg_path);

  if (published) {
    console.log("Version " + ver + " is already published online. Skip build & publish.");
    return;
  }

  await npm(root);
  await publish(root);
};
