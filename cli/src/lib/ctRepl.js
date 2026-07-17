import { parse } from "node-html-parser";

export default (html, key_li) => {
  const root = parse(html, {
      blockTextElements: {
        script: true,
        noscript: true,
        style: true
      }
    }),
    ct_elements = root.querySelectorAll("c-t");

  if (!key_li) {
    const key_set = new Set();
    for (const el of ct_elements) {
      key_set.add(el.textContent.trim());
    }
    key_li = [...key_set];
  }

  if (key_li.length) {
    for (const el of ct_elements) {
      const key = el.textContent.trim(),
        idx = key_li.indexOf(key);
      if (idx !== -1) {
        el.textContent = idx;
      }
    }
  }
  return [root.toString(), key_li];
};
