# Katalognavigeringskomponent

- Vertikal Flex Layout
- Stödordbok för att skicka in katalogdata
- Klicka för att automatiskt ladda Markdown-text
- Visning av laddningsstatus Ing animation

## Använd demon

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Använd komponenter"
};
</script>
```

## gränssnitt

### Egenskaper och metoder

- `toc.li`: Ställer in ett katalogobjekt eller en lista med poster, till exempel `{ key: title }`
- `toc.mdUrl`: Ställ in funktionen för att skapa webbadress för begäran `(key, lang) => url` eller prefixsträng
- `toc.target`: Ställ in eller associera målinnehållsnoden (som `c-md`), hantera automatiskt `ing` väntan och innehållsfyllning
- `toc.load(key)`: Aktivera laddningen av motsvarande nyckel manuellt