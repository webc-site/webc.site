# route.js

Orrialde bakarreko frontend bideratze kudeaketa

## nowUrl()

Lortu uneko URLaren bidea, barra nagusia kenduta

Itzultzeko balioa: uneko bide-katea

## route(hook)

Erregistratu entzuteko deia ibilbidea aldaketetarako. Erregistratzean, behin exekutatuko da uneko bidearekin.

parametroa:
- `hook`: Ibilbideen jarraipena egiteko deia itzultzeko funtzioa
  - parametroa
    - `url` : uneko bidea
    - `pre`: azken bidea

Itzultzeko balioa: erregistratu gabeko garbiketa-funtzioa

## setPre(url)

Gorde grabatutako azken URLa

parametroa:
- `url`: bide-katea

## preUrl()

Lortu azken diskoaren URLa

Itzultzeko balioa: azken bide-katea

## refresh(url)

Behartu ibilbide entzuteko dei guztiak zehaztutako bidetik abiarazteko eta eguneratu aurretik

parametroa:
- `url`: xede-bidea, uneko bide lehenetsia

## removeSlash(url)

Kendu barrak bide-goiburuetatik

parametroa:
- `url`: bide-katea

Itzultzeko balioa: hasierako barra kendu ondoren bidea

## setUrl(url)

Eguneratu arakatzailearen helbide-barrako URL egoera

parametroa:
- `url`: xede-bidea

Itzultzeko balioa: 1 bidea benetan aldatzen bada

## goto(url)

Eguneratu arakatzailearen helbidea eta abiarazi ibilbidea freskatzea

parametroa:
- `url`: xede-bidea