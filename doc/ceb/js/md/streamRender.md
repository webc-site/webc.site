# md/streamRender.js

Markdown streaming rendering

## default(container, source)

Pag-streaming sa paghubad sa Markdown nga teksto ngadto sa gipiho nga sudlanan sa DOM, pagsuporta sa mga epekto sa cursor sa typewriter ug awtomatikong pag-scroll

parameter:
- `container` : Ang sulud sa sulud sa DOM nag-host sa sulud
- `source` : Tinubdan sa datos sa teksto sa ReadableStream

Ibalik nga bili:

- `cancel` : Pag-andar sa paghunong sa paghubad ug pagbasa sa stream sa datos
- `setStop` : Function aron itakda kung ihunong ba ang awtomatikong pag-scroll
  - parametro
    - `val` : Boolean nga bili kung mohunong o dili