# md/streamRender.js

Rendering in streaming Markdown

## default(container, source)

Rendering in streaming del testo Markdown nel contenitore DOM specificato, con supporto degli effetti del cursore della macchina da scrivere e dello scorrimento automatico

parametro:
- `container`: elemento contenitore DOM che ospita contenuto visualizzato
- `source`: origine dati di testo ReadableStream

Valore restituito:

- `cancel` : Funzione per interrompere il rendering e la lettura del flusso di dati
- `setStop` : Funzione per impostare se mettere in pausa lo scorrimento automatico
  - parametro
    - `val` : valore booleano se mettere in pausa o meno