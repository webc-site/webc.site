# Demo

Lihat `src/BoxX/demo` dan kembangkan demo komponen di `src/component name/demo/`

`demo/_.pug`, subtemplat demo

Hanya tag komponen minimalis yang disertakan, tidak diperlukan halaman lengkap, dan impor gaya dan skrip dilarang. Kerangka kerja akan secara otomatis menyuntikkan (seperti `demo/_.styl`, `demo/_.js`).

Jangan tulis judul (misalnya jangan tulis demo xxx), jangan tulis nama komponen, jangan masukkan komponen, tulis saja status use case demo (jika tidak ada status, tulis tanpa judul)

Elemen root `_.pug` menggunakan `main.demo.Lg` , yang telah mendefinisikan gaya dalam `demo/_.styl` dan tidak mendefinisikan gaya `main.demo.Lg` itu sendiri.

Wadah komponen tampilan harus sejajar dengan `main.demo.Lg`, dan tidak boleh ada `margin` dan `padding` di antara keduanya, karena `main.demo` sendiri telah menyetel `padding`, dan menyetelnya kosong akan diulangi.

`demo/_.styl` Jika hanya ada satu komponen tampilan, wadahnya tidak akan memiliki bingkai luar, dan hanya mengatur `max-width` (karena wadah presentasi akan secara otomatis menambahkan bingkai luar). Jika ada beberapa, wadahnya bisa dipisahkan dengan bingkai luar.

Jangan menulis `img` di `demo/_.pug`, gunakan `demo/_.styl` untuk mengatur gambar latar belakang

Jika komponen memiliki beberapa formulir, silakan tampilkan secara berurutan (seperti memuat, data kosong, data, gagal, dll.), tata letak vertikal fleksibel

`demo/_.styl`: `stylus` gaya halaman demo, harap ikuti spesifikasi kode dan estetika desain [./styl.md](./styl.md)

Jangan menulis `@import '../_.styl'` untuk mengimpor komponen yang akan didemonstrasikan, komponen tersebut akan disuntikkan secara otomatis

Silakan impor `@import '../../Btn/_.styl'` di `demo/_.styl` dan gunakan `.Btn`

`demo/_.js`: Panggil skrip, format `export default (root) => { ... }`, parameter `root` adalah host (`document` atau elemen root dari wadah sandbox)

`D.createElement` dilarang, gunakan `newEl` yang disebutkan oleh [./js.md](./js.md)

`js` dilarang untuk digunakan di `c-t`, dan untuk internasionalisasi `fLang`

Jika `../_.js` (`../_.js` ingin menampilkan komponen itu sendiri, komponen dependen yang diperlukan oleh demo lain masih perlu diimpor) hanya `import` yang diperlukan, dan tidak ada konten spesifik yang diimpor, yang dapat dihilangkan (kerangka kerja akan secara otomatis menyuntikkannya)

`pug` Tidak perlu mengimpor `js` dan `styl` , kerangka kerja akan secara otomatis menyuntikkannya