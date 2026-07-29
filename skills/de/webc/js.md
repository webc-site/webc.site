`src/js` Häufig verwendete js-Skripte sind wie folgt

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` ist die Abkürzung von `document`
  - `newEl` Erstellt ein `dom`-Element. Wenn Sie mehrere Elemente erstellen möchten, verwenden Sie `newLi`, um sie stapelweise zu erstellen
- `import { cE } from "../js/dom.js"` Erstellen Sie ein benutzerdefiniertes Element, beginnend mit `c-`
- `import { On } from "../js/On.js"` Wird zum Implementieren der Ereignisbindung und -aufhebung verwendet
- `import { fTxt } from "../js/fetch.js"` Text abrufen