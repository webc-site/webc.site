---
name: webc
---

Segwi l-proċess, agħmel pjan, u żviluppa pass pass biex tevita ommissjonijiet

1. Mexxi `./sh/new.js isem tal-komponent tat-tip tal-proġett` u oħloq folder tal-komponenti taħt id-direttorju `src`
   It-tip ta' proġett jista' jkun `css` (komponent ta' stil pur), `js` (komponent tal-paġna web)
   Ikkapitalizza l-ewwel ittra tal-isem tal-komponent

2. Aqra l-ispeċifikazzjonijiet tal-kodifikazzjoni għal `.agents/doc/code` u mbagħad tiżviluppa.

   Fi `_.styl`, l-ewwel `@import "../component name/_.styl"` biex timporta dipendenzi. Jekk jogħġbok segwi l-istandards tal-kodifikazzjoni u l-estetika tad-disinn ta' [./styl.md](./styl.md).

   Immodifika l-istili ta' komponenti oħra u minflok importahom direttament, uża `@import` fil-bidu u tiddiżattiva `extend`.

   L-istil użat għad-dimostrazzjoni huwa pprojbit milli jinkiteb f'`isem tal-komponent/_.styl` u miktub f'`demo/_.styl`.

   Għall-komponent `js`, żviluppah skont il-proċess [webc.js.md](./webc.js.md) (jekk jogħġbok ħassar `isem tal-komponent/_.js` għal komponenti ta' stil pur)

3. Agħfas [demo.md](./demo.md) dimostrazzjoni tal-iżvilupp tal-proċess

4. Mexxi `./test.sh` tad-direttorju tal-għeruq. Waħħal l-iżbalji u l-allarmi, estratt il-funzjonijiet, ottimizza l-kodiċi, u tevita d-duplikazzjoni u s-sensja. Għal speċifikazzjonijiet tal-kodiċi, ara `.agents/doc/code/js.md`

5. Aqra [dbg.md](./dbg.md) u debug komponenti skond il-proċess

6. Segwi l-proċess [i18n.md](./i18n.md) biex timplimenta l-internazzjonalizzazzjoni tal-komponenti u d-dimostrazzjonijiet u tikteb dokumenti

7. Ittestja mill-ġdid u ottimizza l-kodiċi

8. Iftaħ sub-aġent u ċempel `.agents/skills/js_review/SKILL.md` biex tirrevedi u tottimizza l-kodiċi.

9. Debugging mill-ġdid