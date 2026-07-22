import { D, newEl } from "../../../js/dom.js";

const ING = "Ing";

export default (demo_body) => {
  let sandbox = null,
    mod = null;

  const setMod = (val) => {
    mod = val;
    if (!sandbox) {
      sandbox = newEl("div");
      sandbox.className = "sandbox";
      demo_body.append(sandbox);
    }

    const { CSS, HTM, default: fn } = val,
      { classList } = sandbox;

    sandbox.replaceChildren();
    classList.add(ING);
    CSS.forEach((css_fn) => css_fn(sandbox));
    const fragment = D.createRange().createContextualFragment(HTM);
    sandbox.appendChild(fragment);
    fn(sandbox);
    classList.remove(ING);
  };

  return [setMod, () => mod];
};
