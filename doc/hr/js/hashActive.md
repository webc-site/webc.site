# hashActive.js

Označavanje navigacijske veze na temelju sidrišta URL-a i pomicanja okvira za prikaz

## default(link_li, cls)

Automatski označi navigacijske veze koje odgovaraju trenutno vidljivom području na temelju položaja pomicanja stranice i promjena sidrišne točke URL-a.

parametar:
- `link_li` : Popis DOM elemenata veze za navigaciju
- `cls` : Ime aktivne CSS klase, zadano `"A"`

Povratna vrijednost: Otkaži sve funkcije čišćenja slušanja