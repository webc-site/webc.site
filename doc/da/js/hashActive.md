# hashActive.js

Fremhævelse af navigationslink baseret på URL-ankre og rulning af viewport

## default(link_li, cls)

Fremhæv automatisk navigationslinks svarende til det aktuelt synlige område baseret på siderulningsposition og ændringer i URL-ankerpunkt.

parameter:
- `link_li` : Navigationslink DOM-elementliste
- `cls` : Aktiv CSS-klassenavn, standard `"A"`

Returværdi: Annuller alle lytteoprydningsfunktioner