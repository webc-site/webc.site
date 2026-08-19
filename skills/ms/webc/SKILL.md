---
name: webc
---

Ikuti proses, buat rancangan dan bangunkan langkah demi langkah untuk mengelakkan peninggalan

1. Jalankan `./sh/new.js nama komponen jenis projek` dan buat komponen di bawah direktori `src/webc`
   Jenis projek boleh menjadi `css` (komponen gaya tulen), `js` (komponen halaman web)
   Gunakan huruf besar pada huruf pertama nama komponen

2. Baca spesifikasi pengekodan untuk `.agents/doc/code` dan kemudian bangunkan.

   Gaya komponen ditulis dalam `_.styl`. Gaya yang digunakan untuk tunjuk cara ditulis dalam `demo/_.styl`. Dilarang menulisnya dalam `nama komponen/_.styl`.

  Menggunakan `@import` untuk mengimport gaya daripada komponen lain adalah dilarang dalam kedua-dua `_.styl` dan `demo/_.styl` .

  Ikuti piawaian pengekodan dan estetika reka bentuk [./styl.md](./styl.md).

  Komponen bergantung (dan gayanya) diimport melalui `import "./other components.js"` dalam `webc/componentname.js`; kebergantungan untuk demonstrasi diimport melalui `import "../../other components.js"` dalam `demo/_.js`.

   Semua komponen (termasuk komponen gaya tulen) mesti mempunyai fail skrip `nama komponen.js`. `nama komponen.js` komponen gaya tulen hanya mengimport `_.styl` yang sepadan. Untuk komponen dengan logik JS, ikuti proses [webc.js.md](./webc.js.md) untuk membangunkan.

3. Tekan [demo.md](./demo.md) demonstrasi pembangunan proses

4. Jalankan `./test.sh` direktori akar. Betulkan ralat dan penggera, ekstrak fungsi, optimumkan kod dan elakkan pertindihan dan redundansi. Untuk spesifikasi kod, lihat `.agents/doc/code/js.md`

5. Baca [dbg.md](./dbg.md) dan nyahpepijat komponen mengikut proses

6. Ikuti proses [i18n.md](./i18n.md) untuk melaksanakan pengantarabangsaan komponen dan demonstrasi serta menulis dokumen

7. Uji sekali lagi dan optimumkan kod

8. Buka sub-ejen dan panggil `.agents/skills/js_review/SKILL.md` untuk menyemak dan mengoptimumkan kod.

9. Menyahpepijat semula