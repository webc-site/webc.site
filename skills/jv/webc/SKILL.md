---
name: webc
---

Tindakake proses kasebut, gawe rencana, lan gawe langkah demi langkah supaya ora ilang

1. Jalanake `./sh/new.js project type jeneng komponen` lan gawe folder komponen ing direktori `src`
   Jinis proyek bisa dadi `css` (komponen gaya murni), `js` (komponen kaca web)
   Kapitalisasi huruf pisanan saka jeneng komponen

2. Waca spesifikasi coding kanggo `.agents/doc/code` banjur berkembang.

   Ing `_.styl`, pisanan `@import "../component name/_.styl"` kanggo ngimpor dependensi. Mangga tindakake standar coding lan estetika desain [./styl.md](./styl.md).

   Ngowahi gaya komponen liyane lan ngimpor langsung, gunakake `@import` ing wiwitan lan mateni `extend`.

   Gaya sing digunakake kanggo demonstrasi dilarang ditulis ing `jeneng komponen/_.styl` lan ditulis ing `demo/_.styl`.

   Kanggo komponen `js`, kembangake miturut proses [webc.js.md](./webc.js.md) (monggo mbusak `jeneng komponen/_.js` kanggo komponen gaya murni)

3. Pencet [demo.md](./demo.md) demonstrasi pangembangan proses

4. Jalanake `./test.sh` direktori root. Ndandani kesalahan lan weker, ekstrak fungsi, ngoptimalake kode, lan ngindhari duplikasi lan redundansi. Kanggo spesifikasi kode, deleng `.agents/doc/code/js.md`

5. Waca [dbg.md](./dbg.md) lan debug komponen miturut proses kasebut

6. Tindakake proses [i18n.md](./i18n.md) kanggo ngetrapake internasionalisasi komponen lan demonstrasi lan nulis dokumen

7. Tes maneh lan ngoptimalake kode kasebut

8. Bukak sub-agen lan nelpon `.agents/skills/js_review/SKILL.md` kanggo mriksa lan ngoptimalake kode kasebut.

9. Debugging maneh