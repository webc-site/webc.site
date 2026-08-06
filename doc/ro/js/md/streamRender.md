# md/streamRender.js

Redarea în flux Markdown

## default(container, source)

Redarea în flux a textului Markdown în containerul DOM specificat, acceptând efectele cursorului de mașină de scris și derularea automată

parametru:
- `container` : elementul container DOM care găzduiește conținut redat
- `source` : sursă de date text ReadableStream

Valoarea returnată:

- `cancel` : Funcție pentru a opri redarea și citirea fluxului de date
- `setStop` : Funcție pentru a seta dacă se întrerupe derularea automată
  - parametru
    - `val` : valoare booleană dacă se întrerupe sau nu