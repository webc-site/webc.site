import { cE } from "../js/dom.js";
import { On } from "../js/On.js";

const TAG = "pophover",
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
  POS_LI = [TOP, BOTTOM, LEFT, RIGHT],
  updatePos = (self) => {
    if (self._has_pos) {
      return;
    }

    const pop = self.querySelector('[slot="pop"]'),
      pop_height = pop ? pop.offsetHeight : 0;
    if (!pop_height) {
      return;
    }

    const pop_margin = parseInt(getComputedStyle(self).getPropertyValue("--pophover-margin")),
      { top, bottom: b, left, right: r } = self.getBoundingClientRect(),
      bottom = window.innerHeight - b,
      right = window.innerWidth - r,
      need_height = pop_height + pop_margin,
      max_dir =
        top >= need_height
          ? TOP
          : bottom >= need_height
            ? BOTTOM
            : [
                [top, TOP],
                [bottom, BOTTOM],
                [left, LEFT],
                [right, RIGHT]
              ].reduce((a, b) => (b[0] > a[0] ? b : a))[1];

    self.classList.remove(...POS_LI);
    self.classList.add(max_dir);
  };

cE(
  TAG,
  class extends HTMLElement {
    connectedCallback() {
      this._has_pos = POS_LI.some((p) => this.classList.contains(p));
      updatePos(this);
      this.$ = On(this, {
        mouseenter: () => updatePos(this)
      });
    }

    disconnectedCallback() {
      if (this.$) {
        this.$();
      }
    }
  }
);
