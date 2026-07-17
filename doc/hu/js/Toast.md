# Toast.js

Toast előugró üzenet

## toast(render, timeout)

Normál prompt előugró ablak megjelenítése

paraméter:
- `render` : Rendering funkció, az előugró tartalom testreszabására szolgál
  - paraméter
    - `el` : A felugró ablak DOM eleme
- `timeout` : Késleltetési másodperc az automatikus leállításhoz, alapértelmezett 9, nincs automatikus leállítás, ha 0

Visszatérési érték: a felugró ablak DOM eleme

## toastErr(render, timeout)

Hibaüzenet felugró ablak megjelenítése

paraméter:
- `render` : Rendering funkció, az előugró tartalom testreszabására szolgál
  - paraméter
    - `el` : A felugró ablak DOM eleme
- `timeout` : Késleltetési másodperc az automatikus leállításhoz, alapértelmezett 9, nincs automatikus leállítás, ha 0

Visszatérési érték: a hiba felugró ablak DOM eleme