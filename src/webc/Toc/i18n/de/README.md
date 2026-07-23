# Verzeichnisnavigationskomponente

- Vertikales Flex-Layout
- Unterstützen Sie das Wörterbuch zur Übergabe von Verzeichnisdaten
- Klicken Sie hier, um den Markdown-Text automatisch zu laden
- Ladestatusanzeige Ing-Animation

## Nutzen Sie die Demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  „doc/use“: „Komponenten verwenden“
};
</script>
```

## Schnittstelle

### Eigenschaften und Methoden

- `toc.li`: Legt ein Verzeichnisobjekt oder eine Liste von Einträgen fest, z. B. `{ key: title }`
- `toc.mdUrl`: Legen Sie die Anforderungs-URL-Generierungsfunktion `(key, lang) => url` oder die Präfixzeichenfolge fest
- `toc.target`: Legen Sie den Zielinhaltsknoten (z. B. `c-md`) fest oder verknüpfen Sie ihn, verarbeiten Sie automatisch das Warten auf `ing` und das Füllen von Inhalten
- `toc.load(key)`: Das Laden des entsprechenden Schlüssels manuell auslösen