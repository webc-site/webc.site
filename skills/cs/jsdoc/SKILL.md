---
name: jsdoc
description: src/js dokument vygenerován automaticky
---

## Spustit kroky

1. Spusťte `./sh/jsDoc.js` pro zobrazení funkcí s chybějící dokumentací (pokud není výstup, není třeba jej přidávat).
2. Podle seznamu výstupních souborů postupně načtěte existující dokumenty a kódy a doplňte je (zpracujte je v pořadí a jeden po druhém rozbíjte).

## Požadavky na dokumentaci

Pokud je export funkcí, napište
- Parametry a návratové hodnoty:
  - Odpovídající popisy pište pouze v případě, že existují parametry nebo návratové hodnoty, jinak je nezapisujte.
  - Parametry jsou zaváděny pomocí neuspořádaných seznamů.
  - Pokud je vrácená hodnota pole, použijte k popisu jeden po druhém neuspořádaný seznam (jinak napište přímo, `Vrácená hodnota: popis`, stačí jeden řádek).
  - Pokud jsou parametry nebo návratová hodnota funkcemi, použijte k popisu parametrů a návratových hodnot podřazené seznamy (pokud žádné, nepište je).

Pokud je export konstanta, uveďte, co to je, pouze jeden řádek

- Používejte stručný, odborný jazyk a nepoužívejte přídavná jména.
- Revidujte stávající dokument, nepřepisujte jej úplně

## formátová šablona

Každé jméno pište pouze jednou, abyste předešli duplicitě, a snažte se je vyjádřit srozumitelně na jednom řádku. Referenční formát je následující

```
# název souboru

## Název funkce (parametr)

Popis použití

parametr:
- `xx` : Účel
  - parametr
    - `a` : Účel
  - Návratová hodnota: popis

Návratová hodnota: Popis
```