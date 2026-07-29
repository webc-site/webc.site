# hashActive.js

Zvýraznenie navigačného odkazu na základe ukotvenia adresy URL a posúvania zobrazenej oblasti

## default(link_li, cls)

Automaticky zvýrazňovať navigačné odkazy zodpovedajúce aktuálne viditeľnej oblasti na základe zmien pozície posúvania stránky a kotviaceho bodu adresy URL.

parameter:
- `link_li` : Zoznam prvkov DOM navigačného odkazu
- `cls` : Aktívny názov triedy CSS, predvolený `"A"`

Návratová hodnota: Zrušte všetky funkcie čistenia počúvania