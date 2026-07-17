# fetch.js

Sare-eskaera tresnaren funtzioa eskuratze-kapsulazioan oinarrituta

## F(url, opt)

Bidali sare-eskaera eta erantzun objektu bat itzuli

parametroa:
- `url` : helbidea eskatzeko
- `opt` : `fetch` aukera-objektua

Itzultzeko balioa: Erantzun objektua

## f(attr)

Eskaera bat bildu eta itzultzen den edukia formatu zehatz batean analizatzen duen maila handiagoko funtzioa

parametroa:
- `attr`: erantzunaren gorputza analizatzeko atributuaren izena

Itzultzeko balioa: edukia modu asinkronoan eskatzeko eta analizatzeko funtzioa
  - parametroa
    - `url` : helbidea eskatzeko
    - `opt` : `fetch` aukera-objektua
  - Itzultzeko balioa: analizatutako edukia

## fTxt

Bidali sareko eskaera eta itzuli erantzunaren gorputza testu formatuan

parametroa:
- `url` : helbidea eskatzeko
- `opt` : `fetch` aukera-objektua

Itzultzeko balioa: erantzunaren testua

## fJson(url, opt)

Bidali sare-eskaera eta analizatu eta itzuli erantzunaren gorputza JSON formatuan

parametroa:
- `url` : helbidea eskatzeko
- `opt` : `fetch` aukera-objektua

Itzultzeko balioa: analizatutako JSON objektua

## fBin(url, opt)

Bidali sare-eskaera bat eta itzuli erantzunaren gorputza byte-matrize bitar gisa

parametroa:
- `url` : helbidea eskatzeko
- `opt` : `fetch` aukera-objektua

Itzultzeko balioa: byte-matrizea