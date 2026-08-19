---
name: webc
---

Sunda ang proseso, paghimo og plano, ug paghimo og lakang sa lakang aron malikayan ang mga pagkawala

1. Pagdalagan `./sh/new.js project type component name` ug paghimo sa component ubos sa `src/webc` directory
   Ang tipo sa proyekto mahimong `css` (pure style component), `js` (web page component)
   I-capitalize ang unang letra sa ngalan sa component

2. Basaha ang mga detalye sa coding para sa `.agents/doc/code` ug dayon pag-develop.

   Ang sangkap nga estilo gisulat sa `_.styl`. Ang estilo nga gigamit alang sa demonstrasyon gisulat sa `demo/_.styl`. Gidili ang pagsulat niini sa `component name/_.styl`.

  Ang paggamit sa `@import` sa pag-import og mga estilo gikan sa ubang mga component gidili sa `_.styl` ug `demo/_.styl` .

  Sunda ang coding standards ug design aesthetics sa [./styl.md](./styl.md).

  Ang nagsalig nga mga sangkap (ug ang ilang mga estilo) gi-import pinaagi sa `import "./other components.js"` sa `webc/componentname.js`; Ang mga dependency alang sa demonstrasyon gi-import pinaagi sa `import "../../other components.js"` sa `demo/_.js`.

   Ang tanan nga mga sangkap (lakip ang puro nga istilo nga sangkap) kinahanglan adunay usa ka `component name.js` script file. Ang `component name.js` sa lunsay nga estilo nga mga sangkap nag-import lang sa katugbang nga `_.styl`. Para sa mga component nga adunay JS logic, sunda ang [webc.js.md](./webc.js.md) nga proseso aron mapalambo.

3. Pindota ang [demo.md](./demo.md) demonstrasyon sa pagpalambo sa proseso

4. Pagdalagan `./test.sh` sa root directory. Pag-ayo sa mga kasaypanan ug mga alarma, pagkuha sa mga function, pag-optimize sa code, ug paglikay sa pagdoble ug pag-usab. Para sa mga detalye sa code, tan-awa ang `.agents/doc/code/js.md`

5. Basaha ang [dbg.md](./dbg.md) ug i-debug ang mga sangkap sumala sa proseso

6. Sunda ang [i18n.md](./i18n.md) nga proseso aron ipatuman ang internasyonalisasyon sa mga sangkap ug demonstrasyon ug pagsulat og mga dokumento

7. Sulayi pag-usab ug i-optimize ang code

8. Ablihi ang usa ka sub-agent ug tawagan ang `.agents/skills/js_review/SKILL.md` aron masusi ug ma-optimize ang code.

9. Pag-debug pag-usab