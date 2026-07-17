# route.js

Ühe lehe esiotsa marsruutimise haldus

## nowUrl()

Hankige praegune URL-i tee, mille ees olev kaldkriips on eemaldatud

Tagastusväärtus: praegune tee string

## route(hook)

Registreerige kuulamise tagasihelistamine marsruudi muutmiseks. Registreerimisel käivitatakse see üks kord praeguse teega.

parameeter:
- `hook` : marsruudi jälgimise tagasihelistamise funktsioon
  - parameeter
    - `url` : praegune tee
    - `pre` : viimane tee

Tagastusväärtus: registreerimata puhastusfunktsioon

## setPre(url)

Salvestage viimati salvestatud URL

parameeter:
- `url` : tee string

## preUrl()

Hankige viimase kirje URL

Tagastusväärtus: viimane tee string

## refresh(url)

Sunnige kõik marsruudi kuulamise tagasihelistamised määratud teel käivitama ja värskendage eel

parameeter:
- `url` : sihttee, praegune vaiketee

## removeSlash(url)

Eemaldage tee päistest kaldkriipsud

parameeter:
- `url` : tee string

Tagastatav väärtus: tee pärast kaldkriipsu eemaldamist

## setUrl(url)

Värskendage brauseri aadressiriba URL-i olekut

parameeter:
- `url` : sihttee

Tagastusväärtus: 1, kui tee tegelikult muutub

## goto(url)

Värskendage brauseri aadressi ja käivitage marsruudi värskendamine

parameeter:
- `url` : sihttee