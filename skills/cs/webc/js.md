`src/js` Běžně používané skripty js jsou následující

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` je zkratka `document`
  - `newEl` vytvoří prvek `dom`. Pokud chcete vytvořit více prvků, použijte `newLi` k jejich hromadnému vytváření
- `import { cE } from "../js/dom.js"` Vytvořte vlastní prvek začínající `c-`
- `import { On } from "../js/On.js"` Používá se k implementaci vazby události a zrušení vazby
- `import { fTxt } from "../js/fetch.js"` Získejte text