---
name: jsdoc
description: src/js nga dokumento awtomatikong namugna
---

## Dagan ang mga lakang

1. Pagdalagan `./sh/jsDoc.js` para tan-awon ang mga function nga kulang sa dokumentasyon (kung walay output, dili na kinahanglan nga idugang kini).
2. Sumala sa lista sa output file, basaha ang naglungtad nga mga dokumento ug mga code sa usag usa ug kompletoha kini (proseso kini sa pagkasunod-sunod ug bungkaga kini sa usag usa).

## Mga kinahanglanon sa dokumentasyon

Kung ang pag-eksport usa ka function, isulat
- Mga parameter ug mga kantidad sa pagbalik:
  - Isulat lamang ang katugbang nga mga paghulagway kung adunay mga parameter o mga kantidad sa pagbalik, kung dili, ayaw kini isulat.
  - Ang mga parametro gipaila gamit ang dili ayos nga mga lista.
  - Kung ang gibalik nga kantidad usa ka laray, gamita ang usa ka dili han-ay nga lista aron ihulagway kini sa usag usa (kung dili, isulat direkta, `Balik nga kantidad: paghulagway`, usa lang ka linya).
  - Kung ang mga parameter o kantidad sa pagbalik mga function, gamita ang mga sub-unordered nga mga lista aron ihulagway ang mga parameter ug mga kantidad sa pagbalik (kung wala, ayaw isulat kini).

Kung ang pag-eksport kanunay, ipaila kung unsa kini, usa lang ka linya

- Gamita ang mubo, propesyonal nga pinulongan ug likayi ang paggamit sa mga adjectives.
- Usba ang kasamtangan nga dokumento, ayaw kini isulat pag-usab

## pormat nga template

Isulat ang matag ngalan kausa lang aron malikayan ang pagdoble ug sulayi nga ipahayag kini nga klaro sa usa ka linya. Ang pormat sa pakisayran mao ang mosunod

```
# ngalan sa file

## Ngalan sa function (parameter)

Deskripsyon sa paggamit

parameter:
- `xx` : Katuyoan
  - parametro
    - `a` : Katuyoan
  - Ibalik nga bili: paghulagway

Ibalik nga bili: Deskripsyon
```