---
name: jsdoc
description: document src/js generat automat
---

## Rulați pași

1. Rulați `./sh/jsDoc.js` pentru a vedea funcțiile cu documentație lipsă (dacă nu există rezultate, nu este nevoie să o adăugați).
2. Conform listei de fișiere de ieșire, citiți documentele și codurile existente unul câte unul și completați-le (procesați-le în ordine și spargeți-le unul câte unul).

## Cerințe de documentare

Dacă exportul este o funcție, scrieți
- Parametri și valori returnate:
  - Scrieți descrierile corespunzătoare doar dacă există parametri sau valori returnate, altfel nu le scrieți.
  - Parametrii sunt introduși folosind liste neordonate.
  - Dacă valoarea returnată este o matrice, utilizați o listă neordonată pentru a o descrie una câte una (în caz contrar, scrieți direct, `Valoare returnată: descriere`, doar o linie).
  - Dacă parametrii sau valoarea returnată sunt funcții, utilizați liste subordonate pentru a descrie parametrii și valorile returnate (dacă nu există, nu le scrieți).

Dacă exportul este o constantă, introduceți ceea ce este, doar o linie

- Folosiți un limbaj concis și profesional și evitați utilizarea adjectivelor.
- Revizuiți documentul existent, nu îl rescrieți complet

## șablon de format

Scrieți fiecare nume o singură dată pentru a evita dublarea și încercați să-l exprimați clar într-un singur rând. Formatul de referință este următorul

```
# nume de fișier

## Nume funcție (parametru)

Descrierea utilizării

parametru:
- `xx` : Scop
  - parametru
    - `a` : Scop
  - Valoarea returnată: descriere

Valoarea returnată: Descriere
```