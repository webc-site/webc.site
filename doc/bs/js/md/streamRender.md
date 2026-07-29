# md/streamRender.js

Markdown streaming renderiranje

## default(container, source)

Streaming rendering Markdown teksta u navedeni DOM kontejner, podržava efekte kursora pisaće mašine i automatsko pomicanje

parametar:
- `container` : DOM element kontejnera koji hostira renderirani sadržaj
- `source` : ReadableStream tekstualni izvor podataka

Povratna vrijednost:

- `cancel` : Funkcija za zaustavljanje renderiranja i čitanja toka podataka
- `setStop` : Funkcija za postavljanje da li će se pauzirati automatsko pomicanje
  - parametar
    - `val` : Boolean vrijednost da li pauzirati ili ne