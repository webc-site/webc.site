---
name: jsdoc
description: src/js dokument vygenerovaný automaticky
---

## Spustite kroky

1. Spustite `./sh/jsDoc.js` na zobrazenie funkcií s chýbajúcou dokumentáciou (ak neexistuje výstup, nie je potrebné ho pridávať).
2. Podľa zoznamu výstupných súborov si postupne prečítajte existujúce dokumenty a kódy a doplňte ich (spracujte ich v poradí a jeden po druhom zlomte).

## Požiadavky na dokumentáciu

Ak je export funkciou, napíšte
- Parametre a návratové hodnoty:
  - Zodpovedajúce popisy píšte iba vtedy, ak existujú parametre alebo návratové hodnoty, inak ich nepíšte.
  - Parametre sa zavádzajú pomocou neusporiadaných zoznamov.
  - Ak je vrátená hodnota pole, použite neusporiadaný zoznam na jej popis jeden po druhom (v opačnom prípade napíšte priamo, `Vrátená hodnota: popis`, stačí jeden riadok).
  - Ak sú parametre alebo návratová hodnota funkciami, na popis parametrov a návratových hodnôt použite podradené zoznamy (ak neexistujú, nepíšte ich).

Ak je export konštantný, uveďte, čo to je, iba jeden riadok

- Používajte stručný, odborný jazyk a vyhnite sa používaniu prídavných mien.
- Revidujte existujúci dokument, neprepisujte ho úplne

## šablónu formátu

Každé meno napíšte iba raz, aby ste sa vyhli duplicite, a snažte sa ho jasne vyjadriť v jednom riadku. Referenčný formát je nasledujúci

```
# názov súboru

## Názov funkcie (parameter)

Popis použitia

parameter:
- `xx` : Účel
  - parameter
    - `a` : Účel
  - Návratová hodnota: popis

Návratová hodnota: Popis
```