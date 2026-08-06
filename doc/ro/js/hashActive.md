# hashActive.js

Evidențierea linkului de navigare pe baza ancorelor URL și a derulării ferestrelor de vizualizare

## default(link_li, cls)

Evidențiați automat linkurile de navigare corespunzătoare zonei vizibile în prezent, pe baza poziției de derulare a paginii și a modificărilor punctului de ancorare URL.

parametru:
- `link_li` : Lista de elemente DOM a linkului de navigare
- `cls` : Nume de clasă CSS activ, implicit `"A"`

Valoare returnată: Anulați toate funcțiile de curățare de ascultare