`src/js` A leggyakrabban használt js-szkriptek a következők

- `import { D, newEl, newLi } from "../js/dom.js"`
  - Az `D` az `document` rövidítése
  - `newEl` létrehoz egy `dom` elemet. Ha több elemet szeretne létrehozni, használja az `newLi` parancsot a kötegelt létrehozásukhoz
- `import { cE } from "../js/dom.js"` Hozzon létre egy egyéni elemet, amely a következővel kezdődik: `c-`
- `import { On } from "../js/On.js"` Esemény-összerendelés és -lekötés megvalósítására szolgál
- `import { fTxt } from "../js/fetch.js"` Szöveg kérése