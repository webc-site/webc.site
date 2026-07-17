# Toast.js

Pesan pop-up roti panggang

## toast(render, timeout)

Tampilkan jendela pop-up prompt standar

parameter:
- `render` : Fungsi rendering, digunakan untuk menyesuaikan konten pop-up
  - parameter
    - `el` : Elemen DOM dari jendela pop-up
- `timeout` : Penundaan detik untuk pematian otomatis, default 9, tidak ada pematian otomatis saat 0

Nilai kembalian: elemen DOM dari jendela pop-up

## toastErr(render, timeout)

Tampilkan popup pesan kesalahan

parameter:
- `render` : Fungsi rendering, digunakan untuk menyesuaikan konten pop-up
  - parameter
    - `el` : Elemen DOM dari jendela pop-up
- `timeout` : Penundaan detik untuk pematian otomatis, default 9, tidak ada pematian otomatis saat 0

Nilai yang dikembalikan: Elemen DOM dari jendela pop-up kesalahan