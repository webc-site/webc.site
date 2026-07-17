import isWebc from "../../lib/isWebc.js";

export default (src_dir, vfs, id) => {
  if (id.startsWith(src_dir)) {
    const part_li = id.slice(src_dir.length).split("/");
    if (part_li.length >= 2 && isWebc(part_li[0])) {
      return vfs(part_li[0])(part_li.slice(1).join("/"));
    }
  }
};
