import { setApi, setFetch, setOnCaptcha, setOnErr } from "@1-/protoapi";
import { langCode } from "./i18n.js";
import { toastErr } from "./Toast.js";

setApi(API);

setFetch((url, conf) => {
  conf.headers["accept-language"] = langCode();
  return fetch(url, conf);
});

setOnCaptcha(() => {
  console.log("todo setOnCaptcha");
});

setOnErr((err) => {
  toastErr((el) => {
    el.textContent = err;
  });
});
