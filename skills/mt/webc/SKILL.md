---
name: webc
---

Segwi l-proċess, agħmel pjan, u żviluppa pass pass biex tevita ommissjonijiet

1. Mexxi `./sh/new.js isem tal-komponent tat-tip tal-proġett` u oħloq il-komponent taħt id-direttorju `src/webc`
   It-tip ta' proġett jista' jkun `css` (komponent ta' stil pur), `js` (komponent tal-paġna web)
   Ikkapitalizza l-ewwel ittra tal-isem tal-komponent

2. Aqra l-ispeċifikazzjonijiet tal-kodifikazzjoni għal `.agents/doc/code` u mbagħad tiżviluppa.

   L-istil tal-komponent huwa miktub f'`_.styl`. L-istil użat għad-dimostrazzjoni huwa miktub f'`demo/_.styl`. Huwa pprojbit li tiktebha f'`isem tal-komponent/_.styl`.

  L-użu ta' `@import` biex jimporta stili minn komponenti oħra huwa pprojbit kemm f'`_.styl` kif ukoll f'`demo/_.styl` .

  Segwi l-istandards tal-kodifikazzjoni u l-estetika tad-disinn ta’ [./styl.md](./styl.md).

  Komponenti dipendenti (u l-istili tagħhom) huma importati permezz ta' `import "./other components.js"` fi `webc/componentname.js`; id-dipendenzi għad-dimostrazzjoni huma importati permezz ta' `importazzjoni "../../other components.js"` f'`demo/_.js`.

   Il-komponenti kollha (inklużi l-komponenti tal-istil pur) għandu jkollhom fajl tal-iskript `isem tal-komponent.js`. Il-`isem tal-komponent.js` tal-komponenti tal-istil pur jimporta biss il-`_.styl` korrispondenti. Għal komponenti bil-loġika JS, segwi l-proċess [webc.js.md](./webc.js.md) biex tiżviluppa.

3. Agħfas [demo.md](./demo.md) dimostrazzjoni tal-iżvilupp tal-proċess

4. Mexxi `./test.sh` tad-direttorju tal-għeruq. Waħħal l-iżbalji u l-allarmi, estratt il-funzjonijiet, ottimizza l-kodiċi, u tevita d-duplikazzjoni u s-sensja. Għal speċifikazzjonijiet tal-kodiċi, ara `.agents/doc/code/js.md`

5. Aqra [dbg.md](./dbg.md) u debug komponenti skond il-proċess

6. Segwi l-proċess [i18n.md](./i18n.md) biex timplimenta l-internazzjonalizzazzjoni tal-komponenti u d-dimostrazzjonijiet u tikteb dokumenti

7. Ittestja mill-ġdid u ottimizza l-kodiċi

8. Iftaħ sub-aġent u ċempel `.agents/skills/js_review/SKILL.md` biex tirrevedi u tottimizza l-kodiċi.

9. Debugging mill-ġdid