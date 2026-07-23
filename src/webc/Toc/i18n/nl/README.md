# Component voor mapnavigatie

- Verticale flexibele lay-out
- Ondersteuning van woordenboek om directorygegevens door te geven
- Klik om Markdown-tekst automatisch te laden
- Weergave laadstatus Ing-animatie

## Gebruik de demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Gebruik componenten"
};
</script>
```

## interface

### Eigenschappen en methoden

- `toc.li`: Stelt een mapobject of lijst met vermeldingen in, zoals `{ key: title }`
- `toc.mdUrl`: Stel de functie voor het genereren van verzoek-URL's in `(key, lang) => url` of prefixstring
- `toc.target`: stel het doelinhoudsknooppunt in of koppel het (zoals `c-md`), handel automatisch `ing` wachten en inhoudsvulling af
- `toc.load(key)`: Activeer handmatig het laden van de bijbehorende sleutel