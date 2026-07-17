# Toast.js

Röstsaibi hüpiksõnumi viip

## toast(render, timeout)

Kuva standardne viipade hüpikaken

parameeter:
- `render` : renderdusfunktsioon, mida kasutatakse hüpikakende sisu kohandamiseks
  - parameeter
    - `el` : hüpikakna DOM-element
- `timeout` : automaatse väljalülitamise viivitussekundid, vaikimisi 9, automaatset väljalülitamist ei toimu, kui 0

Tagastusväärtus: hüpikakna DOM-element

## toastErr(render, timeout)

Kuva veateate hüpikaken

parameeter:
- `render` : renderdusfunktsioon, mida kasutatakse hüpikakende sisu kohandamiseks
  - parameeter
    - `el` : hüpikakna DOM-element
- `timeout` : automaatse väljalülitamise viivitussekundid, vaikimisi 9, automaatset väljalülitamist ei toimu, kui 0

Tagastatav väärtus: vea hüpikakna DOM-element