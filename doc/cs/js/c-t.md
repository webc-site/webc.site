# c-t.js

Internacionalizace HTML

Značka `<c-t>key</c-t>` je přizpůsobena a `key` je klíčem jazykového balíčku.

## cTranSet(el, genUrl)

Nastavte text pro `c-t`.

parametr:
- `el` : kořenový prvek, globální lze předat v `document`
- `genUrl` : funkce pro získání slovníku jazykového balíčku
  - parametr
    - `code` : kód jazyka
  - Návratová hodnota: objekt slovníku jazykové sady nebo Promise, který se překládá na tento objekt