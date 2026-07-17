import WebCDemo from "../_.js";
import { fetchLang } from "../../js/fetchLang.js";
import i18nUrl, { TITLE, DESC, BTN, ALERT } from "./I18N.js";

const fLang = fetchLang(i18nUrl);

export const CSS = "/_/WebC.demo/demo/_.css",
  HTM =
    '<main class="demo Lg"><h3 class="title" id="demoTitle"></h3><b class="desc" id="demoDesc"></b><button class="Btn Main" id="clickBtn"></button></main>';

export default (root) => {
  const el = root.querySelector("c-webc-demo");
  if (el) {
    const [init_promise, _, unMount, setMd, root_el] = WebCDemo("WebC.demo");

    init_promise.then((root_el) => {
      el.replaceWith(root_el);
    });

    const unLang = fLang((i18n, lang) => {
        root_el._cur_i18n = i18n;
        if (root_el._updateDemo) {
          root_el._updateDemo(i18n);
        }
        setMd(lang);
      }),
      oldCleanup = el.$;
    el.$ = () => {
      oldCleanup();
      unLang();
      unMount();
    };
  } else if (root.host) {
    const active_el = root.host.closest("c-webc-demo");
    if (active_el) {
      active_el._updateDemo = (i18n) => {
        const domTitle = root.querySelector("#demoTitle"),
          domDesc = root.querySelector("#demoDesc"),
          domBtn = root.querySelector("#clickBtn");

        domTitle.textContent = i18n[TITLE];
        domDesc.textContent = i18n[DESC];
        domBtn.textContent = i18n[BTN];
        domBtn.onclick = () => alert(i18n[ALERT]);
      };

      if (active_el._cur_i18n) {
        active_el._updateDemo(active_el._cur_i18n);
      }
    }
  }
};
