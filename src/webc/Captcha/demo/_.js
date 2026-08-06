import "../../Btn.js";
import Captcha from "../../Captcha.js";
import { On } from "../../../js/On.js";
import { fetchLang } from "../../../js/fetchLang.js";
import i18nUrl, { ING, SUC, CANCEL } from "./I18N.js";

export default (root) => {
  const fLang = fetchLang(i18nUrl),
    btn = root.querySelector("#btn-captcha"),
    out = root.querySelector("#out");

  let dict = null;
  fLang((i18n) => {
    dict = i18n;
  });

  const pop = async () => {
    out.textContent = dict ? dict[ING] : "";
    const id = await Captcha();
    out.textContent = id ? (dict ? dict[SUC] : "") + ": " + id : dict ? dict[CANCEL] : "";
  };

  if (btn) {
    On(btn, { click: pop });
  }

  pop();
};
