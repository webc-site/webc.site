import { join } from "node:path";

export default (root, id) => {
  if (id.startsWith("/_/")) {
    const p = id.slice(3);
    if (p.startsWith("ls/")) {
      return join(root, "src", id);
    }
    if (p.startsWith("_/demo/")) {
      const parts = p.split("/");
      if (parts.length >= 3) {
        const com = parts[2],
          rest = parts.slice(3).join("/");
        return join(root, "src", com, "demo", rest);
      }
    }
    return join(root, "src", p);
  }
};
