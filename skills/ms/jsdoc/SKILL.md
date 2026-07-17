---
name: jsdoc
description: dokumen src/js dijana secara automatik
---

## Larikan langkah

1. Jalankan `./sh/jsDoc.js` untuk melihat fungsi dengan dokumentasi yang hilang (jika tiada output, tidak perlu menambahnya).
2. Mengikut senarai fail output, baca dokumen dan kod sedia ada satu demi satu dan lengkapkan (proses mengikut urutan dan pecahkannya satu demi satu).

## Keperluan dokumentasi

Jika eksport ialah fungsi, tulis
- Parameter dan nilai pulangan:
  - Hanya tulis huraian yang sepadan jika terdapat parameter atau nilai pulangan, jika tidak, jangan tuliskannya.
  - Parameter diperkenalkan menggunakan senarai tidak tersusun.
  - Jika nilai pulangan ialah tatasusunan, gunakan senarai tidak tertib untuk menerangkannya satu persatu (jika tidak, tulis terus, `Nilai pulangan: perihalan`, hanya satu baris).
  - Jika parameter atau nilai pulangan adalah fungsi, gunakan senarai sub-tidak tertib untuk menerangkan parameter dan nilai pulangan (jika tiada, jangan tuliskannya).

Jika eksport adalah pemalar, perkenalkan apa itu, hanya satu baris

- Gunakan bahasa yang ringkas dan profesional dan elakkan menggunakan kata adjektif.
- Semak semula pada dokumen sedia ada, jangan tulis semula sepenuhnya

## templat format

Tulis setiap nama sekali sahaja untuk mengelakkan pertindihan dan cuba nyatakan dengan jelas dalam satu baris. Format rujukan adalah seperti berikut

```
# nama fail

## Nama fungsi (parameter)

Penerangan penggunaan

parameter:
- `xx` : Tujuan
  - parameter
    - `a` : Tujuan
  - Nilai pulangan: perihalan

Nilai pulangan: Penerangan
```