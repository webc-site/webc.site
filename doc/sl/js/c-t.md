# c-t.js

Internacionalizacija HTML

Oznaka `<c-t>key</c-t>` je prilagojena, `key` pa je ključ jezikovnega paketa.

## cTranSet(el, genUrl)

Nastavite besedilo za `c-t`.

parameter:
- `el` : korenski element, globalno je mogoče posredovati v `document`
- `genUrl` : funkcija za pridobitev slovarja jezikovnega paketa
  - parameter
    - `code` : koda jezika
  - Povratna vrednost: objekt slovarja jezikovnega paketa ali obljuba, ki se razreši v ta objekt