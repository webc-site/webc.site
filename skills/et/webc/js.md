`src/js` Tavaliselt kasutatavad js-skriptid on järgmised

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` on `document` lühend
  - `newEl` loob elemendi `dom`. Kui soovite luua mitu elementi, kasutage nende loomiseks partiidena `newLi`
- `import { cE } from "../js/dom.js"` Looge kohandatud element, mis algab tähega `c-`
- `import { On } from "../js/On.js"` Kasutatakse sündmuste sidumiseks ja lahtiühendamiseks
- `import { fTxt } from "../js/fetch.js"` Hankige tekst