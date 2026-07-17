# dom.js

Dokumentoi muuttujien lyhenteet ja pikakuvaketoiminnot

## D

`document` Pikakuvakeviittaus objektiin

## B

`document.body` Pikakuvakeviittaus objektiin

## newEl

Luo DOM-elementtejä

parametri:
- `tagName` : elementin tunnisteen nimi

Palautusarvo: äskettäin luotu DOM-elementti

## newLi(...tag_li)

Luo useita DOM-elementtejä erissä

parametri:
- `tag_li` : tunnisteen nimiluettelo

Palautusarvo:
- Taulukko, joka sisältää kaikki äskettäin luodut DOM-elementit

## cE(name, cls)

Rekisteröi verkkokomponenttien mukautettuja elementtejä

parametri:
- `name` : Muokatun elementin nimi, `c-` etuliite lisätään automaattisesti
- `cls` : mukautetun elementin luokka