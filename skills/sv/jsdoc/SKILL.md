---
name: jsdoc
description: src/js-dokument genereras automatiskt
---

## Kör steg

1. Kör `./sh/jsDoc.js` för att se funktioner med saknad dokumentation (om det inte finns någon utdata behöver du inte lägga till den).
2. Enligt utdatafillistan, läs de befintliga dokumenten och koderna en efter en och slutför dem (bearbeta dem i följd och bryt dem en efter en).

## Dokumentationskrav

Om exporten är en funktion, skriv
- Parametrar och returvärden:
  - Skriv endast motsvarande beskrivningar om det finns parametrar eller returvärden, annars skriv inte dem.
  - Parametrar introduceras med hjälp av oordnade listor.
  - Om returvärdet är en matris, använd en oordnad lista för att beskriva den en efter en (annars skriv direkt, `Returvärde: beskrivning`, bara en rad).
  - Om parametrarna eller returvärdet är funktioner, använd underordnade listor för att beskriva parametrarna och returvärdena (om inga, skriv inte dem).

Om exporten är en konstant, introducera vad det är, bara en rad

- Använd ett kortfattat, professionellt språk och undvik att använda adjektiv.
- Revidera på befintligt dokument, skriv inte om det helt

## formatmall

Skriv varje namn bara en gång för att undvika dubbelarbete och försök att uttrycka det tydligt på en rad. Referensformatet är som följer

```
# filnamn

## Funktionsnamn (parameter)

Användningsbeskrivning

parameter:
- `xx` : Syfte
  - parameter
    - `a` : Syfte
  - Returvärde: beskrivning

Returvärde: Beskrivning
```