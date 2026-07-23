import "./Scroll.js";
import "./Ing.js";
import "./Side.js";
import "./Btn.js";
import "./Toc/_.styl";
import { cE, newEl } from "../js/dom.js";
import { fTxt } from "../js/fetch.js";
import hashActive from "../js/hashActive.js";
import { langCode, onLang } from "../js/i18n.js";
import navScroll from "../js/navScroll.js";
import { On } from "../js/On.js";

const TOC = "toc",
  C_A = "A",
  C_ING = "Ing",
  C_SUB = "sub",
  PREFIX_H = "H",
  HASH = "#",
  toHash = (id) => HASH + id,
  urlByKey = (self, key) => (self.mdUrl ? self.mdUrl(key, langCode()) : ""),
  keyA = (self, key) => vsEl(self)?.querySelector('a[data-key="' + key + '"]'),
  activeA = (self) =>
    self._key ? keyA(self, self._key) : vsEl(self)?.querySelector("a." + C_A + "[data-key]"),
  unHash = (self) => {
    if (self._un_hash) {
      self._un_hash();
      self._un_hash = null;
    }
  },
  unH1Nav = (self) => {
    if (self._un_h1_nav) {
      self._un_h1_nav();
      self._un_h1_nav = null;
    }
  },
  bindH1Nav = (self, h1) => {
    unH1Nav(self);
    if (h1) self._un_h1_nav = navScroll(h1);
  },
  hrefRefresh = (self) =>
    vsEl(self)
      ?.querySelectorAll("a[data-key]")
      .forEach((a) => {
        a.href = urlByKey(self, a.dataset.key);
      }),
  isOpen = (a) =>
    Boolean(
      a &&
      (a.classList.contains(C_A) ||
        (a.nextElementSibling && a.nextElementSibling.classList.contains(C_SUB)))
    ),
  btnEl = (self) => {
    let btn = self._btn;
    if (!btn) {
      btn = newEl("button");
      btn.className = "BtnC TocBtn";
      btn.type = "button";
      const ico = newEl("i");
      ico.className = "Ico";
      btn.append(ico);
      btn.onclick = (e) => {
        e.stopPropagation();
        const side = sideEl(self);
        if (side.open) side.open();
      };
      self._btn = btn;
    }
    return btn;
  },
  sideEl = (self) => {
    let side = self.querySelector("c-side");
    if (!side) {
      side = newEl("c-side");
      side.className = "right";
      self.append(side);
    }
    return side;
  },
  vsEl = (self) => sideEl(self).querySelector("c-vs"),
  targetEl = (self) =>
    self._target ||
    self.getRootNode().querySelector("c-md,main,article") ||
    document.querySelector("c-md,main,article"),
  subRender = (self, a) => {
    unHash(self);
    unH1Nav(self);

    vsEl(self)
      .querySelectorAll("." + C_SUB)
      .forEach((el) => el.remove());

    const target_el = targetEl(self);
    if (!target_el) return;

    const h_li = Array.from(target_el.querySelectorAll("h1,h2,h3,h4,h5,h6"));
    if (!h_li.length) {
      self._un_hash = hashActive([a]);
      return;
    }

    let idx = 1;
    const base_href = a.href.split(HASH)[0];

    if (h_li[0].tagName === "H1") {
      const first_h1 = h_li.shift(),
        id = PREFIX_H + idx++,
        btn = btnEl(self);
      first_h1.id = id;
      a.href = base_href + toHash(id);

      if (!first_h1.contains(btn)) {
        first_h1.append(btn);
      }
      bindH1Nav(self, first_h1);
    } else {
      if (!target_el.id) target_el.id = PREFIX_H + idx++;
      a.href = base_href + toHash(target_el.id);
    }

    if (h_li.length) {
      const sub = newEl("div");
      sub.className = C_SUB;

      h_li.forEach((h) => {
        const text = h.textContent.trim();
        if (!text) return;

        const id = PREFIX_H + idx++,
          sub_a = newEl("a");

        h.id = id;
        if (!h.querySelector("a")) {
          const ha = newEl("a");
          ha.href = toHash(id);
          ha.append(...h.childNodes);
          h.append(ha);
        }
        sub_a.className = "h" + h.tagName[1].toLowerCase();
        sub_a.href = toHash(id);
        sub_a.textContent = text;
        sub.append(sub_a);
      });

      if (sub.children.length) {
        a.after(sub);
        self._un_hash = hashActive([a, ...sub.children]);
        return;
      }
    }

    self._un_hash = hashActive([a]);
  },
  render = (self, data) => {
    const vs = vsEl(self);
    vs.innerHTML = "";
    if (!data) return;

    const real_data = typeof data === "function" ? data(langCode()) : data;
    if (!real_data) return;

    Object.entries(real_data).forEach(([key, title]) => {
      const a = newEl("a");
      a.dataset.key = key;
      a.href = urlByKey(self, key);
      a.textContent = title;
      vs.append(a);
    });
  },
  keyLoad = async (self, a, force) => {
    if (!a || a.classList.contains(C_ING) || (!force && isOpen(a))) return;
    const { key } = a.dataset;
    if (!key) return;

    self._key = key;

    const url = urlByKey(self, key),
      target_el = targetEl(self),
      vs = vsEl(self);

    unHash(self);
    unH1Nav(self);

    vs.querySelectorAll("a." + C_A).forEach((el) => el.classList.remove(C_A));
    vs.querySelectorAll("." + C_SUB).forEach((el) => el.remove());

    a.classList.add(C_A, C_ING);
    if (target_el) {
      target_el.classList.add(C_ING);
      if ("value" in target_el) target_el.value = "";
      target_el.innerHTML = "";
    }

    let md;
    try {
      md = await fTxt(url);
    } finally {
      a.classList.remove(C_ING);
      if (target_el) target_el.classList.remove(C_ING);
    }

    if (target_el) {
      if ("value" in target_el) target_el.value = md;
      else target_el.innerHTML = md;
    }

    setTimeout(() => {
      if (a.classList.contains(C_A)) {
        subRender(self, a);
      }
    }, 0);
  };

cE(
  TOC,
  class extends HTMLElement {
    get li() {
      return this._li;
    }

    set li(val) {
      if (this._li === val) return;
      this._li = val;
      render(this, val);
      if (this._key) {
        const a = keyA(this, this._key);
        if (a && !isOpen(a)) keyLoad(this, a);
      }
    }

    get mdUrl() {
      return this._md_url;
    }

    set mdUrl(fn) {
      this._md_url = fn;
      hrefRefresh(this);
    }

    get target() {
      return this._target;
    }

    set target(val) {
      this._target = val;
    }

    connectedCallback() {
      const side = sideEl(this),
        un_click = On(this, {
          click: (e) => {
            const a = e.target.closest("a");
            if (!a || !this.contains(a)) return;

            if (side.classList.contains("open")) {
              side.close();
            }

            const { key } = a.dataset;
            if (key) {
              e.preventDefault();
              if (isOpen(a)) {
                const href = a.getAttribute("href");
                if (href && href.includes(HASH)) {
                  const id = href.split(HASH).pop(),
                    hash = toHash(id);
                  if (location.hash === hash) {
                    const root = this.getRootNode(),
                      doc = root.getElementById ? root : document,
                      el = doc.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    location.hash = hash;
                  }
                }
                return;
              }
              keyLoad(this, a);
            }
          }
        }),
        un_lang = onLang(() => {
          if (this._li) render(this, this._li);
          if (this._key) {
            const a = keyA(this, this._key);
            if (a) keyLoad(this, a, 1);
          }
        });

      this.$ = () => {
        unHash(this);
        unH1Nav(this);
        un_click();
        un_lang();
      };
    }

    disconnectedCallback() {
      if (this.$) {
        this.$();
        this.$ = null;
      }
    }

    load(key) {
      this._key = key;
      const a = keyA(this, key);
      if (a && !isOpen(a)) keyLoad(this, a);
    }

    sync() {
      const a = activeA(this);
      if (a) subRender(this, a);
    }
  }
);
