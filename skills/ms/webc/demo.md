# Demo

Rujuk `src/BoxX/demo` dan bangunkan demo komponen dalam `src/nama komponen/demo/`

`demo/_.pug`, templat tunjuk cara

Hanya teg komponen minimalis disertakan, tiada halaman lengkap diperlukan dan import gaya dan skrip adalah dilarang. Rangka kerja akan menyuntik secara automatik (seperti `demo/_.styl`, `demo/_.js`).

Jangan tulis tajuk (contohnya, jangan tulis xxx demo), jangan tulis nama komponen, jangan perkenalkan komponen, hanya tulis status kes penggunaan demo (jika tiada status, tulis tiada tajuk)

Elemen akar `_.pug` menggunakan `main.demo.Lg` , yang telah mentakrifkan gaya dalam `demo/_.styl` dan tidak mentakrifkan gaya `main.demo.Lg` itu sendiri.

Bekas komponen paparan hendaklah diselaraskan dengan `main.demo.Lg` dan tidak seharusnya terdapat `margin` dan `padding` antaranya, kerana `main.demo` sendiri telah menetapkan `padding` dan menetapkannya kosong akan diulang.

`demo/_.styl` Jika terdapat hanya satu komponen paparan, bekasnya tidak akan mempunyai bingkai luar dan hanya menetapkan `max-width` (kerana bekas pembentangan akan menambah bingkai luar secara automatik). Jika terdapat berbilang, bekas boleh dipisahkan dengan bingkai luar.

Jangan tulis `img` dalam `demo/_.pug`, gunakan `demo/_.styl` untuk menetapkan imej latar belakang

Jika komponen mempunyai berbilang borang, sila paparkannya mengikut urutan (seperti memuatkan, data kosong, data, gagal, dll.), susun atur menegak fleksibel

`demo/_.styl`: `stylus` gaya halaman tunjuk cara, sila ikut spesifikasi kod dan estetika reka bentuk [./styl.md](./styl.md)

Jangan tulis `@import '../_.styl'` untuk mengimport komponen yang akan ditunjukkan, ia akan disuntik secara automatik

Sila import `@import '../../Btn/_.styl'` dalam `demo/_.styl` dan gunakan `.Btn`

`demo/_.js`: Panggil skrip, format `export default (root) => { ... }`, parameter `root` ialah hos (`document` atau elemen akar bekas kotak pasir)

`D.createElement` dilarang, gunakan `newEl` yang disebut oleh [./js.md](./js.md)

`js` dilarang untuk digunakan dalam `c-t` dan untuk pengantarabangsaan `fLang`

Jika `../_.js` (`../_.js` mahu memaparkan komponen itu sendiri, komponen bergantung yang diperlukan oleh tunjuk cara lain masih perlu diimport) hanya `import` diperlukan dan tiada kandungan khusus diimport, yang boleh ditinggalkan (rangka kerja akan menyuntiknya secara automatik)

`pug` Tidak perlu mengimport `js` dan `styl` , rangka kerja akan menyuntiknya secara automatik