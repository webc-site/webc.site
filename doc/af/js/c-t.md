# c-t.js

HTML internasionalisering

Die merker `<c-t>key</c-t>` is gepasmaak, en `key` is die sleutel van die taalpakket.

## cTranSet(el, genUrl)

Stel die teks vir `c-t`.

parameter:
- `el` : wortelelement, globaal kan in `document` deurgegee word
- `genUrl` : funksie om taalpakketwoordeboek te bekom
  - parameter
    - `code` : taalkode
  - Terugkeerwaarde: 'n taalpakketwoordeboekobjek, of 'n belofte wat na hierdie objek beantwoord