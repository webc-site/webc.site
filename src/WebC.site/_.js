import { cE, newEl } from "../js/dom.js";
import initRoute from "./url.js";
import fLang from "./fLang.js";
import { NAV } from "./I18N.js";
import cNew from "./cNew.js";
import "../I18n/_.js";
import "../Scroll/_.js";
import "../js/a.js";
import "../js/sandbox.js";
import "../WebC.ls/_.js";
import "../Nav/_.js";
import "../NavL/_.js";
import "../WebC.js/_.js";

const C_ING = "Ing",
  C_A = "A",
  renderNav = (nav, cur_el, i18n_nav) => {
    if (cur_el) {
      cur_el.remove();
    }
    const el = cNew("nav-l");
    el.append(
      ...Object.entries(i18n_nav).map(([key, text]) =>
        Object.assign(newEl("a"), { href: "/" + key, textContent: text })
      )
    );
    nav.prepend(el);
    return el;
  };

cE(
  "webc-index",
  class extends HTMLElement {
    connectedCallback() {
      const { classList } = this,
        [scroll, i18n_el, nav] = ["vs", "i18n", "nav"].map(cNew);

      let nav_l,
        sb_el,
        cur_url = "";

      classList.add(C_ING);

      nav.append(i18n_el);
      scroll.append(nav);
      this.append(scroll);

      const show = (url, el) => {
          if (cur_url !== url) return;
          sb_el = el;
          scroll.append(sb_el);
          classList.remove(C_ING);
        },
        unRoute = initRoute(
          // onLoading
          (url) => {
            cur_url = url;

            if (sb_el) {
              sb_el.remove();
              sb_el = null;
            }

            classList.add(C_ING);
            classList.toggle(C_A, !url);
          },
          // onLoaded
          show,
          // onErr
          (url, err_li) =>
            show(
              url,
              Object.assign(newEl("pre"), {
                className: "err",
                textContent: err_li.filter(Boolean).join("\n")
              })
            )
        ),
        unLang = fLang(async (i18n) => {
          nav_l = renderNav(nav, nav_l, i18n[NAV]);
          classList.remove(C_ING);
          classList.toggle(C_A, !cur_url);
        });

      this.$ = () => {
        unRoute();
        unLang();
      };
    }

    disconnectedCallback() {
      this.$();
    }
  }
);
