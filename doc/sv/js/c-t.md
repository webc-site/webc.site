# c-t.js

HTML internationalisering

Taggen `<c-t>key</c-t>` är anpassad och `key` är nyckeln till språkpaketet.

## cTranSet(el, genUrl)

Ställ in texten för `c-t`.

parameter:
- `el` : rotelement, globalt kan skickas i `document`
- `genUrl` : funktion för att hämta språkpaketets ordbok
  - parameter
    - `code` : språkkod
  - Returvärde: ett språkpakets ordboksobjekt eller ett löfte som löser sig till detta objekt