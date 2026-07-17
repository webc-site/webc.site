# Demo

Delengen `src/BoxX/demo` lan gawe demo komponen ing `src/component name/demo/`

`demo/_.pug`, subtemplate demo

Mung tag komponen minimalis sing kalebu, ora ana kaca lengkap sing dibutuhake, lan impor gaya lan skrip dilarang. Framework bakal kanthi otomatis nyuntikake (kayata `demo/_.styl`, `demo/_.js`).

Aja nulis judhul (contone, aja nulis xxx demo), aja nulis jeneng komponen, aja ngenalake komponen, mung nulis status kasus panggunaan demo (yen ora ana status, ora nulis judhul)

Unsur oyod saka `_.pug` nggunakake `main.demo.Lg` , sing wis nemtokake gaya ing `demo/_.styl` lan ora nemtokake gaya `main.demo.Lg` dhewe.

Wadhah komponen tampilan kudu didadekake siji karo `main.demo.Lg`, lan ora ana `margin` lan `padding` ing antarane, amarga `main.demo` dhewe wis nyetel `padding`, lan nyetel kosong bakal dibaleni.

`demo/_.styl` Yen mung ana siji komponen tampilan, wadhahe ora bakal duwe pigura njaba, lan mung nyetel `max-width` (amarga wadhah presentasi bakal nambah pigura njaba kanthi otomatis). Yen ana pirang-pirang, wadhah kasebut bisa dipisahake kanthi pigura njaba.

Aja nulis `img` ing `demo/_.pug`, gunakake `demo/_.styl` kanggo nyetel gambar latar mburi

Yen komponen duwe macem-macem formulir, mangga tampilake kanthi urut (kayata ngemot, data kosong, data, gagal, lsp), tata letak vertikal fleksibel

`demo/_.styl`: `stylus` gaya kaca demo, turuti spesifikasi kode lan estetika desain [./styl.md](./styl.md)

Aja nulis `@import '../_.styl'` kanggo ngimpor komponen sing bakal dituduhake, bakal disuntik kanthi otomatis

Mangga ngimpor `@import '../../Btn/_.styl'` ing `demo/_.styl` lan gunakake `.Btn`

`demo/_.js`: Telpon skrip, format `export default (root) => { ... }`, parameter `root` yaiku host (`document` utawa unsur oyod saka wadhah kothak wedhi)

`D.createElement` dilarang, gunakake `newEl` sing disebutake dening [./js.md](./js.md)

`js` dilarang digunakake ing `c-t`, lan kanggo internasionalisasi `fLang`

Yen `../_.js` (`../_.js` nampilake komponen kasebut dhewe, komponen gumantung sing dibutuhake dening demo liyane isih kudu diimpor) mung `import` sing dibutuhake, lan ora ana konten khusus sing diimpor, sing bisa diilangi (kerangka bakal nyuntikake kanthi otomatis)

`pug` Ora perlu ngimpor `js` lan `styl` , framework bakal nyuntik kanthi otomatis