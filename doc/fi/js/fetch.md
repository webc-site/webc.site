# fetch.js

Verkkopyyntötyökalutoiminto, joka perustuu haun kapselointiin

## F(url, opt)

Lähetä verkkopyyntö ja palauta vastausobjekti

parametri:
- `url` : Pyydä osoite
- `opt` : `fetch` vaihtoehtoobjekti

Palautusarvo: Vastausobjekti

## f(attr)

Korkeamman asteen funktio, joka kääri pyynnön ja jäsentää palautetun sisällön määritetyssä muodossa

parametri:
- `attr` : vastauksen rungon jäsennysmääritteen nimi

Palautusarvo: toiminto, joka pyytää ja jäsentää sisältöä asynkronisesti
  - parametri
    - `url` : Pyydä osoite
    - `opt` : `fetch` vaihtoehtoobjekti
  - Palautusarvo: jäsennetty sisältö

## fTxt

Lähetä verkkopyyntö ja palauta vastauksen runko tekstimuodossa

parametri:
- `url` : Pyydä osoite
- `opt` : `fetch` vaihtoehtoobjekti

Palautusarvo: vastausteksti

## fJson(url, opt)

Lähetä verkkopyyntö ja jäsennä ja palauta vastauksen runko JSON-muodossa

parametri:
- `url` : Pyydä osoite
- `opt` : `fetch` vaihtoehtoobjekti

Palautusarvo: jäsennetty JSON-objekti

## fBin(url, opt)

Lähetä verkkopyyntö ja palauta vastauksen runko binäärisenä tavutaulukkona

parametri:
- `url` : Pyydä osoite
- `opt` : `fetch` vaihtoehtoobjekti

Palautusarvo: tavutaulukko