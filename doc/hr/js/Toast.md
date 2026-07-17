# Toast.js

Toast skočna poruka

## toast(render, timeout)

Prikaži standardni skočni prozor upita

parametar:
- `render` : Funkcija iscrtavanja, koristi se za prilagodbu skočnog sadržaja
  - parametar
    - `el` : DOM element skočnog prozora
- `timeout` : sekunde odgode za automatsko isključivanje, zadano 9, nema automatskog isključivanja kada je 0

Povratna vrijednost: DOM element skočnog prozora

## toastErr(render, timeout)

Prikaži skočni prozor s porukom o pogrešci

parametar:
- `render` : Funkcija iscrtavanja, koristi se za prilagodbu skočnog sadržaja
  - parametar
    - `el` : DOM element skočnog prozora
- `timeout` : sekunde odgode za automatsko isključivanje, zadano 9, nema automatskog isključivanja kada je 0

Povratna vrijednost: DOM element skočnog prozora s pogreškom