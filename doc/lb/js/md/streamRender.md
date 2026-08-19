# md/streamRender.js

Markdown Streaming Rendering

## default(container, source)

Streaming Rendering vum Markdown Text an de spezifizéierte DOM Container, ënnerstëtzt Schreifmaschinn Cursor Effekter an automatesch Scrollen

parameter:
- `container` : DOM-Container-Element Hosting rendered Inhalt
- `source` : ReadableStream Textdatenquell

Retour Wäert:

- `cancel` : Funktioun fir d'Rendering an d'Liesen vum Datenstream ze stoppen
- `setStop` : Funktioun fir festzestellen ob automatesch Scrollen pauséiert ginn
  - parameter
    - `val` : Boolesche Wäert ob et ze pausen oder net