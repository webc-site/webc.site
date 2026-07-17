# c-t.js

HTML internacionalizavimas

Žyma `<c-t>key</c-t>` yra pritaikyta, o `key` yra kalbos paketo raktas.

## cTranSet(el, genUrl)

Nustatykite `c-t` tekstą.

parametras:
- `el` : šakninis elementas, visuotinis gali būti perduodamas `document`
- `genUrl` : funkcija kalbos paketo žodynui gauti
  - parametras
    - `code` : kalbos kodas
  - Grąžinama reikšmė: kalbos paketo žodyno objektas arba pažadas, kuris išsprendžia šį objektą