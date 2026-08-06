# route.js

Enkeltsides front-end rutingadministrasjon

## nowUrl()

Få den gjeldende URL-banen med den innledende skråstreken fjernet

Returverdi: gjeldende banestreng

## route(hook)

Registrer tilbakeringingen for ruteendringer. Ved registrering vil det bli utført én gang med gjeldende bane.

parameter:
- `hook` : Ruteovervåking tilbakeringingsfunksjon
  - parameter
    - `url` : gjeldende bane
    - `pre` : siste bane

Returverdi: Uregistrert oppryddingsfunksjon

## setPre(url)

Lagre den sist registrerte URL-adressen

parameter:
- `url` : banestreng

## preUrl()

Få URL-en til den siste posten

Returverdi: siste banestreng

## refresh(url)

Tving alle tilbakeringinger av rutelytting til å bli utløst på den angitte banen og oppdater før

parameter:
- `url` : målbane, standard gjeldende bane

## removeSlash(url)

Fjern skråstreker fra baneoverskrifter

parameter:
- `url` : banestreng

Returverdi: bane etter fjerning av den innledende skråstreken

## setUrl(url)

Oppdater nettleserens adresselinjes URL-status

parameter:
- `url` : målbane

Returverdi: 1 hvis banen faktisk endres

## goto(url)

Oppdater nettleseradressen og utløs en ruteoppdatering

parameter:
- `url` : målbane