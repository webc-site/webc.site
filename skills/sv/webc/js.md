`src/js` Vanligt använda js-skript är följande

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` är förkortningen av `document`
  - `newEl` skapar ett `dom` element. Om du vill skapa flera element, använd `newLi` för att skapa dem i omgångar
- `import { cE } from "../js/dom.js"` Skapa ett anpassat element som börjar med `c-`
- `import { On } from "../js/On.js"` Används för att implementera händelsebindning och avbindning
- `import { fTxt } from "../js/fetch.js"` Hämta text