# hashActive.js

Markering av navigeringslänk baserad på URL-ankare och rullning av visningsport

## default(link_li, cls)

Markera automatiskt navigeringslänkar som motsvarar det för närvarande synliga området baserat på sidrullningsposition och ändringar av URL-ankarpunkt.

parameter:
- `link_li` : Navigationslänk DOM-elementlista
- `cls` : Aktivt CSS-klassnamn, standard `"A"`

Returvärde: Avbryt alla lyssningsrensningsfunktioner