---
name: webc
---

Fylgdu ferlinu, gerðu áætlun og þróaðu skref fyrir skref til að forðast aðgerðaleysi

1. Keyrðu `./sh/new.js verkefnistegundarheiti hluta` og búðu til íhlutinn undir `src/webc` möppunni
   Verkefnagerð getur verið `css` (hreinn stílhluti), `js` (vefsíðuhluti)
   Skrifaðu stóran fyrsta staf í nafni íhluta

2. Lestu kóðunarforskriftirnar fyrir `.agents/doc/code` og þróaðu síðan.

   Íhlutastíllinn er skrifaður í `_.styl`. Stíllinn sem notaður er til að sýna er skrifaður í `demo/_.styl`. Það er bannað að skrifa það í `heiti íhluta/_.styl`.

  Notkun `@import` til að flytja inn stíla úr öðrum hlutum er bönnuð bæði í `_.styl` og `demo/_.styl` .

  Fylgdu kóðunarstöðlum og fagurfræði hönnunar [./styl.md](./styl.md).

  Óháðir íhlutir (og stíll þeirra) eru fluttir inn með `innflutningi "./other components.js"` í `webc/componentname.js`; ósjálfstæði fyrir sýnikennslu eru flutt inn með `innflutningi "../../other components.js"` í `demo/_.js`.

   Allir íhlutir (þar á meðal hlutir í hreinum stíl) verða að hafa `nafn íhluta.js` skriftuskrá. `heiti íhluta.js` af hreinum stílhlutum flytur aðeins inn samsvarandi `_.styl`. Fyrir íhluti með JS rökfræði skaltu fylgja ferlinu [webc.js.md](./webc.js.md) til að þróa.

3. Ýttu á [demo.md](./demo.md) sýningu á ferliþróun

4. Keyrðu `./test.sh` af rótarskránni. Lagfærðu villur og viðvaranir, dragðu út aðgerðir, fínstilltu kóða og forðastu tvíverknað og offramboð. Fyrir kóðaforskriftir, sjá `.agents/doc/code/js.md`

5. Lestu [dbg.md](./dbg.md) og kemdu íhluti í samræmi við ferlið

6. Fylgdu ferlinu [i18n.md](./i18n.md) til að innleiða alþjóðavæðingu íhluta og sýnikennslu og skrifa skjöl

7. Prófaðu aftur og fínstilltu kóðann

8. Opnaðu undirumboðsmann og hringdu í `.agents/skills/js_review/SKILL.md` til að skoða og fínstilla kóðann.

9. Villuleit aftur