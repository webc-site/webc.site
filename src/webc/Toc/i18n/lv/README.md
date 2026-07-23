# Direktoriju navigācijas komponents

- Vertikāls Flex izkārtojums
- Atbalsta vārdnīcu direktoriju datu nodošanai
- Noklikšķiniet, lai automātiski ielādētu Markdown tekstu
- Ielādes statusa displejs Ing animācija

## Izmantojiet demonstrāciju

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Lietot komponentus"
};
</script>
```

## saskarne

### Īpašības un metodes

- `toc.li`: iestata direktorija objektu vai ierakstu sarakstu, piemēram, `{ key: title }`
- `toc.mdUrl`: iestatiet pieprasījuma URL ģenerēšanas funkciju `(key, lang) => url` vai prefiksa virkni
- `toc.target`: iestatiet vai saistiet mērķa satura mezglu (piemēram, `c-md`), automātiski apstrādājiet `ing` gaidīšanu un satura aizpildīšanu
- `toc.load(key)`: manuāli aktivizējiet atbilstošās atslēgas ielādi