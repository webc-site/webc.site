# Demo

Rujuk `src/webc/BoxX/demo` dan bangunkan demo komponen dalam `src/webc/component name/demo/`

`demo/_.pug`, templat tunjuk cara

Hanya teg komponen minimalis disertakan, tiada halaman lengkap diperlukan dan import gaya dan skrip adalah dilarang. Rangka kerja akan menyuntik secara automatik (seperti `demo/_.styl`, `demo/_.js`).

Jangan tulis tajuk (contohnya, jangan tulis xxx demo), jangan tulis nama komponen, jangan perkenalkan komponen, hanya tulis status kes penggunaan demo (jika tiada status, tulis tiada tajuk)

Elemen akar `_.pug` menggunakan `main.demo.Lg` , yang telah mentakrifkan gaya dalam `demo/_.styl` dan tidak mentakrifkan gaya `main.demo.Lg` itu sendiri.

Bekas komponen paparan hendaklah diselaraskan dengan `main.demo.Lg` dan tidak seharusnya terdapat `margin` dan `padding` antaranya, kerana `main.demo` sendiri telah menetapkan `padding` dan menetapkannya kosong akan diulang.

`demo/_.styl` Jika terdapat hanya satu komponen paparan, bekasnya tidak akan mempunyai bingkai luar dan hanya menetapkan `max-width` (kerana bekas pembentangan akan menambah bingkai luar secara automatik). Jika terdapat berbilang, bekas boleh dipisahkan dengan bingkai luar.

Jangan tulis `img` dalam `demo/_.pug`, gunakan `demo/_.styl` untuk menetapkan imej latar belakang

Jika komponen mempunyai berbilang borang, sila paparkannya mengikut urutan (seperti memuatkan, data kosong, data, gagal, dll.), susun atur menegak fleksibel

`demo/_.styl`: `stylus` gaya halaman tunjuk cara, sila ikut spesifikasi kod dan estetika reka bentuk [./styl.md](./styl.md)

Jika anda tidak menulis `@import '../_.styl'` untuk mengimport komponen yang akan ditunjukkan, ia akan disuntik secara automatik; adalah dilarang untuk menggunakan `@import` dalam `demo/_.styl` untuk mengimport gaya komponen lain. Jika demo bergantung pada komponen lain (seperti butang `.Btn`), sila import komponen bergantung melalui `import "../../Btn.js"` dalam `demo/_.js`.

`demo/_.js`: Panggil skrip, format `export default (root) => { ... }`, parameter `root` ialah hos (`document` atau elemen akar bekas kotak pasir)

`D.createElement` dilarang, gunakan `newEl` yang disebut oleh [./js.md](./js.md)

`js` dilarang untuk digunakan dalam `c-t` dan untuk pengantarabangsaan `fLang`

Jika `../component name.js` (`../component name.js` adalah untuk memaparkan komponen itu sendiri dan komponen bergantung lain yang diperlukan oleh demo masih perlu diimport), hanya `import` diperlukan dan tiada kandungan khusus diimport, yang boleh ditinggalkan secara automatik (rangka kerjanya)

`pug` Tidak perlu mengimport `js` dan `styl` , rangka kerja akan menyuntiknya secara automatik