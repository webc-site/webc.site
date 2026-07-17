---
name: jsdoc
description: src/js dokument outomaties gegenereer
---

## Loop stappe

1. Begin `./sh/jsDoc.js` om funksies met ontbrekende dokumentasie te sien (as daar geen uitvoer is nie, hoef dit nie bygevoeg te word nie).
2. Volgens die uitvoerlêerlys, lees die bestaande dokumente en kodes een vir een en voltooi dit (verwerk hulle in volgorde en breek hulle een vir een).

## Dokumentasie vereistes

As die uitvoer 'n funksie is, skryf
- Parameters en terugkeerwaardes:
  - Skryf slegs ooreenstemmende beskrywings as daar parameters of terugkeerwaardes is, anders skryf dit nie.
  - Parameters word ingestel deur ongeordende lyste te gebruik.
  - As die terugkeerwaarde 'n skikking is, gebruik 'n ongeordende lys om dit een vir een te beskryf (anders, skryf direk, `Terugwaarde: beskrywing`, net een reël).
  - As die parameters of terugkeerwaarde funksies is, gebruik sub-ongeordende lyste om die parameters en terugkeerwaardes te beskryf (indien geen, moenie dit skryf nie).

As die uitvoer 'n konstante is, stel voor wat dit is, net een reël

- Gebruik bondige, professionele taal en vermy die gebruik van byvoeglike naamwoorde.
- Hersien op bestaande dokument, moenie dit heeltemal herskryf nie

## formaat sjabloon

Skryf elke naam net een keer om duplisering te vermy en probeer dit duidelik in een reël uitdruk. Die verwysingsformaat is soos volg

```
# lêernaam

## Funksienaam (parameter)

Gebruik beskrywing

parameter:
- `xx` : Doel
  - parameter
    - `a` : Doel
  - Retourwaarde: beskrywing

Retourwaarde: Beskrywing
```