import { readdirSync } from "node:fs";
import isWebc from "./isWebc.js";

export default (src) =>
  readdirSync(src, { withFileTypes: true })
    .filter((d) => d.isDirectory() && isWebc(d.name))
    .map((d) => d.name)
    .sort();
