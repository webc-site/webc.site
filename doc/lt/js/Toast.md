# Toast.js

Skrebučio iššokančiojo pranešimo raginimas

## toast(render, timeout)

Rodyti standartinį iššokantįjį langą

parametras:
- `render` : atvaizdavimo funkcija, naudojama iššokančiųjų langų turiniui tinkinti
  - parametras
    - `el` : iškylančiojo lango DOM elementas
- `timeout` : Automatinio išsijungimo delsos sekundės, numatytoji 9, automatinio išjungimo nėra, kai 0

Grąžinama vertė: iškylančiojo lango DOM elementas

## toastErr(render, timeout)

Rodyti klaidos pranešimo iššokantįjį langą

parametras:
- `render` : atvaizdavimo funkcija, naudojama iššokančiųjų langų turiniui tinkinti
  - parametras
    - `el` : iškylančiojo lango DOM elementas
- `timeout` : Automatinio išsijungimo delsos sekundės, numatytoji 9, automatinio išjungimo nėra, kai 0

Grąžinama vertė: klaidos iškylančiojo lango DOM elementas