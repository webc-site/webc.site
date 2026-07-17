# md/streamRender.js

Markdown streaming-gjengivelse

## default(container, source)

Strømmer gjengivelse av Markdown-tekst til den angitte DOM-beholderen, støtter skrivemaskinmarkøreffekter og automatisk rulling

parameter:
- `container` : DOM-beholderelement som er vert for gjengitt innhold
- `source` : ReadableStream-tekstdatakilde

Returverdi:

- `cancel` : Funksjon for å stoppe gjengivelse og datastrømlesing
- `setStop` : Funksjon for å angi om automatisk rulling skal settes på pause
  - parameter
    - `val` : Boolsk verdi om den skal settes på pause eller ikke