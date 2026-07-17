# Toast.js

Výzva k vyskakovací zprávě Toast

## toast(render, timeout)

Zobrazit standardní vyskakovací okno s výzvou

parametr:
- `render` : Funkce vykreslování, která se používá k přizpůsobení obsahu vyskakovacích oken
  - parametr
    - `el` : Prvek DOM vyskakovacího okna
- `timeout` : Zpoždění v sekundách pro automatické vypnutí, výchozí 9, žádné automatické vypnutí při 0

Návratová hodnota: DOM prvek vyskakovacího okna

## toastErr(render, timeout)

Zobrazit vyskakovací okno s chybovou zprávou

parametr:
- `render` : Funkce vykreslování, která se používá k přizpůsobení obsahu vyskakovacích oken
  - parametr
    - `el` : Prvek DOM vyskakovacího okna
- `timeout` : Zpoždění v sekundách pro automatické vypnutí, výchozí 9, žádné automatické vypnutí při 0

Návratová hodnota: Prvek DOM vyskakovacího okna chyby