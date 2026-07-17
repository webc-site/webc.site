---
name: jsdoc
description: src/js skjal búið til sjálfkrafa
---

## Hlaupa skref

1. Keyrðu `./sh/jsDoc.js` til að skoða aðgerðir þar sem skjöl vantar (ef það er ekkert úttak er engin þörf á að bæta því við).
2. Samkvæmt úttaksskráalistanum skaltu lesa núverandi skjöl og kóða eitt í einu og klára þau (vinndu þau í röð og brjóttu þau eitt í einu).

## Kröfur um skjöl

Ef útflutningurinn er fall, skrifaðu
- Færibreytur og skilagildi:
  - Skrifaðu aðeins samsvarandi lýsingar ef það eru færibreytur eða skilagildi, annars skaltu ekki skrifa þær.
  - Færibreytur eru kynntar með óröðuðum listum.
  - Ef skilagildið er fylki, notaðu óraðaðan lista til að lýsa því einn í einu (annars skaltu skrifa beint, `Return value: description`, bara ein lína).
  - Ef færibreyturnar eða skilagildið eru aðgerðir, notaðu undir-óraðaða lista til að lýsa breytunum og skilagildunum (ef engin, ekki skrifa þær).

Ef útflutningurinn er fastur, kynntu hvað það er, bara ein lína

- Notaðu hnitmiðað, faglegt mál og forðastu að nota lýsingarorð.
- Endurskoðaðu núverandi skjal, ekki endurskrifa það alveg

## sniðmát

Skrifaðu hvert nafn aðeins einu sinni til að forðast tvítekningu og reyndu að tjá það skýrt í einni línu. Viðmiðunarsniðið er sem hér segir

```
# skráarheiti

## Heiti aðgerða (færibreyta)

Notkunarlýsing

færibreyta:
- `xx` : Tilgangur
  - færibreytu
    - `a` : Tilgangur
  - Skilagildi: lýsing

Skilagildi: Lýsing
```