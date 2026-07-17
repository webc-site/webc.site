import { readdirSync } from "node:fs";

export default (dir) =>
  readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("."))
    .map((d) => d.name);
