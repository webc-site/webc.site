# md/streamRender.js

Markdown-Streaming-Rendering

## default(container, source)

Streaming-Rendering von Markdown-Text in den angegebenen DOM-Container, unterstützt Schreibmaschinen-Cursor-Effekte und automatisches Scrollen

Parameter:
- `container`: DOM-Containerelement, das gerenderten Inhalt hostet
- `source`: ReadableStream-Textdatenquelle

Rückgabewert:

- `cancel`: Funktion zum Stoppen des Renderns und Lesens des Datenstroms
- `setStop`: Funktion zum Festlegen, ob das automatische Scrollen angehalten werden soll
  - Parameter
    - `val`: Boolescher Wert, ob pausiert werden soll oder nicht