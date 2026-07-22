# route.js

Upravljanje usmjeravanjem na prednjoj strani na jednoj stranici

## nowUrl()

Dobijte trenutni URL put s uklonjenom početnom kosom crtom

Povratna vrijednost: trenutni niz staze

## route(hook)

Registrirajte povratni poziv slušanja za promjene rute. Prilikom registracije, izvršit će se jednom s trenutnom stazom.

parametar:
- `hook` : Funkcija povratnog poziva praćenja rute
  - parametar
    - `url` : trenutni put
    - `pre` : zadnji put

Povratna vrijednost: Neregistrirana funkcija čišćenja

## setPre(url)

Spremite posljednji snimljeni URL

parametar:
- `url` : niz staze

## preUrl()

Dobijte URL posljednjeg zapisa

Povratna vrijednost: zadnji niz staze

## refresh(url)

Prisilno aktiviranje svih povratnih poziva slušanja rute na navedenoj stazi i ažuriranje pre

parametar:
- `url` : ciljna staza, zadana trenutna staza

## removeSlash(url)

Uklonite kose crte iz zaglavlja puta

parametar:
- `url` : niz staze

Povratna vrijednost: put nakon uklanjanja početne kose crte

## setUrl(url)

Ažurirajte status URL-a adresne trake preglednika

parametar:
- `url` : ciljna staza

Povratna vrijednost: 1 ako se staza stvarno promijeni

## goto(url)

Ažurirajte adresu preglednika i pokrenite osvježavanje rute

parametar:
- `url` : ciljna staza