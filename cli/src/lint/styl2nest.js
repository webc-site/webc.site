import parse from "@1-/stylus/parse.js";
import fmt from "@1-/stylus/fmt.js";
import ERR from "@3-/log/ERR.js";

export default (content) => {
  try {
    return fmt(parse(content));
  } catch (e) {
    ERR(e);
    return content;
  }
};
