---
name: jsdoc
description: src/js dokumentua automatikoki sortu da
---

## Exekutatu urratsak

1. Exekutatu `./sh/jsDoc.js` dokumentazioa falta duten funtzioak ikusteko (irteerarik ez badago, ez dago gehitu beharrik).
2. Irteerako fitxategien zerrendaren arabera, irakurri lehendik dauden dokumentuak eta kodeak banan-banan eta osatu (prozesatu sekuentzian eta zatitu banan-banan).

## Dokumentazio-baldintzak

Esportazioa funtzio bat bada, idatzi
- Parametroak eta itzultzeko balioak:
  - Idatzi dagozkion deskribapenak parametroak edo balioak itzultzen badira bakarrik, bestela ez idatzi.
  - Parametroak ordenatu gabeko zerrendak erabiliz sartzen dira.
  - Itzultzeko balioa array bat bada, erabili ordenatu gabeko zerrenda bat banan-banan deskribatzeko (bestela, idatzi zuzenean, `Itzuli balioa: deskribapena`, lerro bakarra).
  - Parametroak edo itzultzeko balioa funtzioak badira, erabili azpiordenatu gabeko zerrendak parametroak deskribatzeko eta itzultzeko balioak (bat ez bada, ez idatzi).

Esportazioa konstante bat bada, sartu zer den, lerro bakarra

- Erabili hizkera zehatza eta profesionala eta saihestu adjektiboak erabiltzea.
- Berrikusi lehendik dagoen dokumentua, ez guztiz berridatzi

## formatu txantiloia

Idatzi izen bakoitza behin bakarrik bikoizketak saihesteko eta saiatu lerro batean argi eta garbi adierazten. Erreferentzia formatua honakoa da

```
# fitxategiaren izena

## Funtzioaren izena (parametroa)

Erabilera deskribapena

parametroa:
- `xx` : Helburua
  - parametroa
    - `a` : Helburua
  - Itzultzeko balioa: deskribapena

Itzultzeko balioa: Deskribapena
```