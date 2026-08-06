---
name: webc
---

Sundin ang proseso, gumawa ng plano, at bumuo ng hakbang-hakbang upang maiwasan ang mga pagkukulang

1. Patakbuhin ang `./sh/new.js project type component name` at likhain ang component sa ilalim ng `src/webc` na direktoryo
   Ang uri ng proyekto ay maaaring `css` (pure style component), `js` (web page component)
   I-capitalize ang unang titik ng pangalan ng bahagi

2. Basahin ang mga detalye ng coding para sa `.agents/doc/code` at pagkatapos ay bumuo.

   Ang istilo ng bahagi ay nakasulat sa `_.styl`. Ang istilong ginamit para sa pagpapakita ay nakasulat sa `demo/_.styl`. Ipinagbabawal na isulat ito sa `pangalan ng bahagi/_.styl`.

  Ang paggamit ng `@import` upang mag-import ng mga istilo mula sa iba pang mga bahagi ay ipinagbabawal sa parehong `_.styl` at `demo/_.styl` .

  Sundin ang mga pamantayan sa coding at aesthetics ng disenyo ng [./styl.md](./styl.md).

  Ang mga nakadependeng bahagi (at ang kanilang mga istilo) ay ini-import sa pamamagitan ng `import "./other components.js"` sa `webc/componentname.js`; Ang mga dependency para sa pagpapakita ay ini-import sa pamamagitan ng `import "../../other components.js"` sa `demo/_.js`.

   Ang lahat ng mga bahagi (kabilang ang mga purong bahagi ng istilo) ay dapat na mayroong `component name.js` script file. Ang `component name.js` ng purong istilong bahagi ay nag-i-import lamang ng katumbas na `_.styl`. Para sa mga bahaging may lohika ng JS, sundin ang proseso ng [webc.js.md](./webc.js.md) upang bumuo.

3. Pindutin ang [demo.md](./demo.md) demonstration ng pagbuo ng proseso

4. Patakbuhin ang `./test.sh` ng root directory. Ayusin ang mga error at alarm, i-extract ang mga function, i-optimize ang code, at iwasan ang pagdoble at redundancy. Para sa mga detalye ng code, tingnan ang `.agents/doc/code/js.md`

5. Basahin ang [dbg.md](./dbg.md) at i-debug ang mga bahagi ayon sa proseso

6. Sundin ang proseso ng [i18n.md](./i18n.md) para ipatupad ang internasyonalisasyon ng mga bahagi at demonstrasyon at magsulat ng mga dokumento

7. Subukan muli at i-optimize ang code

8. Magbukas ng sub-agent at tumawag sa `.agents/skills/js_review/SKILL.md` upang suriin at i-optimize ang code.

9. Nagde-debug muli