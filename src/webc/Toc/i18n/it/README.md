# Componente di navigazione delle directory

- Disposizione flessibile verticale
- Dizionario di supporto per passare i dati della directory
- Fare clic per caricare automaticamente il testo Markdown
- Visualizzazione dello stato di caricamento Animazione Ing

## Utilizza la demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Utilizza componenti"
};
</script>
```

## interfaccia

### Proprietà e metodi

- `toc.li`: imposta un oggetto directory o un elenco di voci, come `{ key: title }`
- `toc.mdUrl`: imposta la funzione di generazione dell'URL della richiesta `(key, lang) => url` o la stringa del prefisso
- `toc.target`: imposta o associa il nodo del contenuto di destinazione (come `c-md`), gestisce automaticamente `ing` l'attesa e il riempimento del contenuto
- `toc.load(key)`: attiva manualmente il caricamento della chiave corrispondente