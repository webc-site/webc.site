import "../../Md.js";

const DOC = {
  zh: {
    README: "WebC.site",
    "doc/i18n": "国际化",
    "doc/use": "使用组件",
    "doc/npm": "发布 NPM 包",
    "doc/dist": "上线展示站",
    "doc/bench": "基准评测"
  },
  en: {
    README: "WebC.site",
    "doc/i18n": "Internationalization",
    "doc/use": "Use Component",
    "doc/npm": "Publish NPM Package",
    "doc/dist": "Deploy Site",
    "doc/bench": "Benchmark"
  }
};

export default (root) => {
  const toc = root.querySelector("c-toc"),
    md = root.querySelector("c-md");

  if (!toc) return;

  if (md) toc.target = md;
  toc.mdUrl = (key, lang) => (import.meta.env.DEV ? "/doc/" : GIT_DOC) + lang + "/" + key + ".md";
  toc.li = (lang) => DOC[lang] || DOC.en;

  const first_key = Object.keys(DOC.en)[0];
  if (first_key) toc.load(first_key);
};
