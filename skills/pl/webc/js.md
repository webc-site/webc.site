`src/js` Powszechnie używane skrypty js są następujące

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` to skrót od `document`
  - `newEl` tworzy element `dom`. Jeśli chcesz utworzyć wiele elementów, użyj `newLi`, aby utworzyć je partiami
- `import { cE } from "../js/dom.js"` Utwórz element niestandardowy zaczynający się od `c-`
- `import { On } from "../js/On.js"` Używane do implementowania wiązania i rozłączania zdarzeń
- `import { fTxt } from "../js/fetch.js"` Pobierz tekst