---
name: jsdoc
description: src/js dokuments tiek ģenerēts automātiski
---

## Veiciet soļus

1. Palaidiet `./sh/jsDoc.js`, lai skatītu funkcijas, kurām trūkst dokumentācijas (ja nav izvades, tā nav jāpievieno).
2. Atbilstoši izvadfailu sarakstam pa vienam izlasiet esošos dokumentus un kodus un aizpildiet tos (apstrādājiet tos secīgi un pa vienam sadaliet).

## Dokumentācijas prasības

Ja eksportēšana ir funkcija, rakstiet
- Parametri un atgriešanas vērtības:
  - Rakstiet tikai atbilstošos aprakstus, ja ir parametri vai atgriežamās vērtības, pretējā gadījumā tos nerakstiet.
  - Parametri tiek ieviesti, izmantojot nesakārtotus sarakstus.
  - Ja atgriešanas vērtība ir masīvs, izmantojiet nesakārtotu sarakstu, lai to aprakstītu pa vienam (pretējā gadījumā ierakstiet tieši, `Atgriežamā vērtība: apraksts` tikai vienu rindiņu).
  - Ja parametri vai atgriešanas vērtība ir funkcijas, izmantojiet zemāk nesakārtotus sarakstus, lai aprakstītu parametrus un atgriežamās vērtības (ja tādu nav, nerakstiet).

Ja eksportēšana ir nemainīga, ievadiet, kas tas ir, tikai vienu rindiņu

- Izmantojiet kodolīgu, profesionālu valodu un izvairieties no īpašības vārdu lietošanas.
- Pārskatiet esošo dokumentu, nepārrakstiet to pilnībā

## formāta veidne

Katru vārdu ierakstiet tikai vienu reizi, lai izvairītos no dublēšanās, un mēģiniet to skaidri izteikt vienā rindā. Atsauces formāts ir šāds

```
# faila nosaukums

## Funkcijas nosaukums (parametrs)

Lietošanas apraksts

parametrs:
- `xx` : Mērķis
  - parametrs
    - `a` : Mērķis
  - Atgriešanas vērtība: apraksts

Atgriešanās vērtība: Apraksts
```