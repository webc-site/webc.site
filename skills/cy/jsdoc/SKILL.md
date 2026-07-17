---
name: jsdoc
description: dogfen src/js yn cael ei chynhyrchu'n awtomatig
---

## Rhedeg camau

1. Rhedeg `./sh/jsDoc.js` i weld swyddogaethau gyda dogfennaeth goll (os nad oes allbwn, nid oes angen ei ychwanegu).
2. Yn ôl y rhestr ffeiliau allbwn, darllenwch y dogfennau a'r codau presennol fesul un a'u cwblhau (eu prosesu mewn trefn a'u torri fesul un).

## Gofynion dogfennaeth

Os yw'r allforio yn swyddogaeth, ysgrifennwch
- Paramedrau a gwerthoedd dychwelyd:
  - Ysgrifennwch ddisgrifiadau cyfatebol dim ond os oes paramedrau neu werthoedd dychwelyd, fel arall peidiwch â'u hysgrifennu.
  - Cyflwynir paramedrau gan ddefnyddio rhestrau heb eu trefnu.
  - Os mai arae yw'r gwerth dychwelyd, defnyddiwch restr heb ei threfnu i'w ddisgrifio fesul un (fel arall, ysgrifennwch yn uniongyrchol, `Gwerth dychwelyd: disgrifiad`, dim ond un llinell).
  - Os yw'r paramedrau neu'r gwerth dychwelyd yn swyddogaethau, defnyddiwch restrau is-ddi-drefn i ddisgrifio'r paramedrau a'r gwerthoedd dychwelyd (os nad oes rhai, peidiwch â'u hysgrifennu).

Os yw'r allforio yn gyson, cyflwynwch yr hyn ydyw, dim ond un llinell

- Defnyddiwch iaith gryno, broffesiynol ac osgoi defnyddio ansoddeiriau.
- Adolygu'r ddogfen bresennol, peidiwch â'i hailysgrifennu'n llwyr

## templed fformat

Ysgrifennwch bob enw unwaith yn unig i osgoi dyblygu a cheisiwch ei fynegi'n glir mewn un llinell. Mae'r fformat cyfeirio fel a ganlyn

```
# enw ffeil

## Enw swyddogaeth (paramedr)

Disgrifiad defnydd

paramedr:
- `xx` : Pwrpas
  - paramedr
    - `a` : Pwrpas
  - Gwerth dychwelyd: disgrifiad

Gwerth dychwelyd: Disgrifiad
```