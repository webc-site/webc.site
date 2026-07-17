# c-t.js

Internationalisation HTML

La balise `<c-t>key</c-t>` est personnalisée et `key` est la clé du pack de langue.

## cTranSet(el, genUrl)

Définissez le texte pour `c-t`.

paramètre:
- `el` : élément racine, global peut être passé dans `document`
- `genUrl` : fonction pour obtenir le dictionnaire du pack de langue
  - paramètre
    - `code` : code langue
  - Valeur de retour : un objet dictionnaire du module linguistique ou une promesse qui se résout en cet objet