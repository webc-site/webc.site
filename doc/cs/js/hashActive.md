# hashActive.js

Zvýraznění navigačního odkazu na základě ukotvení adresy URL a posouvání výřezu

## default(link_li, cls)

Automaticky zvýrazňovat navigační odkazy odpovídající aktuálně viditelné oblasti na základě změny polohy posouvání stránky a kotevního bodu adresy URL.

parametr:
- `link_li` : Seznam prvků DOM navigačního odkazu
- `cls` : Název aktivní třídy CSS, výchozí `"A"`

Návratová hodnota: Zruší všechny funkce čištění naslouchání