`src/js` Vanlige js-skript er som følger

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` er forkortelsen av `document`
  - `newEl` oppretter et `dom` element. Hvis du vil lage flere elementer, bruk `newLi` for å lage dem i grupper
- `import { cE } from "../js/dom.js"` Opprett et tilpasset element som begynner med `c-`
- `import { On } from "../js/On.js"` Brukes til å implementere hendelsesbinding og avbinding
- `import { fTxt } from "../js/fetch.js"` Få tekst