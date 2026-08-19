import { setApi, setOnCaptcha, setOnErr } from "@1-/protoapi";
import { toastErr } from "./Toast.js";

setApi(API);

setOnCaptcha(() => {
  console.log("todo setOnCaptcha");
});

setOnErr((err) => {
  toastErr((el) => {
    el.textContent = err;
  });
});
