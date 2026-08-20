import { setApi, setFetch, setOnCaptcha, setOnErr } from "@1-/protoapi";
import Captcha from "../webc/Captcha.js";
import { langCode } from "./i18n.js";
import { toastErr } from "./Toast.js";

setApi(API);

setFetch((url, conf) => {
  conf.headers["accept-language"] = langCode();
  return fetch(url, conf);
});

setOnCaptcha(Captcha);

setOnErr((err) => {
  toastErr((el) => {
    el.textContent = err;
  });
});
