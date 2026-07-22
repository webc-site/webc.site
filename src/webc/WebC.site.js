import "../js/a.js";
import "./I18n.js";
import "./Nav.js";
import "./NavL.js";
import "./O.js";
import "./Scroll.js";
import "./Toast.js";
import "./WebC.js.js";
import "./WebC.ls.js";
import cNew from "./WebC.site/cNew.js";
import fLang from "./WebC.site/fLang.js";
import initRoute from "./WebC.site/url.js";
import { NAV } from "./WebC.site/I18N.js";
import "./WebC.site/_.styl";
import { cE, newEl } from "../js/dom.js";
import "../js/rmWait.js";

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
  "webc-site",
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
