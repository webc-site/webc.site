`src/js` فيما يلي نصوص js شائعة الاستخدام

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` هو اختصار لـ `document`
  - `newEl` ينشئ عنصر `dom`. إذا كنت تريد إنشاء عناصر متعددة، فاستخدم `newLi` لإنشائها على دفعات
- `import { cE } from "../js/cE.js"` قم بإنشاء عنصر مخصص
- `import { On } from "../js/On.js"` يُستخدم لتنفيذ ربط الأحداث وإلغاء ربطها