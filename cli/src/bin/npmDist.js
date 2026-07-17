import read from "@3-/read";
import npmver from "@1-/npmver";
import { join } from "node:path";
import { existsSync } from "node:fs";
import npm from "./npm.js";
import publish from "../dist/publish.js";

export default async (root) => {
  const pkg_path = join(root, "package.json");
  if (!existsSync(pkg_path)) {
    return;
  }

  const pkg = JSON.parse(read(pkg_path)),
    { name: pkg_name, version: ver } = pkg;

  let online;
  try {
    online = await npmver(pkg_name);
  } catch {}

  if (online === ver) {
    console.log("Version " + ver + " is already published online. Skip build & publish.");
    return;
  }

  await npm(root);
  await publish(root);
};
