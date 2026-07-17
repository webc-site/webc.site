# c-t.js

HTML internasjonalisering

Taggen `<c-t>key</c-t>` er tilpasset, og `key` er nøkkelen til språkpakken.

## cTranSet(el, genUrl)

Angi teksten for `c-t`.

parameter:
- `el` : rotelement, globalt kan sendes i `document`
- `genUrl` : funksjon for å få tak i språkpakkens ordbok
  - parameter
    - `code` : språkkode
  - Returverdi: et ordbokobjekt i en språkpakke, eller et løfte som løses til dette objektet