import { fetchLang } from "../../js/fetchLang.js";
import i18nUrl, { MD_CONTENT } from "./I18N.js";

export default (root) => {
  const fLang = fetchLang(i18nUrl),
    stream_el = root.querySelector("c-md-stream.stream");

  fLang((i18n) => {
    const md_content = i18n[MD_CONTENT];

    stream_el.gen = () => {
      let next_fn = () => step(0);

      const step = (idx) => {
          if (idx >= md_content.length) {
            return Promise.resolve({ done: true });
          }
          return new Promise((resolve) => {
            setTimeout(() => {
              const next_idx = Math.min(idx + 2, md_content.length),
                chunk = md_content.slice(idx, next_idx);
              next_fn = () => step(next_idx);
              resolve({ value: chunk, done: false });
            }, 50);
          });
        },
        iterator = {
          [Symbol.asyncIterator]: () => iterator,
          next: () => next_fn()
        };
      return iterator;
    };
  });
};
