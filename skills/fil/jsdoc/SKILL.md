---
name: jsdoc
description: Awtomatikong nabuo ang src/js na dokumento
---

## Patakbuhin ang mga hakbang

1. Patakbuhin ang `./sh/jsDoc.js` upang tingnan ang mga function na may nawawalang dokumentasyon (kung walang output, hindi na kailangang idagdag ito).
2. Ayon sa listahan ng output file, basahin ang mga umiiral na dokumento at code nang isa-isa at kumpletuhin ang mga ito (iproseso ang mga ito sa pagkakasunud-sunod at isa-isa itong basagin).

## Mga kinakailangan sa dokumentasyon

Kung ang pag-export ay isang function, isulat
- Mga parameter at return value:
  - Sumulat lamang ng mga kaukulang paglalarawan kung mayroong mga parameter o mga halaga ng pagbabalik, kung hindi man ay huwag isulat ang mga ito.
  - Ang mga parameter ay ipinakilala gamit ang mga hindi nakaayos na listahan.
  - Kung array ang return value, gumamit ng unordered list para ilarawan ito nang paisa-isa (kung hindi, direktang sumulat, `Return value: description`, isang linya lang).
  - Kung ang mga parameter o return value ay mga function, gumamit ng mga sub-unordered list para ilarawan ang mga parameter at return values ​​(kung wala, huwag isulat ang mga ito).

Kung pare-pareho ang pag-export, ipakilala kung ano ito, isang linya lang

- Gumamit ng maikli, propesyonal na wika at iwasan ang paggamit ng mga adjectives.
- Baguhin ang umiiral na dokumento, huwag itong ganap na muling isulat

## template ng format

Isulat ang bawat pangalan nang isang beses lamang upang maiwasan ang pagdoble at subukang ipahayag ito nang malinaw sa isang linya. Ang format ng sanggunian ay ang mga sumusunod

```
# pangalan ng file

## Pangalan ng function (parameter)

Paglalarawan ng paggamit

parameter:
- `xx` : Layunin
  - parameter
    - `a` : Layunin
  - Return value: paglalarawan

Return value: Paglalarawan
```