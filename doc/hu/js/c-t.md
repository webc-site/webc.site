# c-t.js

HTML nemzetközivé tétele

A `<c-t>key</c-t>` címke testreszabott, a `key` pedig a nyelvi csomag kulcsa.

## cTranSet(el, genUrl)

Állítsa be az `c-t` szövegét.

paraméter:
- `el` : gyökérelem, globális átadható a `document`-ben
- `genUrl` : funkció a nyelvi csomag szótárának lekéréséhez
  - paraméter
    - `code` : nyelvi kód
  - Visszatérési érték: egy nyelvi csomag szótárobjektum vagy egy Promise, amely erre az objektumra oldódik fel