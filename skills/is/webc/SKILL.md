---
name: webc
---

Fylgdu ferlinu, gerðu áætlun og þróaðu skref fyrir skref til að forðast aðgerðaleysi

1. Keyrðu `./sh/new.js verkefnisgerð íhlutaheiti` og búðu til íhlutamöppu undir `src` möppunni
   Verkefnagerð getur verið `css` (hreinn stílhluti), `js` (vefsíðuhluti)
   Skrifaðu stóran fyrsta staf í nafni íhluta

2. Lestu kóðunarforskriftirnar fyrir `.agents/doc/code` og þróaðu síðan.

   Í `_.styl`, fyrst `@import "../component name/_.styl"` til að flytja inn ósjálfstæði. Vinsamlegast fylgdu kóðunarstöðlum og fagurfræði hönnunar [./styl.md](./styl.md).

   Breyttu stílum annarra íhluta og flyttu þá beint inn, notaðu `@import` í upphafi og slökktu á `extend`.

   Stíllinn sem notaður er til að sýna er bannaður að vera skrifaður í `heiti hluta/_.styl` og skrifaður í `demo/_.styl`.

   Fyrir `js` íhlutinn skaltu þróa hann í samræmi við [webc.js.md](./webc.js.md) ferli (vinsamlegast eyddu `heiti íhluta/_.js` fyrir hreina stílhluta)

3. Ýttu á [demo.md](./demo.md) sýningu á ferliþróun

4. Keyrðu `./test.sh` af rótarskránni. Lagfærðu villur og viðvaranir, dragðu út aðgerðir, fínstilltu kóða og forðastu tvíverknað og offramboð. Fyrir kóðaforskriftir, sjá `.agents/doc/code/js.md`

5. Lestu [dbg.md](./dbg.md) og kemdu íhluti í samræmi við ferlið

6. Fylgdu ferlinu [i18n.md](./i18n.md) til að innleiða alþjóðavæðingu íhluta og sýnikennslu og skrifa skjöl

7. Prófaðu aftur og fínstilltu kóðann

8. Opnaðu undirumboðsmann og hringdu í `.agents/skills/js_review/SKILL.md` til að skoða og fínstilla kóðann.

9. Villuleit aftur