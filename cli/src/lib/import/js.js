import { join } from "node:path";

export default async (root) => (await import(join(root, "src/conf/js.js"))).default;
