---
name: webc
---

Ikuti prosesnya, buat rencana, dan kembangkan langkah demi langkah untuk menghindari kelalaian

1. Jalankan `./sh/new.js nama komponen jenis proyek` dan buat komponen di bawah direktori `src/webc`
   Jenis proyek dapat berupa `css` (komponen gaya murni), `js` (komponen halaman web)
   Gunakan huruf besar pada huruf pertama nama komponen

2. Baca spesifikasi pengkodean untuk `.agents/doc/code` lalu kembangkan.

   Gaya komponen ditulis dalam `_.styl`. Gaya yang digunakan untuk demonstrasi ditulis dalam `demo/_.styl`. Dilarang menulisnya di `nama komponen/_.styl`.

  Penggunaan `@import` untuk mengimpor gaya dari komponen lain dilarang di `_.styl` dan `demo/_.styl` .

  Ikuti standar pengkodean dan estetika desain [./styl.md](./styl.md).

  Komponen dependen (dan gayanya) diimpor melalui `import "./othercomponents.js"` di `webc/componentname.js`; dependensi untuk demonstrasi diimpor melalui `import "../../othercomponents.js"` di `demo/_.js`.

   Semua komponen (termasuk komponen gaya murni) harus memiliki file skrip `nama komponen.js`. `nama komponen.js` dari komponen gaya murni hanya mengimpor `_.styl` yang sesuai. Untuk komponen dengan logika JS, ikuti proses [webc.js.md](./webc.js.md) untuk mengembangkannya.

3. Tekan [demo.md](./demo.md) demonstrasi pengembangan proses

4. Jalankan `./test.sh` dari direktori root. Perbaiki kesalahan dan alarm, ekstrak fungsi, optimalkan kode, dan hindari duplikasi dan redundansi. Untuk spesifikasi kode, lihat `.agents/doc/code/js.md`

5. Baca [dbg.md](./dbg.md) dan debug komponen sesuai prosesnya

6. Ikuti proses [i18n.md](./i18n.md) untuk menerapkan internasionalisasi komponen dan demonstrasi serta menulis dokumen

7. Uji lagi dan optimalkan kodenya

8. Buka sub-agen dan hubungi `.agents/skills/js_review/SKILL.md` untuk meninjau dan mengoptimalkan kode.

9. Men-debug lagi