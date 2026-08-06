---
name: jsdoc
description: src/js dokumentas sugeneruotas automatiškai
---

## Bėgti žingsnius

1. Paleiskite `./sh/jsDoc.js`, kad peržiūrėtumėte funkcijas, kuriose trūksta dokumentacijos (jei išvesties nėra, jos pridėti nereikia).
2. Pagal išvesties failų sąrašą po vieną perskaitykite esamus dokumentus ir kodus ir juos užpildykite (apdorokite juos iš eilės ir sulaužykite po vieną).

## Reikalavimai dokumentacijai

Jei eksportas yra funkcija, parašykite
- Parametrai ir grąžinimo reikšmės:
  - Atitinkamus aprašymus rašykite tik jei yra parametrų arba grąžinamų reikšmių, kitu atveju jų nerašykite.
  - Parametrai įvedami naudojant netvarkingus sąrašus.
  - Jei grąžinama reikšmė yra masyvas, naudokite nerūšiuotą sąrašą, kad apibūdintumėte jį po vieną (kitaip rašykite tiesiogiai, `Grąžinama reikšmė: aprašymas`, tik viena eilutė).
  - Jei parametrai arba grąžinama reikšmė yra funkcijos, naudokite nerūšiuotus sąrašus, kad apibūdintumėte parametrus ir grąžinkite reikšmes (jei jų nėra, nerašykite).

Jei eksportas yra pastovus, nurodykite, kas tai yra, tik vieną eilutę

- Naudokite glaustą, profesionalią kalbą ir venkite būdvardžių.
- Patikslinkite esamą dokumentą, visiškai jo neperrašykite

## formato šabloną

Kiekvieną pavadinimą parašykite tik vieną kartą, kad išvengtumėte dubliavimo, ir stenkitės aiškiai išreikšti vienoje eilutėje. Nuorodos formatas yra toks

```
# failo pavadinimas

## Funkcijos pavadinimas (parametras)

Naudojimo aprašymas

parametras:
- `xx` : Paskirtis
  - parametras
    - `a` : Paskirtis
  - Grąžinama vertė: aprašymas

Grąžinama vertė: Aprašymas
```