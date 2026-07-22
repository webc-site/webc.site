# Demo

Delengen `src/webc/BoxX/demo` lan gawe demo komponen ing `src/webc/component name/demo/`

`demo/_.pug`, subtemplate demo

Mung tag komponen minimalis sing kalebu, ora ana kaca lengkap sing dibutuhake, lan impor gaya lan skrip dilarang. Framework bakal kanthi otomatis nyuntikake (kayata `demo/_.styl`, `demo/_.js`).

Aja nulis judhul (contone, aja nulis xxx demo), aja nulis jeneng komponen, aja ngenalake komponen, mung nulis status kasus panggunaan demo (yen ora ana status, ora nulis judhul)

Unsur oyod saka `_.pug` nggunakake `main.demo.Lg` , sing wis nemtokake gaya ing `demo/_.styl` lan ora nemtokake gaya `main.demo.Lg` dhewe.

Wadhah komponen tampilan kudu didadekake siji karo `main.demo.Lg`, lan ora ana `margin` lan `padding` ing antarane, amarga `main.demo` dhewe wis nyetel `padding`, lan nyetel kosong bakal dibaleni.

`demo/_.styl` Yen mung ana siji komponen tampilan, wadhahe ora bakal duwe pigura njaba, lan mung nyetel `max-width` (amarga wadhah presentasi bakal nambah pigura njaba kanthi otomatis). Yen ana pirang-pirang, wadhah kasebut bisa dipisahake kanthi pigura njaba.

Aja nulis `img` ing `demo/_.pug`, gunakake `demo/_.styl` kanggo nyetel gambar latar mburi

Yen komponen duwe macem-macem formulir, mangga tampilake kanthi urut (kayata ngemot, data kosong, data, gagal, lsp), tata letak vertikal fleksibel

`demo/_.styl`: `stylus` gaya kaca demo, turuti spesifikasi kode lan estetika desain [./styl.md](./styl.md)

Yen sampeyan ora nulis `@import '../_.styl'` kanggo ngimpor komponen sing bakal dituduhake, bakal disuntik kanthi otomatis; dilarang nggunakake `@import` ing `demo/_.styl` kanggo ngimpor gaya komponen liyane. Yen demo gumantung ing komponen liyane (kayata tombol `.Btn`), mangga ngimpor komponen gumantung liwat `import "../../Btn.js"` ing `demo/_.js`.

`demo/_.js`: Telpon skrip, format `export default (root) => { ... }`, parameter `root` yaiku host (`document` utawa unsur oyod saka wadhah kothak wedhi)

`D.createElement` dilarang, gunakake `newEl` sing disebutake dening [./js.md](./js.md)

`js` dilarang digunakake ing `c-t`, lan kanggo internasionalisasi `fLang`

Yen `../component name.js` (`../component name.js` kanggo nampilake komponen kasebut dhewe, lan komponen gumantung liyane sing dibutuhake dening demo isih kudu diimpor), mung `import` sing dibutuhake, lan ora ana konten tartamtu sing diimpor, sing bisa diilangi kanthi otomatis (framework)

`pug` Ora perlu ngimpor `js` lan `styl` , framework bakal nyuntik kanthi otomatis