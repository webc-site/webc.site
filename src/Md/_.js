import { cE } from "../js/dom.js";
import render from "../js/md/safeHtm.js";

cE(
  "md",
  class extends HTMLElement {
    get textContent() {
      return super.textContent;
    }

    set textContent(val) {
      this.innerHTML = render(val);
    }

    connectedCallback() {
      this.classList.add("Md");
      const raw = this.textContent;
      if (raw) {
        this.innerHTML = render(raw);
      }
    }
  }
);
