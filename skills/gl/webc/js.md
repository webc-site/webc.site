`src/js` Os scripts js de uso habitual son os seguintes

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` é a abreviatura de `document`
  - `newEl` crea un elemento `dom`. Se queres crear varios elementos, utiliza `newLi` para crealos por lotes
- `import { cE } from "../js/dom.js"` Crea un elemento personalizado que comece por `c-`
- `import { On } from "../js/On.js"` Úsase para implementar a vinculación e desvinculación de eventos
- `import { fTxt } from "../js/fetch.js"` Obter texto