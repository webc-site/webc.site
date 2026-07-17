# c-t.js

Internacionalizácia HTML

Značka `<c-t>key</c-t>` je prispôsobená a `key` je kľúčom jazykového balíka.

## cTranSet(el, genUrl)

Nastavte text pre `c-t`.

parameter:
- `el` : koreňový prvok, globálny môže byť odovzdaný v `document`
- `genUrl` : funkcia na získanie slovníka jazykového balíka
  - parameter
    - `code` : kód jazyka
  - Návratová hodnota: objekt slovníka jazykového balíka alebo Promise, ktorý rieši tento objekt