---
name: jsdoc
description: dokumen src/js dibuat secara otomatis
---

## Jalankan langkah

1. Jalankan `./sh/jsDoc.js` untuk melihat fungsi yang dokumentasinya hilang (jika tidak ada keluaran, tidak perlu menambahkannya).
2. Berdasarkan daftar file keluaran, baca dokumen dan kode yang ada satu per satu dan lengkapi (proses secara berurutan dan pecahkan satu per satu).

## Persyaratan dokumentasi

Jika ekspor adalah sebuah fungsi, tulislah
- Parameter dan nilai kembalian:
  - Hanya tulis deskripsi yang sesuai jika ada parameter atau nilai kembalian, jika tidak, jangan tulis.
  - Parameter diperkenalkan menggunakan daftar tidak berurutan.
  - Jika nilai yang dikembalikan adalah array, gunakan daftar tidak berurutan untuk mendeskripsikannya satu per satu (jika tidak, tulis langsung, `Nilai yang dikembalikan: deskripsi`, cukup satu baris).
  - Jika parameter atau nilai kembalian adalah fungsi, gunakan daftar sub-tidak berurutan untuk mendeskripsikan parameter dan nilai kembalian (jika tidak ada, jangan tulis).

Jika ekspornya konstan, perkenalkan apa adanya, satu baris saja

- Gunakan bahasa yang ringkas dan profesional dan hindari penggunaan kata sifat.
- Revisi dokumen yang sudah ada, jangan menulis ulang seluruhnya

## templat format

Tulis setiap nama hanya satu kali untuk menghindari duplikasi dan cobalah untuk mengungkapkannya dengan jelas dalam satu baris. Format referensinya adalah sebagai berikut

```
# nama file

## Nama fungsi (parameter)

Deskripsi penggunaan

parameter:
- `xx` : Tujuan
  - parameter
    - `a` : Tujuan
  - Nilai pengembalian: deskripsi

Nilai pengembalian: Deskripsi
```