import "./Select/_.styl";
import { cE, newLi } from "../js/dom.js";
import { On } from "../js/On.js";

const TAG = "select",
  update = (sel, b) => {
    const opt = sel.options[sel.selectedIndex];
    b.textContent = opt ? opt.text : "";
  },
  init = (self) => {
    if (self.$ || (!self.isConnected && !self.querySelector("option"))) return;

    const option_li = Array.from(self.querySelectorAll("option")),
      [sel, b] = newLi("select", "b");

    sel.append(...option_li);

    update(sel, b);
    self.append(sel);
    self.append(b);

    self.$ = On(sel, { change: () => update(sel, b) });
  },
  select = (self) => {
    if (!self.$) init(self);
    return self.querySelector("select");
  };

cE(
  TAG,
  class extends HTMLElement {
    get value() {
      const sel = select(this);
      return sel ? sel.value : "";
    }

    set value(v) {
      const sel = select(this);
      if (!sel) return;
      sel.value = v;
      const b = this.querySelector("b");
      if (b) update(sel, b);
    }

    get options() {
      const sel = select(this);
      return sel ? sel.options : [];
    }

    connectedCallback() {
      queueMicrotask(() => init(this));
    }

    disconnectedCallback() {
      if (this.$) {
        this.$();
        this.$ = null;
      }
    }
  }
);
