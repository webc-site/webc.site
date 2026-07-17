# c-t.js

HTML-Internationalisierung

Das Tag `<c-t>key</c-t>` ist angepasst und `key` ist der Schlüssel des Sprachpakets.

## cTranSet(el, genUrl)

Legen Sie den Text für `c-t` fest.

Parameter:
- `el`: Root-Element, global kann in `document` übergeben werden
- `genUrl`: Funktion zum Abrufen des Sprachpaket-Wörterbuchs
  - Parameter
    - `code`: Sprachcode
  - Rückgabewert: ein Sprachpaket-Wörterbuchobjekt oder ein Promise, das zu diesem Objekt aufgelöst wird