`src/js` Gli script js comunemente utilizzati sono i seguenti

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` è l'abbreviazione di `document`
  - `newEl` Crea un elemento `dom`. Se desideri creare più elementi, utilizza `newLi` per crearli in batch
- `import { cE } from "../js/dom.js"` Crea un elemento personalizzato che inizia con `c-`
- `import { On } from "../js/On.js"` Utilizzato per implementare l'associazione e la separazione degli eventi
- `import { fTxt } from "../js/fetch.js"` Ricevi SMS