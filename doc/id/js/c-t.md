# c-t.js

Internasionalisasi HTML

Tag `<c-t>key</c-t>` disesuaikan, dan `key` adalah kunci paket bahasa.

## cTranSet(el, genUrl)

Setel teks untuk `c-t`.

parameter:
- `el` : elemen root, global dapat diteruskan dalam `document`
- `genUrl` : berfungsi untuk mendapatkan kamus paket bahasa
  - parameter
    - `code` : kode bahasa
  - Nilai yang dikembalikan: objek kamus paket bahasa, atau Janji yang menyelesaikan objek ini