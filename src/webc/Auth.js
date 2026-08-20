import "../js/apiInit.js";
import "./Btn.js";
import "./Input.js";
import "./Ing.js";
import Captcha from "./Captcha.js";
import { setCaptcha } from "@1-/protoapi";
import I18N_URL, {
  MAIL,
  PHONE,
  SIGNIN,
  SIGNUP,
  GET_CODE,
  AGREE_PREFIX,
  TERMS,
  CODE,
  NAME,
  PWD,
  VERIFY,
  NO_CODE,
  RESEND,
  RESEND_CD,
  FORGET_PWD,
  RESET_PWD,
  OAUTH_HINT_TITLE,
  OAUTH_HINT_TIP,
  OAUTH_GOOGLE,
  OAUTH_APPLE,
  OAUTH_MICROSOFT,
  OAUTH_WECHAT,
  OAUTH_GITHUB,
  ERR_FORMAT
} from "./Auth/I18N.js";
import "./Auth/_.styl";
import { cE, newEl, newLi } from "../js/dom.js";
import { On } from "../js/On.js";
import { fetchLang } from "../js/fetchLang.js";
import conf from "@webc.site/api/auth/conf.js";
import info from "@webc.site/api/auth/info.js";
import { PHONE as ACCOUNT_PHONE } from "@webc.site/api/auth/enum/AccountType.js";
import {
  PHONE as AUTH_PHONE,
  GOOGLE,
  APPLE,
  MICROSOFT,
  WECHAT,
  GITHUB
} from "@webc.site/api/auth/enum/AuthType.js";

export const STATE_MAIL = 0,
  STATE_SIGNUP = 1,
  STATE_SIGNIN = 2,
  STATE_CODE = 1,
  STATE_PASSWD = 2,
  STATE_PHONE = 10,
  STATE_SMS_CODE = 11;

let AUTH_TYPE_LI;

const TAG = "auth",
  PASSPORT = "passport",
  CHANGE = "change",
  B = "b",
  A = "a",
  SPAN = "span",
  BUTTON = "button",
  SUBMIT = "submit",
  TEXT = "text",
  PASSWORD = "password",
  ROW = "row",
  RESET = "reset",
  BACK = "back",
  MORE = "more",
  C_MAIN = "Btn Main",
  C_INPUT = "Input",
  C_ING = "Ing",
  C_BTNC = "BtnC",
  OAUTH_TXT = {
    [GOOGLE]: OAUTH_GOOGLE,
    [APPLE]: OAUTH_APPLE,
    [MICROSOFT]: OAUTH_MICROSOFT,
    [WECHAT]: OAUTH_WECHAT,
    [GITHUB]: OAUTH_GITHUB
  },
  fLang = fetchLang(I18N_URL),
  confLoad = async () => {
    if (AUTH_TYPE_LI) return AUTH_TYPE_LI;
    const [li] = await conf();
    return (AUTH_TYPE_LI = li || []);
  },
  authTypeLi = () =>
    AUTH_TYPE_LI
      ? [AUTH_TYPE_LI.includes(AUTH_PHONE), AUTH_TYPE_LI.filter((t) => t !== AUTH_PHONE)]
      : [true, []],
  emit = (host, name, detail) => host.dispatchEvent(new CustomEvent(name, { detail })),
  focus = (el) => setTimeout(() => el.focus()),
  onIng = (el, run) => async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (el.classList.contains(C_ING)) return;
    el.classList.add(C_ING);
    try {
      await run(e);
    } finally {
      el.classList.remove(C_ING);
    }
  },
  onSubmit = (form, run) => On(form, { submit: onIng(form, run) }),
  sendSms = async (host, phone) => {
    const cd = host.onSmsSend ? await host.onSmsSend(phone) : 60;
    host.startCd(cd || 60);
    return cd;
  },
  newBtn = (className, type = BUTTON) => {
    const el = newEl(BUTTON);
    el.type = type;
    if (className) el.className = className;
    return el;
  },
  newBtnIcon = (p, className = C_BTNC, type = BUTTON) => {
    const [btn, icon] = newLi(BUTTON, B);
    btn.type = type;
    btn.className = className;
    btn.dataset.p = p;
    icon.dataset.p = p;
    btn.append(icon);
    return btn;
  },
  newSubmit = (txt, extra_cls = "") => {
    const btn = newBtn(extra_cls ? C_MAIN + " " + extra_cls : C_MAIN, SUBMIT);
    if (typeof txt === "string") btn.textContent = txt;
    return btn;
  },
  newRow = (...children) => {
    const row = newEl(B);
    row.className = ROW;
    row.append(...children.filter(Boolean));
    return row;
  },
  newReset = (...children) => {
    const el = newEl(B);
    el.className = RESET;
    el.append(...children.filter(Boolean));
    return el;
  },
  makeInput = (type, val, label_txt, attr_map = {}) => {
    const [wrap, input, label] = newLi(B, "input", "label");
    wrap.className = C_INPUT;
    input.type = type;
    input.placeholder = " ";
    input.required = true;
    if (val) input.value = val;
    for (const k in attr_map) input.setAttribute(k, attr_map[k]);
    label.textContent = label_txt;
    wrap.append(input, label);
    return [wrap, input];
  },
  makeCodeInput = (i18n) =>
    makeInput(TEXT, "", i18n[CODE], {
      inputmode: "numeric",
      autocomplete: "one-time-code",
      minlength: 6,
      maxlength: 6
    }),
  makeEdit = (val, label_txt, onEdit) => {
    const [wrap] = makeInput(TEXT, val, label_txt, {
      readonly: "",
      tabindex: "-1"
    });
    wrap.classList.add("edit");
    On(wrap, { click: onEdit });
    return wrap;
  },
  makeBack = (onBack) => {
    const btn = newBtnIcon(BACK);
    On(btn, { click: onBack });
    return btn;
  },
  makePassport = (prov_li) => {
    if (!prov_li || !prov_li.length) return null;
    const wrap = newEl(B);
    wrap.className = PASSPORT;

    if (prov_li.length <= 3) {
      prov_li.forEach((p) => wrap.append(newBtnIcon(p, C_BTNC, SUBMIT)));
      return wrap;
    }

    prov_li.slice(0, 3).forEach((p) => wrap.append(newBtnIcon(p, C_BTNC, SUBMIT)));
    wrap.append(newBtnIcon(MORE, C_BTNC, SUBMIT));
    return wrap;
  },
  makeFooter = (i18n, terms_url) => {
    const [footer, a_terms] = newLi("footer", A);
    a_terms.href = terms_url || "/p/en/terms.html";
    a_terms.target = "_blank";
    a_terms.textContent = i18n[TERMS];
    footer.append(i18n[AGREE_PREFIX] + " ", a_terms);
    return footer;
  },
  render = (host) => {
    host.textContent = "";
    let { _step: step } = host;
    const { _mail: mail, _phone: phone, _cd: cd, _i18n: i18n } = host;
    if (!i18n) return;

    const [has_phone, prov_li] = authTypeLi();
    if (!has_phone && (step === STATE_PHONE || step === STATE_SMS_CODE)) {
      step = host._step = STATE_MAIL;
    }

    const form = newEl("form"),
      hidden_input = newEl("input");
    hidden_input.type = TEXT;
    hidden_input.autocomplete = "username";
    hidden_input.style.display = "none";
    form.append(hidden_input);

    const onOauth = (id) => {
        emit(host, PASSPORT, id);
        if (host.onPassport) host.onPassport(id);
      },
      onPassport = (e) => {
        const p = e?.submitter?.dataset?.p;
        if (p) {
          if (p === MORE) {
            host.setStep(prov_li);
          } else {
            onOauth(Number(p));
          }
          return true;
        }
        return false;
      };

    if (Array.isArray(step)) {
      const [h3, p, prov_box, a_back] = newLi("h3", "p", B, A);
      h3.textContent = i18n[OAUTH_HINT_TITLE];
      p.textContent = i18n[OAUTH_HINT_TIP];
      prov_box.className = "prov_li";
      step.forEach((id) => {
        const key = OAUTH_TXT[id];
        if (!key) return;
        const btn = newBtn("Btn prov", SUBMIT),
          [icon, span] = newLi(B, SPAN);
        btn.dataset.p = id;
        icon.dataset.p = id;
        span.textContent = i18n[key] || id;
        btn.append(icon, span);
        prov_box.append(btn);
      });
      a_back.textContent = i18n[MAIL];
      On(a_back, { click: () => host.setStep(STATE_MAIL) });
      form.append(h3, p, prov_box, newReset(a_back));

      onSubmit(form, async (e) => {
        const id = e?.submitter?.dataset?.p;
        if (id) onOauth(Number(id));
      });
    } else if (step === STATE_MAIL) {
      const label_txt = has_phone ? i18n[MAIL] + " / " + i18n[PHONE] : i18n[MAIL],
        [wrap_mail, input_mail] = makeInput(TEXT, mail, label_txt, {
          autocomplete: "username"
        }),
        btn_submit = newSubmit(null, "sign"),
        [span_up, span_in] = newLi(SPAN, SPAN),
        passport = makePassport(prov_li);
      span_up.textContent = i18n[SIGNUP];
      span_in.textContent = i18n[SIGNIN];
      btn_submit.append(span_up, span_in);
      form.append(wrap_mail, newRow(btn_submit, passport), makeFooter(i18n, host.terms));

      onSubmit(form, async (e) => {
        if (onPassport(e)) return;
        const val = input_mail.value.trim();
        if (!val) return;
        const [type, exist] = await info(val);
        if (type === ACCOUNT_PHONE) {
          if (!has_phone) {
            input_mail.setCustomValidity(label_txt + " " + i18n[ERR_FORMAT]);
            input_mail.reportValidity();
            input_mail.addEventListener("input", () => input_mail.setCustomValidity(""), {
              once: true
            });
            return;
          }
          host._phone = val;
          await sendSms(host, val);
          host.setStep(STATE_SMS_CODE);
          return;
        }
        host._mail = val;
        if (exist) {
          host.setStep(STATE_SIGNIN);
          return;
        }
        try {
          const captcha = await Captcha();
          if (!captcha) return;
          setCaptcha(captcha);
          host.setStep(STATE_SIGNUP);
        } catch {}
      });
      focus(input_mail);
    } else if (step === STATE_SIGNUP) {
      const wrap_mail = makeEdit(mail, i18n[MAIL], () => host.setStep(STATE_MAIL)),
        btn_back = makeBack(() => host.setStep(STATE_MAIL)),
        btn_submit = newSubmit(i18n[SIGNUP]),
        passport = makePassport(prov_li),
        [wrap_name, input_name] = makeInput(TEXT, "", i18n[NAME], {
          autocomplete: "off",
          maxlength: 20
        }),
        [wrap_pwd, input_pwd] = makeInput(PASSWORD, "", i18n[PWD], {
          autocomplete: "off",
          minlength: 6,
          maxlength: 64
        }),
        [wrap_code, input_code] = makeCodeInput(i18n),
        [foot, a_resend] = newLi("footer", A);

      a_resend.textContent = i18n[RESEND];
      On(a_resend, {
        click: onIng(form, async () => {
          try {
            const captcha = await Captcha();
            if (!captcha) return;
            setCaptcha(captcha);
            if (host.onResend) await host.onResend(mail);
            input_code.value = "";
            focus(input_code);
          } catch {}
        })
      });
      foot.append(i18n[NO_CODE] + " ", a_resend);

      form.append(
        wrap_mail,
        wrap_name,
        wrap_pwd,
        wrap_code,
        foot,
        newRow(btn_back, btn_submit, passport)
      );

      onSubmit(form, async (e) => {
        if (onPassport(e)) return;
        const n = input_name.value.trim(),
          pwd = input_pwd.value.trim(),
          c = input_code.value.trim();
        if (!n || !pwd || !c) return;
        const res = host.onSignup ? await host.onSignup(mail, n, pwd, c) : [0, mail, n, c];
        emit(host, TAG, res);
      });
      focus(input_name);
    } else if (step === STATE_SIGNIN) {
      const wrap_mail = makeEdit(mail, i18n[MAIL], () => host.setStep(STATE_MAIL)),
        btn_back = makeBack(() => host.setStep(STATE_MAIL)),
        btn_submit = newSubmit(i18n[SIGNIN]),
        passport = makePassport(prov_li),
        [wrap_pwd, input_pwd] = makeInput(PASSWORD, "", i18n[PWD], {
          autocomplete: "current-password"
        }),
        [b_txt, a_reset] = newLi(B, A);

      b_txt.textContent = i18n[FORGET_PWD];
      a_reset.textContent = i18n[RESET_PWD];
      On(a_reset, {
        click: () => {
          emit(host, RESET, mail);
          if (host.onReset) host.onReset(mail);
        }
      });

      form.append(
        wrap_mail,
        wrap_pwd,
        newRow(btn_back, btn_submit, passport),
        newReset(b_txt, a_reset)
      );

      onSubmit(form, async (e) => {
        if (onPassport(e)) return;
        const pwd = input_pwd.value.trim();
        if (!pwd) return;
        const res = host.onLogin ? await host.onLogin(mail, pwd) : [0, mail];
        emit(host, TAG, res);
      });
      focus(input_pwd);
    } else if (step === STATE_PHONE) {
      const [wrap_phone, input_phone] = makeInput("tel", phone, i18n[PHONE], {
          inputmode: "numeric",
          autocomplete: "tel"
        }),
        btn_submit = newSubmit(i18n[GET_CODE]),
        passport = makePassport(prov_li);

      form.append(wrap_phone, newRow(btn_submit, passport), makeFooter(i18n, host.terms));

      onSubmit(form, async (e) => {
        if (onPassport(e)) return;
        const val = input_phone.value.trim();
        if (!val) return;
        host._phone = val;
        await sendSms(host, val);
        host.setStep(STATE_SMS_CODE);
      });
      focus(input_phone);
    } else if (step === STATE_SMS_CODE) {
      const wrap_phone = makeEdit(phone, i18n[PHONE], () => host.setStep(STATE_PHONE)),
        btn_back = makeBack(() => host.setStep(STATE_PHONE)),
        btn_submit = newSubmit(i18n[VERIFY]),
        [wrap_code, input_code] = makeCodeInput(i18n),
        foot_li = [];

      if (cd > 0) {
        const b_cd = newEl(B);
        b_cd.textContent = cd + i18n[RESEND_CD];
        foot_li.push(b_cd);
      } else {
        const [b_txt, a_resend] = newLi(B, A);
        b_txt.textContent = i18n[NO_CODE];
        a_resend.textContent = i18n[RESEND];
        On(a_resend, {
          click: onIng(form, async () => {
            await sendSms(host, phone);
            input_code.value = "";
            focus(input_code);
          })
        });
        foot_li.push(b_txt, a_resend);
      }

      form.append(wrap_phone, wrap_code, newRow(btn_back, btn_submit), newReset(...foot_li));

      onSubmit(form, async () => {
        const c = input_code.value.trim();
        if (!c) return;
        const res = host.onSmsVerify ? await host.onSmsVerify(phone, c) : [0, phone];
        emit(host, TAG, res);
      });
      focus(input_code);
    }

    host.append(form);
  };

export class Auth extends HTMLElement {
  get step() {
    return this._step;
  }

  set step(val) {
    this.setStep(val);
  }

  get mail() {
    return this._mail;
  }

  set mail(val) {
    this._mail = val;
  }

  get phone() {
    return this._phone;
  }

  set phone(val) {
    this._phone = val;
  }

  setStep(val) {
    if (this._step === val) return;
    this._step = val;
    emit(this, CHANGE, val);
    render(this);
  }

  startCd(n = 60) {
    this._cd = n;
    if (this._timer) clearInterval(this._timer);
    this._timer = setInterval(() => {
      if (--this._cd <= 0) {
        clearInterval(this._timer);
        this._timer = null;
      }
      render(this);
    }, 1000);
    render(this);
  }

  connectedCallback() {
    this._step = Number(this.getAttribute("step")) || STATE_MAIL;
    this._mail = this.getAttribute("mail") || "";
    this._phone = this.getAttribute("phone") || "";
    this._cd = 0;
    this.terms = this.getAttribute("terms");

    this.$ = fLang(async (i18n) => {
      this._i18n = i18n;
      await confLoad();
      render(this);
    });
  }

  disconnectedCallback() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
    if (this.$) {
      this.$();
      this.$ = null;
    }
  }
}
cE(TAG, Auth);
