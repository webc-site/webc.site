---
name: jsdoc
description: src/js-dokument genereret automatisk
---

## Løb trin

1. Kør `./sh/jsDoc.js` for at se funktioner med manglende dokumentation (hvis der ikke er noget output, er det ikke nødvendigt at tilføje det).
2. I henhold til outputfillisten skal du læse de eksisterende dokumenter og koder én efter én og færdiggøre dem (behandle dem i rækkefølge og bryde dem én efter én).

## Dokumentationskrav

Hvis eksporten er en funktion, skriv
- Parametre og returværdier:
  - Skriv kun tilsvarende beskrivelser, hvis der er parametre eller returværdier, ellers skriv dem ikke.
  - Parametre introduceres ved hjælp af uordnede lister.
  - Hvis returværdien er en matrix, skal du bruge en uordnet liste til at beskrive den én efter én (ellers skriv direkte `Returværdi: beskrivelse`, kun én linje).
  - Hvis parametrene eller returværdien er funktioner, skal du bruge underordnede lister til at beskrive parametrene og returværdierne (hvis ingen, skriv dem ikke).

Hvis eksporten er en konstant, indfør hvad den er, kun en linje

- Brug kortfattet, professionelt sprog og undgå at bruge adjektiver.
- Revidere på eksisterende dokument, ikke helt omskrive det

## format skabelon

Skriv hvert navn kun én gang for at undgå overlapning, og prøv at udtrykke det klart på én linje. Referenceformatet er som følger

```
# filnavn

## Funktionsnavn (parameter)

Brugsbeskrivelse

parameter:
- `xx` : Formål
  - parameter
    - `a` : Formål
  - Returværdi: beskrivelse

Returværdi: Beskrivelse
```