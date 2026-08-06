# fetch.js

Fungsi alat permintaan jaringan berdasarkan enkapsulasi pengambilan

## F(url, opt)

Kirim permintaan jaringan dan kembalikan objek respons

parameter:
- `url` : Minta alamat
- `opt` : `fetch` objek opsi

Nilai kembalian: Objek respons

## f(attr)

Fungsi tingkat tinggi yang menggabungkan permintaan dan mem-parsing konten yang dikembalikan dalam format tertentu

parameter:
- `attr` : nama atribut penguraian isi respons

Nilai kembalian: berfungsi untuk meminta dan mengurai konten secara asinkron
  - parameter
    - `url` : Minta alamat
    - `opt` : `fetch` objek opsi
  - Nilai kembalian: konten yang diurai

## fTxt

Kirim permintaan jaringan dan kembalikan isi respons dalam format teks

parameter:
- `url` : Minta alamat
- `opt` : `fetch` objek opsi

Nilai kembalian: teks respons

## fJson(url, opt)

Kirim permintaan jaringan dan parsing serta kembalikan isi respons dalam format JSON

parameter:
- `url` : Minta alamat
- `opt` : `fetch` objek opsi

Nilai kembalian: objek JSON yang diurai

## fBin(url, opt)

Kirim permintaan jaringan dan kembalikan isi respons sebagai array byte biner

parameter:
- `url` : Minta alamat
- `opt` : `fetch` objek opsi

Nilai kembalian: array byte