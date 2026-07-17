# Toast.js

Výzva k vyskakovacej správe Toast

## toast(render, timeout)

Zobraziť štandardné kontextové okno s výzvou

parameter:
- `render` : Funkcia vykresľovania, ktorá sa používa na prispôsobenie obsahu kontextového okna
  - parameter
    - `el` : prvok DOM kontextového okna
- `timeout` : Oneskorenie automatického vypnutia v sekundách, predvolená hodnota 9, žiadne automatické vypnutie pri 0

Návratová hodnota: prvok DOM kontextového okna

## toastErr(render, timeout)

Zobraziť vyskakovacie okno s chybovým hlásením

parameter:
- `render` : Funkcia vykresľovania, ktorá sa používa na prispôsobenie obsahu kontextového okna
  - parameter
    - `el` : prvok DOM kontextového okna
- `timeout` : Oneskorenie automatického vypnutia v sekundách, predvolená hodnota 9, žiadne automatické vypnutie pri 0

Návratová hodnota: Prvok DOM kontextového okna chyby