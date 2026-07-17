# c-t.js

Internacjonalizacja HTML

Znacznik `<c-t>key</c-t>` jest dostosowany, a `key` jest kluczem pakietu językowego.

## cTranSet(el, genUrl)

Ustaw tekst dla `c-t`.

parametr:
- `el` : element główny, globalny można przekazać w `document`
- `genUrl` : funkcja pobierająca słownik pakietu językowego
  - parametr
    - `code` : kod języka
  - Wartość zwracana: obiekt słownika pakietu językowego lub obietnica, która odnosi się do tego obiektu