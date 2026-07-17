---
name: webc
---

Ikuti proses, buat rancangan dan bangunkan langkah demi langkah untuk mengelakkan peninggalan

1. Jalankan `./sh/new.js nama komponen jenis projek` dan buat folder komponen di bawah direktori `src`
   Jenis projek boleh menjadi `css` (komponen gaya tulen), `js` (komponen halaman web)
   Gunakan huruf besar pada huruf pertama nama komponen

2. Baca spesifikasi pengekodan untuk `.agents/doc/code` dan kemudian bangunkan.

   Dalam `_.styl`, mula-mula `@import "../component name/_.styl"` untuk mengimport dependensi. Sila ikut piawaian pengekodan dan estetika reka bentuk [./styl.md](./styl.md).

   Ubah suai gaya komponen lain dan sebaliknya mengimportnya secara langsung, gunakan `@import` pada permulaan dan lumpuhkan `extend`.

   Gaya yang digunakan untuk tunjuk cara adalah dilarang daripada ditulis dalam `nama komponen/_.styl` dan ditulis dalam `demo/_.styl`.

   Untuk komponen `js`, bangunkannya mengikut proses [webc.js.md](./webc.js.md) (sila padamkan `nama komponen/_.js` untuk komponen gaya tulen)

3. Tekan [demo.md](./demo.md) demonstrasi pembangunan proses

4. Jalankan `./test.sh` direktori akar. Betulkan ralat dan penggera, ekstrak fungsi, optimumkan kod dan elakkan pertindihan dan redundansi. Untuk spesifikasi kod, lihat `.agents/doc/code/js.md`

5. Baca [dbg.md](./dbg.md) dan nyahpepijat komponen mengikut proses

6. Ikuti proses [i18n.md](./i18n.md) untuk melaksanakan pengantarabangsaan komponen dan demonstrasi serta menulis dokumen

7. Uji sekali lagi dan optimumkan kod

8. Buka sub-ejen dan panggil `.agents/skills/js_review/SKILL.md` untuk menyemak dan mengoptimumkan kod.

9. Menyahpepijat semula