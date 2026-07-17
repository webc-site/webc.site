---
name: jsdoc
description: dokument src/js iġġenerat awtomatikament
---

## Mexxi passi

1. Mexxi `./sh/jsDoc.js` biex tara funzjonijiet b'dokumentazzjoni nieqsa (jekk ma jkunx hemm output, m'hemmx għalfejn iżżidha).
2. Skont il-lista tal-fajl tal-output, aqra d-dokumenti u l-kodiċijiet eżistenti wieħed wieħed u tlestihom (ipproċessahom f'sekwenza u jaqtgħuhom wieħed wieħed).

## Rekwiżiti ta' dokumentazzjoni

Jekk l-esportazzjoni hija funzjoni, ikteb
- Parametri u valuri ta' ritorn:
  - Ikteb biss deskrizzjonijiet korrispondenti jekk hemm parametri jew valuri ta 'ritorn, inkella tiktebhomx.
  - Il-parametri huma introdotti bl-użu ta' listi mhux ordnati.
  - Jekk il-valur tar-ritorn huwa firxa, uża lista mhux ordnata biex tiddeskriviha waħda waħda (inkella, ikteb direttament, `Valur tar-ritorn: deskrizzjoni`, linja waħda biss).
  - Jekk il-parametri jew il-valur tar-ritorn huma funzjonijiet, uża listi sub-mhux ordnati biex tiddeskrivi l-parametri u l-valuri tar-ritorn (jekk l-ebda wieħed, tiktbuhomx).

Jekk l-esportazzjoni hija kostanti, daħħal dak li hu, linja waħda biss

- Uża lingwaġġ konċiż u professjonali u evita li tuża aġġettivi.
- Irrevedi fuq dokument eżistenti, tiktebx kompletament mill-ġdid

## mudell tal-format

Ikteb kull isem darba biss biex tevita d-duplikazzjoni u pprova tesprimih b'mod ċar f'linja waħda. Il-format ta' referenza huwa kif ġej

```
# isem tal-fajl

## Isem tal-funzjoni (parametru)

Deskrizzjoni tal-użu

parametru:
- `xx` : Għan
  - parametru
    - `a` : Għan
  - Valur tar-ritorn: deskrizzjoni

Valur tar-ritorn: Deskrizzjoni
```