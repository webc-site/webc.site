import { join } from "node:path";
import distSite from "../lib/distSite.js";
import publicCp from "../lib/publicCp.js";

export default async (root, site = "site") => {
  await distSite(root, site);
  publicCp(root, join(root, "dist", site));
};
