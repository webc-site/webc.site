`src/js` Les scripts js couramment utilisés sont les suivants

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` est l'abréviation de `document`
  - `newEl` crée un élément `dom`. Si vous souhaitez créer plusieurs éléments, utilisez `newLi` pour les créer par lots
- `import { cE } from "../js/dom.js"` Créer un élément personnalisé commençant par `c-`
- `import { On } from "../js/On.js"` Utilisé pour implémenter la liaison et la dissociation d'événements
- `import { fTxt } from "../js/fetch.js"` Obtenir le texte