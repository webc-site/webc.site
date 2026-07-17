# md/streamRender.js

Afmerk-stroomweergawe

## default(container, source)

Stroom weergawe van Markdown-teks na die gespesifiseerde DOM-houer, ondersteun tikmasjienwyser-effekte en outomatiese blaai

parameter:
- `container` : DOM-houerelement wat gelewerde inhoud huisves
- `source` : ReadableStream-teksdatabron

Terugkeerwaarde:

- `cancel` : Funksie om lewering en datastroomlees te stop
- `setStop` : Funksie om te stel of outomatiese blaai onderbreek moet word
  - parameter
    - `val` : Boole-waarde of om te onderbreek of nie