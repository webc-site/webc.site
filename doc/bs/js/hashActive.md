# hashActive.js

Isticanje navigacijskih linkova na osnovu URL sidrišta i pomicanja u okvirima prikaza

## default(link_li, cls)

Automatski označi navigacijske veze koje odgovaraju trenutno vidljivom području na osnovu položaja pomicanja stranice i promjena URL sidrene točke.

parametar:
- `link_li` : Lista DOM elemenata veza za navigaciju
- `cls` : Ime aktivne CSS klase, zadano `"A"`

Povratna vrijednost: Otkažite sve funkcije čišćenja slušanja