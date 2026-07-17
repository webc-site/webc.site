import { join } from "node:path";

export default async (root, is_dev) => {
  const mod = await import(join(root, "src/conf/define.js")),
    define_func = mod.default || mod,
    define_dict = await define_func(is_dev),
    r = {};
  for (const [k, v] of Object.entries(define_dict)) {
    r[k] = JSON.stringify(v);
  }
  return r;
};
