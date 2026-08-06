# fetch.js

Fungsi alat panyuwunan jaringan adhedhasar enkapsulasi njupuk

## F(url, opt)

Kirim panjalukan jaringan lan bali obyek respon

parameter:
- `url` : Njaluk alamat
- `opt` : `fetch` objek pilihan

Nilai bali: obyek respon

## f(attr)

Fungsi sing luwih dhuwur sing mbungkus panjalukan lan ngurai isi sing bali ing format sing ditemtokake

parameter:
- `attr` : jeneng atribut parsing body respon

Nilai bali: fungsi kanggo njaluk asynchronously lan parsing isi
  - paramèter
    - `url` : Njaluk alamat
    - `opt` : `fetch` objek pilihan
  - Nilai bali: isi parsed

## fTxt

Kirim panjalukan jaringan lan baliake awak respon ing format teks

parameter:
- `url` : Njaluk alamat
- `opt` : `fetch` objek pilihan

Nilai bali: teks respon

## fJson(url, opt)

Kirimi panjalukan jaringan lan parse lan baliake awak respon ing format JSON

parameter:
- `url` : Njaluk alamat
- `opt` : `fetch` objek pilihan

Nilai bali: obyek JSON parsed

## fBin(url, opt)

Kirim panjalukan jaringan lan baliake awak respon minangka array byte binar

parameter:
- `url` : Njaluk alamat
- `opt` : `fetch` objek pilihan

Nilai bali: array byte