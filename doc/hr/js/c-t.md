# c-t.js

HTML internacionalizacija

Oznaka `<c-t>key</c-t>` je prilagođena, a `key` je ključ jezičnog paketa.

## cTranSet(el, genUrl)

Postavite tekst za `c-t`.

parametar:
- `el` : korijenski element, globalno se može proslijediti u `document`
- `genUrl` : funkcija za dobivanje rječnika jezičnog paketa
  - parametar
    - `code` : kod jezika
  - Povratna vrijednost: objekt rječnika jezičnog paketa ili Promise koji se rješava u ovaj objekt