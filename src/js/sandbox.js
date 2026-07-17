import { cE, D } from "./dom.js";

const ING = "Ing";

cE(
  "sandbox",
  class extends HTMLElement {
    async connectedCallback() {
      const self = this,
        { classList } = self;
      classList.add(ING);
      const root = self.attachShadow({ mode: "open" }),
        mod = self.mod,
        { CSS, HTM, default: fn } = mod;
      CSS.forEach((fn) => {
        fn(root);
      });
      const fragment = D.createRange().createContextualFragment(HTM),
        main_el = fragment.firstElementChild;
      if (main_el) {
        main_el.setAttribute("part", "main");
      }
      root.appendChild(fragment);
      fn(root);
      classList.remove(ING);
    }
  }
);
