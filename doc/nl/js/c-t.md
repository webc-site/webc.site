# c-t.js

HTML-internationalisering

De tag `<c-t>key</c-t>` is aangepast en `key` is de sleutel van het taalpakket.

## cTranSet(el, genUrl)

Stel de tekst in voor `c-t`.

parameter:
- `el` : hoofdelement, globaal kan worden doorgegeven in `document`
- `genUrl`: functie om het taalpakketwoordenboek te verkrijgen
  - parameter
    - `code`: taalcode
  - Retourwaarde: een taalpakketwoordenboekobject of een belofte die naar dit object leidt