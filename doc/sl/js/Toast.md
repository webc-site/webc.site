# Toast.js

Poziv za pojavno sporočilo Toast

## toast(render, timeout)

Prikaži standardno pojavno okno s pozivom

parameter:
- `render` : Funkcija upodabljanja, ki se uporablja za prilagoditev pojavne vsebine
  - parameter
    - `el` : element DOM pojavnega okna
- `timeout`: sekundna zakasnitev za samodejni izklop, privzeto 9, brez samodejnega izklopa, ko je 0

Povratna vrednost: element DOM pojavnega okna

## toastErr(render, timeout)

Pokaži pojavno okno s sporočilom o napaki

parameter:
- `render` : Funkcija upodabljanja, ki se uporablja za prilagoditev pojavne vsebine
  - parameter
    - `el` : element DOM pojavnega okna
- `timeout`: sekundna zakasnitev za samodejni izklop, privzeto 9, brez samodejnega izklopa, ko je 0

Povratna vrednost: element DOM pojavnega okna z napako