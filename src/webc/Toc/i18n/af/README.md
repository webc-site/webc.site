# Gidsnavigasiekomponent

- Vertikale buiguitleg
- Ondersteun woordeboek om gidsdata deur te gee
- Klik om Markdown-teks outomaties te laai
- Laai status vertoon Ing animasie

## Gebruik die demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Gebruik komponente"
};
</script>
```

## koppelvlak

### Eienskappe en metodes

- `toc.li`: Stel 'n gidsobjek of lys van inskrywings, soos `{ key: title }`
- `toc.mdUrl`: Stel versoek-URL generering funksie `(key, lang) => url` of voorvoegselstring
- `toc.target`: Stel of assosieer die teikeninhoudnodus (soos `c-md`), hanteer outomaties `ing` wag en inhoudvul
- `toc.load(key)`: Aktiveer die laai van die ooreenstemmende sleutel handmatig