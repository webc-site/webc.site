# fetch.js

Fungsi alat permintaan rangkaian berdasarkan pengkapsulan ambil

## F(url, opt)

Hantar permintaan rangkaian dan kembalikan objek respons

parameter:
- `url` : Minta alamat
- `opt` : `fetch` objek pilihan

Nilai pulangan: Objek respons

## f(attr)

Fungsi tertib lebih tinggi yang membungkus permintaan dan menghuraikan kandungan yang dikembalikan dalam format yang ditentukan

parameter:
- `attr` : nama atribut penghuraian badan respons

Nilai pulangan: berfungsi untuk meminta dan menghuraikan kandungan secara tidak segerak
  - parameter
    - `url` : Minta alamat
    - `opt` : `fetch` objek pilihan
  - Nilai pulangan: kandungan yang dihuraikan

## fTxt

Hantar permintaan rangkaian dan kembalikan badan respons dalam format teks

parameter:
- `url` : Minta alamat
- `opt` : `fetch` objek pilihan

Nilai pulangan: teks respons

## fJson(url, opt)

Hantar permintaan rangkaian dan huraikan serta kembalikan badan respons dalam format JSON

parameter:
- `url` : Minta alamat
- `opt` : `fetch` objek pilihan

Nilai pulangan: objek JSON yang dihuraikan

## fBin(url, opt)

Hantar permintaan rangkaian dan kembalikan badan tindak balas sebagai tatasusunan bait binari

parameter:
- `url` : Minta alamat
- `opt` : `fetch` objek pilihan

Nilai pulangan: tatasusunan bait