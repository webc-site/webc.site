import define from "../../../src/conf/define.js";

export default async (is_dev = false) => {
  const conf = await define(is_dev),
    r = {
      "import.meta.env.DEV": JSON.stringify(is_dev)
    };
  for (const [k, v] of Object.entries(conf)) {
    r[k] = JSON.stringify(v);
  }
  return r;
};
