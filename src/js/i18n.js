import CODE from "./i18n/CODE.js";
import { bc } from "./bc.js";

let ID;

const HOOK = new Set(),
  [post, on] = bc("lang"),
  change = (id) => {
    ID = id;
    HOOK.forEach((f) => f(CODE[id], id));
  };

export const LANG_LI = [],
  lang = () => ID,
  langCode = () => CODE[ID],
  onLang = (func) => {
    if (ID !== undefined) func(CODE[ID], ID);
    HOOK.add(func);
    return () => {
      HOOK.delete(func);
    };
  },
  langSet = (id) => {
    if (id !== ID) {
      post(id);
      change(id);
    }
  };

on((id) => {
  if (id !== ID) change(id);
});
