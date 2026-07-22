# md/streamRender.js

Markdown streaming renderiranje

## default(container, source)

Strujanje prikazivanja Markdown teksta u navedeni DOM spremnik, podržavajući efekte pokazivača pisaćeg stroja i automatsko pomicanje

parametar:
- `container` : DOM element spremnika koji hostira prikazani sadržaj
- `source` : ReadableStream tekstualni izvor podataka

Povratna vrijednost:

- `cancel` : Funkcija za zaustavljanje iscrtavanja i čitanja toka podataka
- `setStop` : Funkcija za postavljanje treba li pauzirati automatsko pomicanje
  - parametar
    - `val` : Booleova vrijednost treba li pauzirati ili ne