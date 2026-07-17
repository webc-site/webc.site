import BoxX from "../BoxX/_.js";
import { On } from "../js/On.js";
import { newEl, newLi } from "../js/dom.js";
import { lang, langSet, LANG_LI } from "../js/i18n.js";
import { set } from "../js/i18n/store.js";
import { fetchLang } from "../js/fetchLang.js";
import i18nUrl, { CHOOSE } from "./I18N.js";
import "../Scroll/_.js";

const fLang = fetchLang(i18nUrl);

export const LG = " Lg",
  open = () => {
    const BTN = "Btn",
      dialog = BoxX(),
      [main, title, con, con_inner] = newLi("main", "h6", "c-vs", "b"),
      cur_lang = lang() ?? 0;

    main.className = "I18n" + LG;
    On(dialog, {
      close: fLang((i18n) => {
        title.innerText = i18n[CHOOSE];
      })
    });

    con_inner.append(
      ...LANG_LI.map(([name, id]) => {
        const btn = newEl("button");
        btn.innerText = name;
        btn.className = cur_lang == id ? BTN + " Main" : BTN;
        On(btn, {
          click: () => {
            set(id);
            langSet(id);
            dialog.close();
          }
        });
        return btn;
      })
    );
    con.append(con_inner);
    main.append(title, con);
    dialog.append(main);
  };
