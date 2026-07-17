# hashActive.js

Markering van navigatielinks op basis van URL-ankers en scrollen in de viewport

## default(link_li, cls)

Markeer automatisch navigatielinks die overeenkomen met het momenteel zichtbare gebied op basis van de paginascrollpositie en wijzigingen in het URL-ankerpunt.

parameter:
- `link_li` : Navigatielink DOM-elementenlijst
- `cls` : Actieve CSS-klassenaam, standaard `"A"`

Retourwaarde: Annuleer alle luisteropschoningsfuncties