---
name: webc
---

Sunda ang proseso, paghimo og plano, ug paghimo og lakang sa lakang aron malikayan ang mga pagkawala

1. Pagdalagan `./sh/new.js project type component name` ug paghimo og component folder ubos sa `src` directory
   Ang tipo sa proyekto mahimong `css` (pure style component), `js` (web page component)
   I-capitalize ang unang letra sa ngalan sa component

2. Basaha ang mga detalye sa coding para sa `.agents/doc/code` ug dayon pag-develop.

   Sa `_.styl`, una `@import "../component name/_.styl"` sa pag-import og dependencies. Palihug sunda ang coding standards ug design aesthetics sa [./styl.md](./styl.md).

   Usba ang mga estilo sa ubang mga sangkap ug i-import kini direkta, gamita ang `@import` sa sinugdanan ug i-disable ang `extend`.

   Ang estilo nga gigamit sa demonstrasyon gidid-an nga isulat sa `ngalan sa component/_.styl` ug isulat sa `demo/_.styl`.

   Para sa `js` component, pauswaga kini sumala sa [webc.js.md](./webc.js.md) nga proseso (palihug kuhaa ang `ngalan sa component/_.js` para sa lunsay nga estilo nga mga sangkap)

3. Pindota ang [demo.md](./demo.md) demonstrasyon sa pagpalambo sa proseso

4. Pagdalagan `./test.sh` sa root directory. Pag-ayo sa mga kasaypanan ug mga alarma, pagkuha sa mga function, pag-optimize sa code, ug paglikay sa pagdoble ug pag-usab. Para sa mga detalye sa code, tan-awa ang `.agents/doc/code/js.md`

5. Basaha ang [dbg.md](./dbg.md) ug i-debug ang mga sangkap sumala sa proseso

6. Sunda ang [i18n.md](./i18n.md) nga proseso aron ipatuman ang internasyonalisasyon sa mga sangkap ug demonstrasyon ug pagsulat og mga dokumento

7. Sulayi pag-usab ug i-optimize ang code

8. Ablihi ang usa ka sub-agent ug tawagan ang `.agents/skills/js_review/SKILL.md` aron masusi ug ma-optimize ang code.

9. Pag-debug pag-usab