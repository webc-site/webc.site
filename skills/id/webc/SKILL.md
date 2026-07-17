---
name: webc
---

Ikuti prosesnya, buat rencana, dan kembangkan langkah demi langkah untuk menghindari kelalaian

1. Jalankan `./sh/new.js nama komponen jenis proyek` dan buat folder komponen di bawah direktori `src`
   Jenis proyek dapat berupa `css` (komponen gaya murni), `js` (komponen halaman web)
   Gunakan huruf besar pada huruf pertama nama komponen

2. Baca spesifikasi pengkodean untuk `.agents/doc/code` lalu kembangkan.

   Di `_.styl`, `@import "../component name/_.styl"` pertama yang akan mengimpor dependensi. Harap ikuti standar pengkodean dan estetika desain [./styl.md](./styl.md).

   Ubah gaya komponen lain dan impor secara langsung, gunakan `@import` di awal dan nonaktifkan `extend`.

   Style yang digunakan untuk demonstrasi dilarang ditulis dalam `nama komponen/_.styl` dan ditulis dalam `demo/_.styl`.

   Untuk komponen `js`, kembangkan sesuai dengan proses [webc.js.md](./webc.js.md) (harap hapus `nama komponen/_.js` untuk komponen gaya murni)

3. Tekan [demo.md](./demo.md) demonstrasi pengembangan proses

4. Jalankan `./test.sh` dari direktori root. Perbaiki kesalahan dan alarm, ekstrak fungsi, optimalkan kode, dan hindari duplikasi dan redundansi. Untuk spesifikasi kode, lihat `.agents/doc/code/js.md`

5. Baca [dbg.md](./dbg.md) dan debug komponen sesuai prosesnya

6. Ikuti proses [i18n.md](./i18n.md) untuk menerapkan internasionalisasi komponen dan demonstrasi serta menulis dokumen

7. Uji lagi dan optimalkan kodenya

8. Buka sub-agen dan hubungi `.agents/skills/js_review/SKILL.md` untuk meninjau dan mengoptimalkan kode.

9. Men-debug lagi