import { join } from "node:path";

export default async (...paths) => (await import(join(...paths))).default;
