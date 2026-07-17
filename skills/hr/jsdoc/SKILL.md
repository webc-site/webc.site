---
name: jsdoc
description: src/js dokument automatski generiran
---

## Trčanje koraka

1. Pokrenite `./sh/jsDoc.js` za prikaz funkcija s dokumentacijom koja nedostaje (ako nema izlaza, nema potrebe za dodavanjem).
2. Prema popisu izlaznih datoteka, pročitajte postojeće dokumente i kodove jedan po jedan i dovršite ih (obradite ih redom i razbijte ih jedan po jedan).

## Zahtjevi za dokumentaciju

Ako je izvoz funkcija, napišite
- Parametri i povratne vrijednosti:
  - Pišite odgovarajuće opise samo ako postoje parametri ili povratne vrijednosti, inače ih nemojte pisati.
  - Parametri se uvode pomoću neuređenih popisa.
  - Ako je povratna vrijednost niz, upotrijebite neuređeni popis da ga opišete jedan po jedan (inače napišite izravno, `Povratna vrijednost: opis`, samo jedan redak).
  - Ako su parametri ili povratna vrijednost funkcije, upotrijebite pod-neuređene popise za opis parametara i povratnih vrijednosti (ako ih nema, nemojte ih pisati).

Ako je izvoz konstanta, unesite što jest, samo jedan redak

- Koristite jezgrovit, stručan jezik i izbjegavajte korištenje pridjeva.
- Revidirajte postojeći dokument, nemojte ga u potpunosti prepisivati

## predložak formata

Napišite svako ime samo jednom kako biste izbjegli dupliranje i pokušajte ga jasno izraziti u jednom retku. Format reference je sljedeći

```
# naziv datoteke

## Naziv funkcije (parametar)

Opis uporabe

parametar:
- `xx` : Svrha
  - parametar
    - `a` : Svrha
  - Povratna vrijednost: opis

Povratna vrijednost: Opis
```