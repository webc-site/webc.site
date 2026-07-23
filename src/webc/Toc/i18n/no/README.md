# Katalognavigasjonskomponent

- Vertikal Flex Layout
- Støtte ordbok for å sende inn katalogdata
- Klikk for å laste ned Markdown-tekst automatisk
- Lastestatusvisning Ing animasjon

## Bruk demoen

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Bruk komponenter"
};
</script>
```

## grensesnitt

### Egenskaper og metoder

- `toc.li`: Angir et katalogobjekt eller en liste over oppføringer, for eksempel `{ key: title }`
- `toc.mdUrl`: Angi funksjonen for generering av forespørsels-URL `(key, lang) => url` eller prefiksstreng
- `toc.target`: Angi eller tilknytt målinnholdsnoden (som `c-md`), håndter automatisk `ing` venting og innholdsfylling
- `toc.load(key)`: Utløs lasting av den tilsvarende nøkkelen manuelt