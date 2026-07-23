# Directory Navigation Component

- Lodret Flex Layout
- Støtteordbog til at videregive biblioteksdata
- Klik for automatisk at indlæse Markdown-tekst
- Visning af indlæsningsstatus Ing animation

## Brug demoen

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Brug komponenter"
};
</script>
```

## interface

### Egenskaber og metoder

- `toc.li`: Indstiller et biblioteksobjekt eller en liste over poster, såsom `{ key: title }`
- `toc.mdUrl`: Indstil anmodnings-URL-genereringsfunktion `(key, lang) => url` eller præfiksstreng
- `toc.target`: Indstil eller tilknyt målindholdsknuden (såsom `c-md`), håndter automatisk `ing` venter og indholdsudfyldning
- `toc.load(key)`: Udløs manuelt indlæsningen af ​​den tilsvarende nøgle