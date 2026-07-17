---
name: jsdoc
description: src/js dokument se automatski generira
---

## Pokrenite korake

1. Pokrenite `./sh/jsDoc.js` da vidite funkcije sa nedostajućom dokumentacijom (ako nema izlaza, nema potrebe da ga dodajete).
2. Prema listi izlaznih datoteka, pročitajte postojeće dokumente i kodove jedan po jedan i dovršite ih (obradite ih u nizu i razbijte ih jedan po jedan).

## Zahtjevi za dokumentaciju

Ako je izvoz funkcija, napišite
- Parametri i povratne vrijednosti:
  - Napišite odgovarajuće opise samo ako postoje parametri ili povratne vrijednosti, inače ih nemojte pisati.
  - Parametri se uvode korišćenjem neuređenih lista.
  - Ako je povratna vrijednost niz, koristite neuređenu listu da je opišete jednu po jednu (u suprotnom pišite direktno, `Povratna vrijednost: opis`, samo jedan red).
  - Ako su parametri ili povratna vrijednost funkcije, koristite pod-neuređene liste da opišete parametre i povratne vrijednosti (ako ih nema, nemojte ih pisati).

Ako je izvoz konstanta, uvedite šta je to, samo jedan red

- Koristite sažet, profesionalan jezik i izbjegavajte korištenje prideva.
- Revidirajte postojeći dokument, nemojte ga potpuno prepisivati

## format šablona

Napišite svako ime samo jednom kako biste izbjegli dupliciranje i pokušajte ga jasno izraziti u jednom redu. Referentni format je sljedeći

```
# naziv datoteke

## Naziv funkcije (parametar)

Opis upotrebe

parametar:
- `xx` : Svrha
  - parametar
    - `a` : Svrha
  - Povratna vrijednost: opis

Povratna vrijednost: Opis
```