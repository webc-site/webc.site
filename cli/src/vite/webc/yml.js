import loads from "@1-/yml/loads.js";
import read from "@3-/read";

export default (id) => {
  const [clean_id] = id.split("?");
  if (clean_id.endsWith(".yml")) {
    const content = read(clean_id);
    if (content && content.trim()) {
      try {
        return "export default " + JSON.stringify(loads(content) || {}) + ";";
      } catch {}
    }
    return "export default {};";
  }
};
