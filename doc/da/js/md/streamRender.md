# md/streamRender.js

Markdown streaming-gengivelse

## default(container, source)

Streaming af gengivelse af Markdown-tekst til den angivne DOM-beholder, understøtter skrivemaskinemarkøreffekter og automatisk rulning

parameter:
- `container` : DOM-beholderelement, der hoster gengivet indhold
- `source` : ReadableStream-tekstdatakilde

Returværdi:

- `cancel` : Funktion til at stoppe gengivelse og datastrømlæsning
- `setStop` : Funktion til at indstille, om automatisk rulning skal standses
  - parameter
    - `val` : Boolesk værdi, om den skal holde pause eller ej