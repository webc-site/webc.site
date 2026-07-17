import { cE, newLi } from "../js/dom.js";
import { route } from "../js/route.js";
import "../Back/_.js";
import "../NavMenu/_.js";

const C_BACK = "c-back",
  C_NAV_MENU = "c-nav-menu",
  PATH_LI = [];

cE(
  "nav-l",
  class extends HTMLElement {
    connectedCallback() {
      let back = this.querySelector(C_BACK),
        menu;

      if (back) {
        menu = this.querySelector(C_NAV_MENU);
      } else {
        [back, menu] = newLi(C_BACK, C_NAV_MENU);
        menu.append(...this.childNodes);
        this.append(back, menu);
      }

      this.$ = route((cur_url) => {
        const idx = PATH_LI.indexOf(cur_url);
        if (idx > -1) {
          PATH_LI.splice(idx + 1);
        } else {
          PATH_LI.push(cur_url);
        }
        back.setAttribute("href", "/" + (PATH_LI.at(-2) || ""));
        this.classList.toggle(
          "B",
          cur_url &&
            !(
              menu &&
              Array.from(menu.querySelectorAll("a")).some((a) => a.pathname === "/" + cur_url)
            )
        );
      });
    }

    disconnectedCallback() {
      this.$();
    }
  }
);
