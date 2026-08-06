---
name: webc
---

Tindakake proses kasebut, gawe rencana, lan gawe langkah demi langkah supaya ora ilang

1. Jalanake `./sh/new.js project type jeneng komponen` lan gawe komponen ing direktori `src/webc`
   Jinis proyek bisa dadi `css` (komponen gaya murni), `js` (komponen kaca web)
   Kapitalisasi huruf pisanan saka jeneng komponen

2. Waca spesifikasi coding kanggo `.agents/doc/code` banjur berkembang.

   Gaya komponen ditulis ing `_.styl`. Gaya sing digunakake kanggo demonstrasi ditulis ing `demo/_.styl`. Dilarang nulis ing `jeneng komponen/_.styl`.

  Nggunakake `@import` kanggo ngimpor gaya saka komponen liyane dilarang ing `_.styl` lan `demo/_.styl` .

  Tindakake standar coding lan estetika desain [./styl.md](./styl.md).

  Komponen gumantung (lan gayane) diimpor liwat `import "./other components.js"` ing `webc/componentname.js`; dependensi kanggo demonstrasi diimpor liwat `import "../../other components.js"` ing `demo/_.js`.

   Kabeh komponen (kalebu komponen gaya murni) kudu duwe file skrip `component name.js`. `component name.js` saka komponen gaya murni mung ngimpor `_.styl` sing cocog. Kanggo komponen karo logika JS, tindakake [webc.js.md](./webc.js.md) proses kanggo berkembang.

3. Pencet [demo.md](./demo.md) demonstrasi pangembangan proses

4. Jalanake `./test.sh` direktori root. Ndandani kesalahan lan weker, ekstrak fungsi, ngoptimalake kode, lan ngindhari duplikasi lan redundansi. Kanggo spesifikasi kode, deleng `.agents/doc/code/js.md`

5. Waca [dbg.md](./dbg.md) lan debug komponen miturut proses kasebut

6. Tindakake proses [i18n.md](./i18n.md) kanggo ngetrapake internasionalisasi komponen lan demonstrasi lan nulis dokumen

7. Tes maneh lan ngoptimalake kode kasebut

8. Bukak sub-agen lan nelpon `.agents/skills/js_review/SKILL.md` kanggo mriksa lan ngoptimalake kode kasebut.

9. Debugging maneh