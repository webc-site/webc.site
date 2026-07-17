# Toast.js

Richiesta di messaggio pop-up toast

## toast(render, timeout)

Mostra la finestra pop-up del prompt standard

parametro:
- `render`: funzione di rendering, utilizzata per personalizzare il contenuto pop-up
  - parametro
    - `el`: elemento DOM della finestra pop-up
- `timeout`: ritardo in secondi per lo spegnimento automatico, valore predefinito 9, nessuno spegnimento automatico quando è 0

Valore restituito: elemento DOM della finestra pop-up

## toastErr(render, timeout)

Mostra popup messaggio di errore

parametro:
- `render`: funzione di rendering, utilizzata per personalizzare il contenuto pop-up
  - parametro
    - `el`: elemento DOM della finestra pop-up
- `timeout`: ritardo in secondi per lo spegnimento automatico, valore predefinito 9, nessuno spegnimento automatico quando è 0

Valore restituito: elemento DOM della finestra pop-up di errore