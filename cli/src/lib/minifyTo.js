import bundle, { minifyTo } from "@1-/rolldown";
import merge from "@3-/merge";
import { dirname, resolve } from "node:path";
import { realpathSync } from "node:fs";
import write from "@3-/write";
import jsBeautify from "./jsBeautify.js";
import define from "./define.js";

const absPath = (p) => {
    try {
      return realpathSync(resolve(p));
    } catch {
      return resolve(p);
    }
  },
  newConf = async (root) => ({
    transform: {
      define: {
        "import.meta.env.DEV": "false",
        ...(await define(root, false))
      }
    }
  });

export default async (input, file, opt = {}, minify = true) => {
  const root = opt.root || process.cwd();
  if (minify) {
    const is_arr = Array.isArray(input),
      abs_input = is_arr
        ? input.map((p) => absPath(p))
        : Object.fromEntries(Object.entries(input).map(([k, v]) => [k, absPath(v)])),
      abs_file = is_arr
        ? file.map((p) => absPath(p))
        : Object.fromEntries(Object.entries(file).map(([k, v]) => [k, absPath(v)]));
    return minifyTo(abs_input, abs_file, merge(await newConf(root), opt));
  }

  const is_arr = Array.isArray(input);
  let input_li, file_li;
  if (is_arr) {
    input_li = input.map((p) => absPath(p));
    file_li = file.map((p) => absPath(p));
  } else {
    input_li = Object.values(input).map((p) => absPath(p));
    file_li = Object.values(file).map((p) => absPath(p));
  }

  const dist_dir = dirname(file_li[0]),
    path_to_file = {};

  input_li.forEach((inp, idx) => {
    path_to_file[inp] = file_li[idx];
  });

  const bundle_input = is_arr
      ? input_li
      : Object.fromEntries(Object.entries(input).map(([k, v]) => [k, absPath(v)])),
    chunk_li = await bundle(
      bundle_input,
      merge(await newConf(root), opt),
      false,
      dist_dir,
      path_to_file
    );

  for (const [out_file, code, map] of chunk_li) {
    if (out_file) {
      const beautiful_code = await jsBeautify(code, out_file);
      write(out_file, beautiful_code);
      if (map) {
        write(out_file + ".map", JSON.stringify(map));
      }
    }
  }
};
