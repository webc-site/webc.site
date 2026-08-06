---
name: jsdoc
description: Dokumenti src/js gjenerohet automatikisht
---

## Vraponi hapat

1. Ekzekutoni `./sh/jsDoc.js` për të parë funksionet me dokumentacion që mungon (nëse nuk ka dalje, nuk ka nevojë ta shtoni atë).
2. Sipas listës së skedarëve të daljes, lexoni dokumentet dhe kodet ekzistuese një nga një dhe plotësoni ato (përpunoni ato në rend dhe thyejini një nga një).

## Kërkesat për dokumentacion

Nëse eksporti është një funksion, shkruani
- Parametrat dhe vlerat e kthyera:
  - Shkruani përshkrimet përkatëse vetëm nëse ka parametra ose vlera të kthyera, përndryshe mos i shkruani ato.
  - Parametrat futen duke përdorur lista të pa renditura.
  - Nëse vlera e kthyer është një grup, përdorni një listë të pa renditur për ta përshkruar atë një nga një (përndryshe, shkruani drejtpërdrejt, `Vlera e kthimit: përshkrim`, vetëm një rresht).
  - Nëse parametrat ose vlera e kthyer janë funksione, përdorni lista të nënrenditura për të përshkruar parametrat dhe vlerat e kthimit (nëse nuk ka, mos i shkruani ato).

Nëse eksporti është një konstante, prezantoni se çfarë është, vetëm një rresht

- Përdorni gjuhë koncize, profesionale dhe shmangni përdorimin e mbiemrave.
- Rishikoni dokumentin ekzistues, mos e rishkruani plotësisht

## shabllonin e formatit

Shkruani çdo emër vetëm një herë për të shmangur dyfishimin dhe përpiquni ta shprehni qartë në një rresht. Formati i referencës është si më poshtë

```
# emri i skedarit

## Emri i funksionit (parametri)

Përshkrimi i përdorimit

parametri:
- `xx` : Qëllimi
  - parametri
    - `a` : Qëllimi
  - Vlera e kthimit: përshkrim

Vlera e kthimit: Përshkrimi
```