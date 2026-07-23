# Verzeechnes Navigatioun Komponent

- Vertikal Flex Layout
- Ënnerstëtzt Wierderbuch fir an Verzeechnesdaten ze passéieren
- Klickt fir automatesch Markdown Text ze lueden
- Lueden Status Display Ing Animatioun

## Benotzt d'Demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Komponenten benotzen"
};
</script>
```

## Interface

### Eegeschaften a Methoden

- `toc.li`: Setzt en Verzeichnisobjekt oder Lëscht vun Entréen, wéi `{ key: title }`
- `toc.mdUrl`: Set Ufro URL Generatioun Funktioun `(key, lang) => url` oder Präfix String
- `toc.target`: Setzt oder assoziéiert den Zilinhaltsknuet (wéi `c-md`), handhabt automatesch `ing` Waarden an Inhalterausfëllen
- `toc.load(key)`: Manuell d'Luede vum entspriechende Schlëssel ausléisen