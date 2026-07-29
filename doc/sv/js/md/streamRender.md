# md/streamRender.js

Markdown streaming-rendering

## default(container, source)

Strömmande rendering av Markdown-text till den angivna DOM-behållaren, stöder skrivmaskinsmarköreffekter och automatisk rullning

parameter:
- `container` : DOM-behållarelement som är värd för renderat innehåll
- `source` : ReadableStream-textdatakälla

Returvärde:

- `cancel` : Funktion för att stoppa rendering och dataströmsläsning
- `setStop` : Funktion för att ställa in om automatisk rullning ska pausas
  - parameter
    - `val` : Booleskt värde om det ska pausas eller inte