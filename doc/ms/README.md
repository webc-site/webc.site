# WebC.site

## Apa ini?

### Ini ialah perpustakaan komponen web asli

Dibangunkan berdasarkan [komponen web](https://developer.mozilla.org/docs/Web/API/Web_components), ia bebas masa jalan dan sesuai untuk semua rangka kerja.

Sangat dioptimumkan untuk saiz (satu persepuluh saiz perpustakaan popular yang serupa).

Menyokong 75 bahasa. Anda boleh mengimport terus js dan css untuk kegunaan dalam talian, atau menambah komponen pada projek anda seperti yang diperlukan untuk pembangunan sekunder.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Ini ialah rangka kerja pembangunan perpustakaan komponen

Ini ialah versi blog statik [buku cerita](https://storybook.js.org).

Membina perpustakaan komponen boleh meningkatkan kecekapan pembangunan dalaman syarikat dan membina imej jenama dalam kalangan teknikal.

Berdasarkan [webc.site](https://github.com/webc-site/webc.site), pasukan boleh membuat pustaka komponen mereka sendiri dengan mudah dan menerbitkannya ke [halaman github](https://pages.github.com), [halaman cloudflare](https://pages.cloudflare.com), dll. Komponen yang diterbitkan boleh dinyahpepijat dalam talian pada [codepen.io](https://codepen.io) dan [jsfiddle](https://jsfiddle.net).

Pada masa yang sama, rangka kerja terjemahan terbina dalam dapat merealisasikan pengantarabangsaan komponen dan dokumen dengan cepat, supaya khalayak produk anda tidak lagi terikat dengan bahasa.

### Ini adalah paradigma baharu pembangunan bahagian hadapan untuk era kecerdasan buatan

Rangka kerja terbina dalam `.agents/skills`, membenarkan kecerdasan buatan membantu anda membangunkan komponen baharu dengan satu klik mengikut amalan terbaik.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Biarkan kod bahagian hadapan berubah daripada gunung sampah yang tidak mampan pengaturcaraan atmosfera kepada bahagian standard yang boleh dikekalkan dan berkembang secara berulang dalam jangka panjang.

Memandangkan ciri-ciri pembangunan berbantukan kecerdasan buatan, kami mencadangkan dan mereka bentuk paradigma pembangunan bahagian hadapan baharu:

1. **Semuanya adalah komponen web**
2. **Komponen mestilah bebas daripada pautan data hujung belakang, dan antara muka data didedahkan sebagai fungsi panggil balik**

Dengan cara ini, kecerdasan buatan boleh menjana data palsu dan memaparkan keadaan komponen yang berbeza pada halaman demo.

Pengasingan pembangunan komponen dan antara muka data, digabungkan dengan [rangka kerja komponen webc.site](https://github.com/webc-site/webc.site) Satu lagi ciri utama:

**Setiap komponen boleh memulakan pelayan pembangunan secara bebas dan membangun serta nyahpepijat pada halaman demo**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Ini mengurangkan pautan bahagian hadapan untuk pembangunan dan penyahpepijatan setiap komponen kepada `0`.

Dengan cara ini, alatan pembangunan berbantukan kecerdasan buatan ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) dsb.), anda boleh menikmati pembangunan automatik sepenuhnya dan tiada lagi faktor penyemak imbas terbuka yang disekat (menyahpenyahpenyahsemula) status, penghalaan laluan, dsb.).

Jika anda ingin mengawal kecerdasan buatan dan mengurangkan kos serta meningkatkan kecekapan, anda memerlukan paradigma baharu yang meminimumkan pembangunan dan persekitaran penyahpepijatan bagi setiap komponen.

---

# Saya belum mula menulis TODO lagi

### Pustaka komponen web

#### Pengoptimuman saiz muktamad

Contohnya, untuk komponen bar skrol maya, bandingkan saiz skrip [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) popular dan gaya selepas `gz`, seperti yang ditunjukkan dalam jadual berikut:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

Komponen bar skrol maya `webc.site` hanyalah `10%` `OverlayScrollbars`.

#### Bebas masa jalanan

Dibina pada piawaian [Komponen Web](https://developer.mozilla.org/docs/Web/API/Web_components), perpustakaan komponen webc.site secara semula jadi adalah agnostik masa jalan. Sama ada anda menggunakan React, Vue, Angular, Svelte atau projek HTML/JS tulen tradisional, semua komponen boleh berjalan terus dalam penyemak imbas seperti teg HTML asli, tanpa memerlukan pembungkusan sekunder untuk rangka kerja tertentu.

##### Perbandingan dengan shadcn

[shadcn/ui](https://ui.shadcn.com) menggunakan mod pengedaran kod, yang memerlukan anda menyalin kod komponen terus ke dalam projek anda sendiri. Ia terikat rapat dengan ekosistem React dan rantai alat pembinaan khusus (seperti Tailwind CSS), dan tidak boleh digunakan merentas rangka kerja. Ia juga mempunyai keperluan tertentu untuk konfigurasi kejuruteraan projek.

Dan komponen `webc.site`:
- **Rangka kerja silang universal**: Tulis sekali dan boleh terus diperkenalkan dan dijalankan dalam mana-mana rangka kerja bahagian hadapan (walaupun persekitaran tanpa rangka kerja).
- **Pergantungan sifar persekitaran**: Tiada alat pembungkusan khusus atau prapemproses CSS diperlukan, hanya import fail statik yang disusun dan ia boleh digunakan di luar kotak.

## Pembangunan automatik dan penyahpepijatan

### Pembangunan tempatan dan penyahpepijatan

Setiap komponen halaman web menyokong memulakan pelayan pembangunan secara bebas, menyediakan persekitaran pembangunan dan penyahpepijatan yang minimum:

- **Buat komponen baharu**: Jalankan `./sh/new.js [css|js] [nama komponen]` untuk menjana rangka pembangunan komponen dengan cepat (termasuk halaman demo dan konfigurasi pengantarabangsaan).
- **Penyahpepijatan bebas**: Jalankan `./dev.js [nama komponen]` (atau jalankan `./dev.js` terus) untuk memulakan pelayan pembangunan Vite dan secara automatik membuka halaman demo komponen dalam penyemak imbas. Menyokong kemas kini panas komponen (HMR). Oleh kerana pautan pembangunan dan data dipisahkan, tiada pautan hadapan pembangunan sifar, yang sangat sesuai untuk AI (seperti Kod Claude, Antigraviti Google, dll.) untuk membantu dalam pembangunan automatik sepenuhnya dan penyahpepijatan penyemak imbas.

### Terbitkan perpustakaan komponen

#### webc dist

Proses pembungkusan dan penerbitan adalah sangat automatik:
- **Pembungkusan sumber statik**: Menjalankan `./sh/dist.js` (iaitu, melaksanakan tugas `webc dist`) secara automatik boleh mengimbas semua komponen halaman web di bawah `src/`, menyusun, memampatkan dan mengeluarkannya ke direktori `dist/`. Direktori ini mengandungi fail JS/CSS untuk pengedaran pengeluaran, tapak tunjuk cara yang sedia untuk digunakan ke Halaman GitHub atau Halaman Cloudflare dan fail penghalaan `_redirects` dan `404.html` secara automatik.
- **NPM Publish**: Jalankan `./sh/npmDist.js`, skrip akan mengendalikan kebergantungan komponen secara automatik, menambah nombor versi pakej dan melaksanakan `npm publish` dengan satu klik selepas pembungkusan selesai untuk menerbitkan pustaka komponen kepada NPM.

### Platform ini bertanggungjawab untuk terjemahan

Rangka kerja ini mempunyai proses terjemahan automatik terbina dalam:
1. Konfigurasikan peraturan terjemahan (seperti bahasa sumber, bahasa sasaran dan direktori yang hendak diterjemahkan) dalam `tran.yml` dalam direktori akar projek.
2. Gunakan ruang letak dalam komponen atau dokumen tanpa perlu mengekodkan berbilang bahasa dalam kod anda.
3. Jalankan `./sh/tran.js`, dan enjin terjemahan akan mengekstrak teks secara automatik dan memanggil perkhidmatan terjemahan WebC untuk diproses, secara automatik menjana entri terjemahan YAML dan dokumentasi README dalam pelbagai bahasa.

### pembolehubah persekitaran

Apabila melakukan terjemahan automatik, anda perlu mengkonfigurasi pembolehubah persekitaran berikut untuk membenarkan akses kepada API terjemahan:

- **`WEBC_SITE_TOKEN`** (atau **`WEBC_TOKEN`**): Kunci pengesahan yang digunakan untuk mengakses `webc.site` API Terjemahan Automatik. Boleh disuntik sebagai pembolehubah persekitaran atau ditulis `token` dalam fail konfigurasi `~/.config/webc.site.yml` dalam direktori rumah pengguna tempatan.