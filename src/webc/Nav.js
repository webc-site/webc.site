import "./Nav/_.styl";
import { On } from "../js/On.js";
import { cE } from "../js/dom.js";
import parentScroll from "../js/parentScroll.js";
import "./Scroll.js";

const C_D = "D",
  C_H = "H",
  C_I = "I";

cE(
  "nav",
  class extends HTMLElement {
    connectedCallback() {
      const scroll = parentScroll(this);

      let last_y = scroll.scrollTop,
        start_y = last_y,
        ticking = 0;

      const { classList } = this,
        { firstElementChild } = scroll,
        rmTimer = () => {
          if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
          }
        },
        hide = (anim) => {
          rmTimer();
          if (anim) {
            classList.remove(C_D);
            classList.add(C_I);
            this._timer = setTimeout(() => {
              this._timer = null;
              if (!classList.contains(C_D)) {
                classList.remove(C_I);
                classList.add(C_H);
              }
            }, 300);
          } else {
            classList.remove(C_D, C_I);
            classList.add(C_H);
          }
        },
        show = () => {
          rmTimer();
          classList.remove(C_I, C_H);
          classList.add(C_D);
        },
        reset = () => {
          rmTimer();
          classList.remove(C_D, C_I, C_H);
        },
        update = () => {
          const { scrollTop, scrollHeight, clientHeight } = scroll,
            max_y = scrollHeight - clientHeight,
            { offsetHeight } = this;

          if (max_y <= 0) {
            reset();
            return;
          }

          const y = Math.max(0, Math.min(scrollTop, max_y));
          if (y <= offsetHeight) {
            reset();
            start_y = y;
          } else if (y > last_y) {
            if (classList.contains(C_D)) {
              hide(true);
            } else if (!classList.contains(C_H)) {
              hide(false);
            }
            start_y = y;
          } else if (y < last_y) {
            if (classList.contains(C_D)) {
              start_y = y;
            } else if (start_y - y > 80) {
              show();
            }
          }
          last_y = y;
        },
        onScroll = () => {
          if (!ticking) {
            ticking = requestAnimationFrame(() => {
              update();
              ticking = 0;
            });
          }
        },
        ob = new ResizeObserver(() => {
          const { offsetHeight, style } = this,
            { scrollTop } = scroll;
          style.setProperty("--top", -offsetHeight + "px");
          last_y = scrollTop;
          start_y = last_y;
          if (last_y === 0) {
            reset();
          }
        }),
        unScroll = On(scroll, { scroll: onScroll });
      ob.observe(scroll);
      if (firstElementChild) {
        ob.observe(firstElementChild);
      }

      this.$ = () => {
        if (ticking) cancelAnimationFrame(ticking);
        unScroll();
        ob.disconnect();
        rmTimer();
      };
    }

    disconnectedCallback() {
      this.$();
    }
  }
);
