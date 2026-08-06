import BoxX from "./BoxX.js";
import I18N_URL, { LOAD, TIP, SUC, FAIL, REFRESH, VALID_IMG } from "./Captcha/I18N.js";
import "./Captcha/_.styl";
import { On } from "../js/On.js";
import { newEl, newLi } from "../js/dom.js";
import { fetchLang } from "../js/fetchLang.js";
import { fBin, fJson } from "../js/fetch.js";

const API_CAPTCHA_URL = API_CAPTCHA,
  STATE_ING = 0,
  STATE_READY = 1,
  STATE_SUCCESS = 2,
  STATE_FAIL = 3,
  ICON_N = 3,
  BADGE_R = 13,
  UUID_LEN = 16,
  STATE_TITLE_KEY = [LOAD, TIP, SUC, FAIL],
  STATE_CLS = ["", "ready", "suc", "fail"],
  fLang = fetchLang(I18N_URL),
  asBtn = (el) => ((el.role = "button"), (el.tabIndex = 0), el),
  svgToMask = (svg) =>
    "url('data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(
      svg.includes("xmlns=")
        ? svg
        : svg.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ')
    ) +
    "')",
  vbDec = (bytes, offset) => {
    let res = 0,
      shift = 0,
      b;
    do {
      b = bytes[offset++];
      res |= (b & 0x7f) << shift;
      shift += 7;
    } while (b & 0x80);
    return [res, offset];
  },
  decode = (buf) => {
    const bytes = new Uint8Array(buf),
      id = bytes.subarray(0, UUID_LEN),
      decoder = new TextDecoder(),
      tips = [],
      lens = [];
    let offset = UUID_LEN;
    for (let i = 0; i < ICON_N; ++i) {
      const [len, next] = vbDec(bytes, offset);
      lens.push(len);
      offset = next;
    }
    for (const len of lens) {
      tips.push(decoder.decode(bytes.subarray(offset, offset + len)));
      offset += len;
    }
    return [id, tips, new Blob([bytes.subarray(offset)], { type: "image/webp" })];
  },
  toBase64 = (bytes) => bytes.toBase64({ alphabet: "base64url", omitPadding: true });

export default () =>
  new Promise((resolve) => {
    let state = STATE_ING,
      fail_timer = null,
      resolved = false,
      captcha_id = null,
      img_url = "",
      xy_li = [],
      id_counter = 0,
      renderTitle = () => {},
      badges = [];

    const dialog = BoxX(),
      [main, header, header_top, header_bottom, img_el, mask_el, title_el, btn_refresh, mask_icon] =
        newLi("main", "header", "b", "b", "b", "b", "b", "button", "b"),
      icon_mask_li = [];

    main.className = "Captcha";
    img_el.className = "img";
    mask_el.className = "mask";
    asBtn(img_el);

    for (let i = 0; i < ICON_N; ++i) {
      const [box, bd, icon_wrap, icon] = newLi("b", "b", "b", "b");
      bd.className = "bd";
      bd.textContent = i + 1;
      icon_wrap.append(icon);
      box.append(bd, icon_wrap);
      header_top.append(box);
      icon_mask_li.push(icon);
    }

    header_bottom.append(title_el, btn_refresh);
    header.append(header_top, header_bottom);
    mask_el.append(mask_icon);
    img_el.append(mask_el);
    main.append(header, img_el);
    dialog.append(main);

    const done = (val) => {
        if (!resolved) {
          resolved = true;
          resolve(val);
        }
      },
      cleanup = () => {
        if (fail_timer) {
          clearTimeout(fail_timer);
          fail_timer = null;
        }
        if (img_url) {
          URL.revokeObjectURL(img_url);
          img_url = "";
        }
        img_el.style.backgroundImage = "";
      },
      clearBadges = () => {
        for (const bd of badges) bd.remove();
        badges = [];
      },
      renderBadges = () => {
        clearBadges();
        for (let i = 0; i < id_counter; ++i) {
          const bd = asBtn(newEl("b")),
            idx = i + 1,
            i2 = i * 2;
          bd.className = "bd";
          bd.textContent = idx;
          bd.style.left = xy_li[i2] - BADGE_R + "px";
          bd.style.top = xy_li[i2 + 1] - BADGE_R + "px";

          On(bd, {
            click: (e) => {
              e.stopPropagation();
              id_counter = idx - 1;
              xy_li = xy_li.slice(0, id_counter * 2);
              renderBadges();
            }
          });
          img_el.append(bd);
          badges.push(bd);
        }
      },
      updateState = (s) => {
        state = s;
        STATE_CLS.forEach((cls, i) => cls && main.classList.toggle(cls, s === i));
        renderTitle();
      },
      fail = () => {
        cleanup();
        updateState(STATE_FAIL);
        fail_timer = setTimeout(load, 999);
      },
      load = async () => {
        cleanup();
        id_counter = 0;
        xy_li = [];
        renderBadges();
        updateState(STATE_ING);

        try {
          const buf = await fBin(API_CAPTCHA_URL),
            [id, tips, blob] = decode(buf);

          captcha_id = id;
          for (let i = 0; i < ICON_N; ++i) {
            icon_mask_li[i].style.maskImage = svgToMask(tips[i]);
          }

          img_url = URL.createObjectURL(blob);
          img_el.style.backgroundImage = "url(" + img_url + ")";
          updateState(STATE_READY);
        } catch {
          fail();
        }
      },
      verify = async () => {
        clearBadges();
        updateState(STATE_ING);

        try {
          const payload = new Uint8Array(UUID_LEN + xy_li.length * 2),
            xy_16 = new Uint16Array(payload.buffer, UUID_LEN);

          payload.set(captcha_id, 0);
          xy_16.set(xy_li);

          const res = await fJson(API_CAPTCHA_URL, {
            method: "POST",
            body: payload
          });

          if (res === 1) {
            updateState(STATE_SUCCESS);
            cleanup();
            setTimeout(() => {
              dialog.close();
              done(toBase64(captcha_id));
            }, 999);
          } else {
            fail();
          }
        } catch {
          fail();
        }
      };

    On(btn_refresh, { click: load });
    On(img_el, {
      click: (e) => {
        if (state !== STATE_READY) return;
        const { offsetX, offsetY } = e;
        xy_li.push(offsetX, offsetY);
        ++id_counter;
        renderBadges();
        if (id_counter === ICON_N) {
          verify();
        }
      }
    });

    On(dialog, {
      close: () => {
        cleanup();
        done(undefined);
      }
    });

    fLang((i18n) => {
      btn_refresh.title = i18n[REFRESH];
      img_el.setAttribute("aria-label", i18n[VALID_IMG]);
      (renderTitle = () => {
        const txt = i18n[STATE_TITLE_KEY[state]];
        title_el.textContent = state === STATE_ING ? txt + " ···" : txt;
      })();
    });

    load();
  });
