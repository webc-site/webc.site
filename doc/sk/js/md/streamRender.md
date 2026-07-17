# md/streamRender.js

Vykresľovanie streamovania Markdown

## default(container, source)

Streamovanie vykresľovania textu Markdown do určeného kontajnera DOM s podporou efektov kurzora na písacom stroji a automatického posúvania

parameter:
- `container` : Kontajnerový prvok DOM hosťujúci vykreslený obsah
- `source` : Zdroj textových údajov ReadableStream

Návratová hodnota:

- `cancel` : Funkcia na zastavenie vykresľovania a čítania dátového toku
- `setStop` : Funkcia na nastavenie, či sa má pozastaviť automatické posúvanie
  - parameter
    - `val` : Booleovská hodnota, či sa má pozastaviť alebo nie