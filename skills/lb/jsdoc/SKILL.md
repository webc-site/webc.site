---
name: jsdoc
description: src/js Dokument automatesch generéiert
---

## Schrëtt lafen

1. Run `./sh/jsDoc.js` fir Funktiounen mat fehlend Dokumentatioun ze gesinn (wann et keen Ausgang ass, brauch et net derbäi ze ginn).
2. Laut der Ausgangsdatei Lëscht, liest déi existent Dokumenter a Coden een nom aneren a fëllt se aus (veraarbecht se an der Sequenz a brécht se een nom aneren).

## Dokumentatioun Ufuerderunge

Wann den Export eng Funktioun ass, schreift
- Parameteren a Retourwäerter:
  - Schreift nëmmen entspriechend Beschreiwunge wann et Parameteren oder Retourwäerter gëtt, soss schreift se net.
  - Parameteren ginn agefouert mat ongeuerdnete Lëschte.
  - Wann de Retourwäert eng Array ass, benotzt eng ongeuerdnet Lëscht fir se een nom aneren ze beschreiwen (soss schreift direkt, `Retourwert: Beschreiwung`, just eng Zeil).
  - Wann d'Parameteren oder d'Retourwäert Funktiounen sinn, benotzt sub-onordéiert Lëschte fir d'Parameteren ze beschreiwen an d'Wäerter zréckzekommen (wann keng, schreift se net).

Wann den Export e konstante ass, gitt wat et ass, just eng Zeil

- Benotzt präzis, professionell Sprooch a vermeit d'Benotzung vun Adjektiver.
- Iwwerschaffen op existent Dokument, net komplett nei schreiwen

## Format Schabloun

Schreift all Numm nëmmen eemol fir Duplikatioun ze vermeiden a probéiert et kloer an enger Zeil auszedrécken. D'Referenzformat ass wéi follegt

```
# Dateinumm

## Funktioun Numm (Parameter)

Benotze Beschreiwung

parameter:
- `xx` : Zweck
  - parameter
    - `a` : Zweck
  - Retour Wäert: Beschreiwung

Retour Wäert: Beschreiwung
```