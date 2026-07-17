---
name: webc
---

Sundin ang proseso, gumawa ng plano, at bumuo ng hakbang-hakbang upang maiwasan ang mga pagkukulang

1. Patakbuhin ang `./sh/new.js project type component name` at lumikha ng component folder sa ilalim ng `src` na direktoryo
   Ang uri ng proyekto ay maaaring `css` (pure style component), `js` (web page component)
   I-capitalize ang unang titik ng pangalan ng bahagi

2. Basahin ang mga detalye ng coding para sa `.agents/doc/code` at pagkatapos ay bumuo.

   Sa `_.styl`, unang `@import "../component name/_.styl"` upang mag-import ng mga dependency. Mangyaring sundin ang mga pamantayan sa coding at aesthetics ng disenyo ng [./styl.md](./styl.md).

   Baguhin ang mga istilo ng iba pang mga bahagi at sa halip ay direktang i-import ang mga ito, gamitin ang `@import` sa simula at huwag paganahin ang `extend`.

   Ang istilong ginamit para sa pagpapakita ay ipinagbabawal na maisulat sa `pangalan ng bahagi/_.styl` at nakasulat sa `demo/_.styl`.

   Para sa bahaging `js`, i-develop ito ayon sa proseso ng [webc.js.md](./webc.js.md) (mangyaring tanggalin ang `pangalan ng bahagi/_.js` para sa purong mga bahagi ng istilo)

3. Pindutin ang [demo.md](./demo.md) demonstration ng pagbuo ng proseso

4. Patakbuhin ang `./test.sh` ng root directory. Ayusin ang mga error at alarm, i-extract ang mga function, i-optimize ang code, at iwasan ang pagdoble at redundancy. Para sa mga detalye ng code, tingnan ang `.agents/doc/code/js.md`

5. Basahin ang [dbg.md](./dbg.md) at i-debug ang mga bahagi ayon sa proseso

6. Sundin ang proseso ng [i18n.md](./i18n.md) para ipatupad ang internasyonalisasyon ng mga bahagi at demonstrasyon at magsulat ng mga dokumento

7. Subukan muli at i-optimize ang code

8. Magbukas ng sub-agent at tumawag sa `.agents/skills/js_review/SKILL.md` upang suriin at i-optimize ang code.

9. Nagde-debug muli