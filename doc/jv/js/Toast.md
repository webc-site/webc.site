# Toast.js

Pandhuan pesen pop-up roti panggang

## toast(render, timeout)

Tampilake jendhela pop-up standar

parameter:
- `render` : Fungsi rendering, digunakake kanggo ngatur isi pop-up
  - paramèter
    - `el` : Elemen DOM saka jendela pop-up
- `timeout` : Tundha detik kanggo mati otomatis, standar 9, ora mati otomatis nalika 0

Nilai bali: unsur DOM saka jendhela pop-up

## toastErr(render, timeout)

Tampilake pesen kesalahan popup

parameter:
- `render` : Fungsi rendering, digunakake kanggo ngatur isi pop-up
  - paramèter
    - `el` : Elemen DOM saka jendela pop-up
- `timeout` : Tundha detik kanggo mati otomatis, standar 9, ora mati otomatis nalika 0

Nilai bali: unsur DOM saka jendhela pop-up kesalahan