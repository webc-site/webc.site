---
name: jsdoc
description: src/js-dokument genereres automatisk
---

## Kjør trinn

1. Kjør `./sh/jsDoc.js` for å vise funksjoner med manglende dokumentasjon (hvis det ikke er utdata, er det ikke nødvendig å legge det til).
2. I henhold til utdatafillisten, les de eksisterende dokumentene og kodene én etter én og fullfør dem (behandle dem i rekkefølge og bryte dem én etter én).

## Dokumentasjonskrav

Hvis eksporten er en funksjon, skriv
- Parametere og returverdier:
  - Skriv kun tilsvarende beskrivelser hvis det er parametere eller returverdier, ellers ikke skriv dem.
  - Parametre introduseres ved hjelp av uordnede lister.
  - Hvis returverdien er en matrise, bruk en uordnet liste for å beskrive den én etter én (ellers skriver du direkte `Returverdi: beskrivelse`, bare én linje).
  - Hvis parametrene eller returverdien er funksjoner, bruk underordnede lister for å beskrive parametrene og returverdiene (hvis ingen, ikke skriv dem).

Hvis eksporten er en konstant, introduser hva den er, bare én linje

- Bruk et kortfattet, profesjonelt språk og unngå å bruke adjektiver.
- Revider på eksisterende dokument, ikke skriv det helt om

## formatmal

Skriv hvert navn bare én gang for å unngå duplisering og prøv å uttrykke det tydelig på én linje. Referanseformatet er som følger

```
# filnavn

## Funksjonsnavn (parameter)

Bruksbeskrivelse

parameter:
- `xx` : Formål
  - parameter
    - `a` : Formål
  - Returverdi: beskrivelse

Returverdi: Beskrivelse
```