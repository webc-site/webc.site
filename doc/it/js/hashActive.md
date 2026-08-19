# hashActive.js

Evidenziazione del collegamento di navigazione in base agli ancoraggi URL e allo scorrimento del viewport

## default(link_li, cls)

Evidenzia automaticamente i collegamenti di navigazione corrispondenti all'area attualmente visibile in base alla posizione di scorrimento della pagina e alle modifiche del punto di ancoraggio dell'URL.

parametro:
- `link_li`: elenco degli elementi DOM del collegamento di navigazione
- `cls`: nome della classe CSS attiva, predefinito `"A"`

Valore restituito: annulla tutte le funzioni di pulizia dell'ascolto