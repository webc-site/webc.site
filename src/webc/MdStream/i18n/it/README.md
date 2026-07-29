# Rendering in streaming del testo Markdown

- Analizza e visualizza Markdown in modo incrementale
- Collabora con l'elemento principale scorrevole per scorrere automaticamente quando il contenuto supera lo schermo
- Metti in pausa lo scorrimento automatico quando fai clic o scorri verso l'alto, riprendi quando scorri verso il basso
- Visualizza automaticamente gli indicatori di stato della digitazione

## Utilizza la demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Streaming del rendering dei dati tramite la funzione del generatore asincrono restituito
el.gen = async function* () {
  rendimento "# titolo\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    rendimento "- oggetto " + i + "\n";
  }
};
</script>
```

## proprietà

| nome dell'attributo | tipo | illustrare |
| :--- | :--- | :--- |
| `gen` | `Function` | Funzione che restituisce un iteratore/generatore asincrono, cancella il contenuto ed esegue nuovamente il rendering dopo l'impostazione |

## stile

| Classe/Etichetta | illustrare |
| :--- | :--- |
| `Md` | Classe aggiunta automaticamente al componente durante il montaggio, imposta lo stile Markdown |
| `i.T` | Indicatore dello stato di digitazione aggiunto automaticamente alla fine durante l'immissione dei dati |