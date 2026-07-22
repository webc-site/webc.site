import { join } from "node:path";

export default async (root) => (await import(join(root, "src/conf/webcLsIgnore.js"))).default;
