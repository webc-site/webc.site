---
name: jsdoc
description: automaattisesti luotu src/js-dokumentti
---

## Juokse askeleita

1. Suorita `./sh/jsDoc.js` nähdäksesi funktiot, joista puuttuu dokumentaatio (jos tulostetta ei ole, sitä ei tarvitse lisätä).
2. Lue tulostiedostoluettelon mukaan olemassa olevat asiakirjat ja koodit yksitellen ja täydennä (käsittele ne peräkkäin ja riko ne yksitellen).

## Dokumentaatiovaatimukset

Jos vienti on funktio, kirjoita
- Parametrit ja palautusarvot:
  - Kirjoita vain vastaavat kuvaukset, jos parametreja tai palautusarvoja on, muuten älä kirjoita niitä.
  - Parametrit esitellään järjestämättömien listojen avulla.
  - Jos palautusarvo on taulukko, kuvaa se yksitellen järjestämättömällä luettelolla (muussa tapauksessa kirjoita suoraan, `Palautusarvo: kuvaus` vain yksi rivi).
  - Jos parametrit tai palautusarvo ovat funktioita, käytä alijärjestämättömiä listoja parametrien ja palautusarvojen kuvaamiseen (jos ei ole, älä kirjoita niitä).

Jos vienti on vakio, esittele, mikä se on, vain yksi rivi

- Käytä tiivistä, ammattimaista kieltä ja vältä adjektiiveja.
- Tarkista olemassa oleva asiakirja, älä kirjoita sitä kokonaan uudelleen

## muotoinen malli

Kirjoita kukin nimi vain kerran päällekkäisyyksien välttämiseksi ja yritä ilmaista se selkeästi yhdellä rivillä. Viitemuoto on seuraava

```
# tiedoston nimi

## Toiminnon nimi (parametri)

Käyttökuvaus

parametri:
- `xx` : Tarkoitus
  - parametri
    - `a` : Tarkoitus
  - Palautusarvo: kuvaus

Palautusarvo: Kuvaus
```