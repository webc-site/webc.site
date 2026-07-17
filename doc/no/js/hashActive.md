# hashActive.js

Utheving av navigasjonslenker basert på URL-ankere og rulling av visningsport

## default(link_li, cls)

Uthev automatisk navigasjonslenker som tilsvarer det synlige området basert på rulleposisjon og endringer i URL-ankerpunkt.

parameter:
- `link_li` : Navigasjonslenke DOM-elementliste
- `cls` : Aktiv CSS-klassenavn, standard `"A"`

Returverdi: Avbryt alle lytterensefunksjoner