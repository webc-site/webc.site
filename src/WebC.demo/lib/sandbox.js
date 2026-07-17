import { newEl } from "../../js/dom.js";
import "../../js/sandbox.js";

export default (demo_body) => {
  let sandbox = null,
    mod = null;

  const setMod = (val) => {
    mod = val;
    if (!sandbox) {
      sandbox = newEl("c-sandbox");
      demo_body.append(sandbox);
    }
    sandbox.mod = val;
  };

  return [setMod, () => mod];
};
