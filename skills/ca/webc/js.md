`src/js` Els scripts js d'ús habitual són els següents

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` és l'abreviatura de `document`
  - `newEl` crea un element `dom`. Si voleu crear diversos elements, feu servir `newLi` per crear-los per lots
- `import { cE } from "../js/dom.js"` Creeu un element personalitzat que comenci per `c-`
- `import { On } from "../js/On.js"` S'utilitza per implementar la vinculació i desenllaç d'esdeveniments
- `import { fTxt } from "../js/fetch.js"` Obteniu text