# route.js

Yhden sivun käyttöliittymän reitityksen hallinta

## nowUrl()

Hae nykyisen URL-osoitteen polku, josta alkuviiva on poistettu

Paluuarvo: nykyinen polkumerkkijono

## route(hook)

Rekisteröi kuuntelusoitto reitin muutoksia varten. Rekisteröitymisen yhteydessä se suoritetaan kerran nykyisellä polulla.

parametri:
- `hook` : Reitin tarkkailun takaisinsoittotoiminto
  - parametri
    - `url` : nykyinen polku
    - `pre` : viimeinen polku

Palautusarvo: Rekisteröimätön puhdistustoiminto

## setPre(url)

Tallenna viimeksi tallennettu URL-osoite

parametri:
- `url` : polkumerkkijono

## preUrl()

Hanki viimeisen tietueen URL-osoite

Palautusarvo: viimeinen polkumerkkijono

## refresh(url)

Pakota kaikki reitin kuuntelun takaisinkutsut käynnistymään määritetyllä polulla ja päivitä pre

parametri:
- `url` : kohdepolku, oletusarvoinen nykyinen polku

## removeSlash(url)

Poista kauttaviivat polun otsikoista

parametri:
- `url` : polkumerkkijono

Palautusarvo: polku vinoviivan poistamisen jälkeen

## setUrl(url)

Päivitä selaimen osoitepalkin URL-tila

parametri:
- `url` : kohdepolku

Palautusarvo: 1, jos polku todella muuttuu

## goto(url)

Päivitä selaimen osoite ja käynnistä reitin päivitys

parametri:
- `url` : kohdepolku