---
name: jsdoc
description: src/js dokument genereeritakse automaatselt
---

## Jookse sammud

1. Puuduva dokumentatsiooniga funktsioonide vaatamiseks käivitage `./sh/jsDoc.js` (kui väljundit pole, pole vaja seda lisada).
2. Vastavalt väljundfailide nimekirjale lugege ükshaaval olemasolevad dokumendid ja koodid läbi ning täiendage neid (töötlege järjestikku ja purustage ükshaaval).

## Nõuded dokumentidele

Kui eksport on funktsioon, kirjutage
- Parameetrid ja tagastusväärtused:
  - Kirjutage vastavad kirjeldused ainult parameetrite või tagastatavate väärtuste olemasolul, vastasel juhul ärge kirjutage neid.
  - Parameetrid sisestatakse järjestamata loendite abil.
  - Kui tagastatav väärtus on massiiv, kasutage selle ükshaaval kirjeldamiseks järjestamata loendit (muidu kirjutage otse, `Tagastusväärtus: kirjeldus`, ainult üks rida).
  - Kui parameetrid või tagastusväärtus on funktsioonid, kasutage parameetrite ja tagastatavate väärtuste kirjeldamiseks alamjärjestamata loendeid (kui neid pole, ärge kirjutage neid).

Kui eksport on konstant, tutvustage, mis see on, vaid üks rida

- Kasutage kokkuvõtlikku, professionaalset keelt ja vältige omadussõnade kasutamist.
- Vaadake olemasolevat dokumenti üle, ärge kirjutage seda täielikult ümber

## vormingu mall

Kirjutage iga nimi ainult üks kord, et vältida dubleerimist, ja proovige seda selgelt väljendada ühel real. Viitevorming on järgmine

```
# faili nimi

## Funktsiooni nimi (parameeter)

Kasutuskirjeldus

parameeter:
- `xx` : Eesmärk
  - parameeter
    - `a` : Eesmärk
  - Tagastusväärtus: kirjeldus

Tagastusväärtus: Kirjeldus
```