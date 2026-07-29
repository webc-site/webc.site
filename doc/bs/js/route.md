# route.js

Jednostrani front-end rutiranje upravljanja

## nowUrl()

Dobijte trenutnu URL putanju sa uklonjenom vodećim kosom crtom

Povratna vrijednost: trenutni niz putanje

## route(hook)

Registrirajte povratni poziv slušanja za promjene rute. Prilikom registracije, izvršit će se jednom sa trenutnom putanjom.

parametar:
- `hook` : Funkcija povratnog poziva praćenja rute
  - parametar
    - `url` : trenutna staza
    - `pre` : zadnja staza

Povratna vrijednost: Neregistrirana funkcija čišćenja

## setPre(url)

Sačuvajte posljednji snimljeni URL

parametar:
- `url` : niz putanje

## preUrl()

Dobijte URL posljednjeg zapisa

Povratna vrijednost: posljednji niz putanje

## refresh(url)

Prisilite da se svi povratni pozivi za slušanje rute aktiviraju na navedenoj stazi i ažurirajte pre

parametar:
- `url` : ciljna staza, zadana trenutna staza

## removeSlash(url)

Uklonite kose crte iz zaglavlja putanje

parametar:
- `url` : niz putanje

Povratna vrijednost: putanja nakon uklanjanja vodeće kose crte

## setUrl(url)

Ažuriranje URL statusa adresne trake pretraživača

parametar:
- `url` : ciljna staza

Povratna vrijednost: 1 ako se putanja stvarno promijeni

## goto(url)

Ažurirajte adresu pretraživača i pokrenite osvježavanje rute

parametar:
- `url` : ciljna staza