import { On } from "../../js/On.js";
import boxX from "../_.js";
import { fetchLang } from "../../js/fetchLang.js";
import { newLi } from "../../js/dom.js";
import i18nUrl, { TITLE, DESC } from "./I18N.js";

export default (root) => {
  const fLang = fetchLang(i18nUrl),
    box_x_btn = root.getElementById("btn-boxX"),
    pop = () => {
      const dialog = boxX(),
        [form, title, p] = newLi("form", "h3", "p"),
        close = fLang((i18n) => {
          title.textContent = i18n[TITLE];
          p.textContent = i18n[DESC];
        });

      form.className = "Lg";
      On(dialog, { close });

      form.append(title, p);
      dialog.append(form);
    };

  if (box_x_btn) {
    On(box_x_btn, { click: pop });
  }

  pop();
};
