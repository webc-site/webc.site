`src/js` Dažniausiai naudojami js scenarijai yra tokie

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` yra `document` santrumpa
  - `newEl` sukuria `dom` elementą. Jei norite sukurti kelis elementus, naudokite `newLi`, kad sukurtumėte juos paketais
- `import { cE } from "../js/dom.js"` Sukurkite pasirinktinį elementą, prasidedantį `c-`
- `import { On } from "../js/On.js"` Naudojamas įvykių susiejimui ir atšaukimui įgyvendinti
- `import { fTxt } from "../js/fetch.js"` Gaukite tekstą