# c-t.js

HTML internationalisering

Tagget `<c-t>key</c-t>` er tilpasset, og `key` er nøglen til sprogpakken.

## cTranSet(el, genUrl)

Indstil teksten til `c-t`.

parameter:
- `el` : rodelement, globalt kan overføres i `document`
- `genUrl` : funktion til at hente sprogpakkens ordbog
  - parameter
    - `code` : sprogkode
  - Returværdi: et sprogpakkeordbogsobjekt eller et løfte, der løses til dette objekt