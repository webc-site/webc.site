# WebC.site

## Apa ini?

### Ini adalah perpustakaan komponen web asli

Dikembangkan berdasarkan [komponen web](https://developer.mozilla.org/docs/Web/API/Web_components), ini tidak bergantung pada waktu proses dan cocok untuk semua kerangka kerja.

Sangat dioptimalkan untuk ukuran (sepersepuluh ukuran perpustakaan populer serupa).

Mendukung 75 bahasa. Anda dapat langsung mengimpor js dan css untuk penggunaan online, atau menambahkan komponen ke proyek Anda sesuai kebutuhan untuk pengembangan sekunder.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Ini adalah kerangka pengembangan perpustakaan komponen

Ini adalah versi blog statis dari [buku cerita](https://storybook.js.org).

Membangun perpustakaan komponen dapat meningkatkan efisiensi pengembangan internal perusahaan dan membangun citra merek di kalangan teknis.

Berdasarkan [webc.site](https://github.com/webc-site/webc.site), tim dapat dengan mudah membuat pustaka komponen mereka sendiri dan mempublikasikannya ke [halaman github](https://pages.github.com), [halaman cloudflare](https://pages.cloudflare.com), dll. Komponen yang dipublikasikan dapat di-debug secara online di [codepen.io](https://codepen.io) dan [jsfiddle](https://jsfiddle.net).

Pada saat yang sama, kerangka terjemahan bawaan dapat dengan cepat mewujudkan internasionalisasi komponen dan dokumen, sehingga audiens produk Anda tidak lagi terikat oleh bahasa.

### Ini adalah paradigma baru pengembangan front-end di era kecerdasan buatan

Kerangka kerja ini terintegrasi `.agents/skills`, memungkinkan kecerdasan buatan membantu Anda mengembangkan komponen baru dengan satu klik sesuai dengan praktik terbaik.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Biarkan kode front-end berubah dari tumpukan sampah pemrograman atmosfer yang tidak berkelanjutan menjadi bagian standar yang dapat dipertahankan dan dikembangkan secara berulang dalam jangka panjang.

Mengingat karakteristik pembangunan yang dibantu kecerdasan buatan, kami mengusulkan dan merancang paradigma pembangunan front-end yang baru:

1. **Semuanya adalah komponen web**
2. **Komponen harus independen dari tautan data back-end, dan antarmuka data diekspos sebagai fungsi panggilan balik**

Dengan cara ini, kecerdasan buatan dapat menghasilkan data palsu dan menampilkan berbagai status komponen di halaman demo.

Pemisahan pengembangan komponen dan antarmuka data, dikombinasikan dengan [kerangka komponen situs webc.site](https://github.com/webc-site/webc.site) Fitur utama lainnya:

**Setiap komponen dapat memulai server pengembangan secara mandiri dan mengembangkan serta melakukan debug di halaman demo**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Hal ini mengurangi link front-end untuk pengembangan dan debugging setiap komponen menjadi `0`.

Dengan cara ini, alat pengembangan yang dibantu kecerdasan buatan ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) dll.), Anda dapat menikmati pengembangan yang sepenuhnya otomatis, proses debug browser terbuka, dan tidak lagi diblokir oleh berbagai faktor yang berantakan (data backend, status login, perutean jalur, dll.).

Jika Anda ingin mengontrol kecerdasan buatan dan mengurangi biaya serta meningkatkan efisiensi, Anda memerlukan paradigma baru yang meminimalkan lingkungan pengembangan dan debugging setiap komponen.

---

# Saya belum mulai menulis TODO

### Perpustakaan komponen web

#### Pengoptimalan ukuran tertinggi

Misalnya, untuk komponen bilah gulir virtual, bandingkan ukuran skrip dan gaya [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) yang populer setelah `gz`, seperti yang diperlihatkan dalam tabel berikut:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880B    |

Komponen bilah gulir virtual `webc.site` hanya `OverlayScrollbars` `10%`.

#### Waktu proses independen

Dibangun berdasarkan standar [Komponen Web](https://developer.mozilla.org/docs/Web/API/Web_components), pustaka komponen webc.site secara alami bersifat agnostik waktu proses. Baik Anda menggunakan React, Vue, Angular, Svelte, atau proyek HTML/JS murni tradisional, semua komponen dapat dijalankan langsung di browser seperti tag HTML asli, tanpa memerlukan pengemasan sekunder untuk kerangka kerja tertentu.

##### Perbandingan dengan shadcn

[shadcn/ui](https://ui.shadcn.com) mengadopsi mode distribusi kode, yang mengharuskan Anda menyalin kode komponen langsung ke proyek Anda sendiri. Ini terikat erat dengan ekosistem React dan rantai alat konstruksi tertentu (seperti Tailwind CSS), dan tidak dapat digunakan di seluruh kerangka kerja. Ini juga memiliki persyaratan tertentu untuk konfigurasi rekayasa proyek.

Dan komponen `webc.site`:
- **Universal lintas-kerangka kerja**: Tulis sekali dan dapat langsung diperkenalkan dan dijalankan di kerangka kerja front-end apa pun (bahkan di lingkungan bebas kerangka kerja).
- **Ketergantungan lingkungan nol**: Tidak diperlukan alat pengemasan khusus atau praprosesor CSS, cukup impor file statis yang telah dikompilasi dan file tersebut dapat langsung digunakan.

## Pengembangan dan debugging otomatis

### Pengembangan dan debugging lokal

Setiap komponen halaman web mendukung permulaan server pengembangan secara independen, menyediakan lingkungan pengembangan dan debugging minimal:

- **Buat komponen baru**: Jalankan `./sh/new.js [css|js] [nama komponen]` untuk membuat kerangka pengembangan komponen dengan cepat (termasuk halaman demo dan konfigurasi internasionalisasi).
- **Debug independen**: Jalankan `./dev.js [nama komponen]` (atau jalankan `./dev.js` secara langsung) untuk memulai server pengembangan Vite dan secara otomatis membuka halaman demo komponen di browser. Mendukung pembaruan komponen panas (HMR). Karena pengembangan dan tautan data dipisahkan, tidak ada tautan front-end pengembangan, yang sangat cocok untuk AI (seperti Claude Code, Google Antigravity, dll.) untuk membantu pengembangan otomatis dan debugging browser.

### Publikasikan perpustakaan komponen

#### webc dist

Proses pengemasan dan penerbitan sangat otomatis:
- **Paket sumber daya statis**: Menjalankan `./sh/dist.js` (yaitu, menjalankan tugas `webc dist`) dapat secara otomatis memindai semua komponen halaman web di bawah `src/`, mengkompilasi, mengompres, dan mengeluarkannya ke direktori `dist/`. Direktori ini berisi file JS/CSS untuk distribusi produksi, situs demo yang siap diterapkan ke Halaman GitHub atau Halaman Cloudflare, dan file perutean `_redirects` dan `404.html` yang dihasilkan secara otomatis.
- **NPM Publish**: Jalankan `./sh/npmDist.js`, skrip akan secara otomatis menangani dependensi komponen, menambah nomor versi paket, dan mengeksekusi `npm publish` dengan satu klik setelah pengemasan selesai untuk mempublikasikan pustaka komponen ke NPM.

### Platform ini bertanggung jawab atas penerjemahan

Kerangka kerja ini memiliki proses terjemahan otomatis bawaan:
1. Konfigurasikan aturan terjemahan (seperti bahasa sumber, bahasa target, dan direktori yang akan diterjemahkan) di `tran.yml` di direktori root proyek.
2. Gunakan placeholder dalam komponen atau dokumen tanpa harus melakukan hardcode pada beberapa bahasa dalam kode Anda.
3. Jalankan `./sh/tran.js`, dan mesin terjemahan akan secara otomatis mengekstrak teks dan memanggil layanan terjemahan WebC untuk diproses, secara otomatis menghasilkan entri terjemahan YAML dan dokumentasi README dalam berbagai bahasa.

### variabel lingkungan

Saat melakukan terjemahan otomatis, Anda perlu mengonfigurasi variabel lingkungan berikut untuk memberi otorisasi akses ke API terjemahan:

- **`WEBC_SITE_TOKEN`** (atau **`WEBC_TOKEN`**): Kunci autentikasi yang digunakan untuk mengakses `webc.site` API Terjemahan Otomatis. Dapat dimasukkan sebagai variabel lingkungan atau ditulis `token` di file konfigurasi `~/.config/webc.site.yml` di direktori home pengguna lokal.