`src/js` Almindeligt brugte js-scripts er som følger

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` er forkortelsen af ​​`document`
  - `newEl` opretter et `dom` element. Hvis du vil oprette flere elementer, skal du bruge `newLi` til at oprette dem i batches
- `import { cE } from "../js/dom.js"` Opret et brugerdefineret element, der starter med `c-`
- `import { On } from "../js/On.js"` Bruges til at implementere hændelsesbinding og afbinding
- `import { fTxt } from "../js/fetch.js"` Hent tekst