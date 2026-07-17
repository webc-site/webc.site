# Toast.js

Toast iskačuće poruke

## toast(render, timeout)

Prikaži standardni iskačući prozor sa upitom

parametar:
- `render` : Funkcija renderiranja, koristi se za prilagođavanje pop-up sadržaja
  - parametar
    - `el` : DOM element iskačućeg prozora
- `timeout` : Sekunde kašnjenja za automatsko isključivanje, zadano 9, nema automatskog isključivanja kada je 0

Povratna vrijednost: DOM element iskačućeg prozora

## toastErr(render, timeout)

Prikaži skočni prozor s porukom o grešci

parametar:
- `render` : Funkcija renderiranja, koristi se za prilagođavanje pop-up sadržaja
  - parametar
    - `el` : DOM element iskačućeg prozora
- `timeout` : Sekunde kašnjenja za automatsko isključivanje, zadano 9, nema automatskog isključivanja kada je 0

Povratna vrijednost: DOM element iskačućeg prozora s greškom