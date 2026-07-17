import { cE } from "../js/dom.js";
import render from "../js/md/safeHtm.js";

cE(
  "md",
  class extends HTMLElement {
    get value() {
      return this._value ?? this.textContent;
    }

    set value(val) {
      this._value = val;
      this.innerHTML = render(val);
    }

    connectedCallback() {
      this.classList.add("Md");
      const raw = this.textContent;
      if (raw) {
        this._value = raw;
        this.innerHTML = render(raw);
      }
    }
  }
);
