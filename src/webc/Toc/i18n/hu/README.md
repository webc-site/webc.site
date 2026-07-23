# Címtárnavigációs komponens

- Függőleges Flex elrendezés
- Támogatási szótár a címtáradatok átadásához
- Kattintson a Markdown szöveg automatikus betöltéséhez
- Betöltési állapot kijelző Ing animáció

## Használd a demót

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Alkatrészek használata"
};
</script>
```

## felület

### Tulajdonságok és módszerek

- `toc.li`: beállít egy címtárobjektumot vagy bejegyzések listáját, például `{ key: title }`
- `toc.mdUrl`: Állítsa be a kérelem URL-generáló funkcióját `(key, lang) => url` vagy előtagkarakterláncot
- `toc.target`: A cél tartalom csomópont beállítása vagy társítása (például `c-md`), automatikusan kezeli a `ing` várakozást és a tartalom kitöltését
- `toc.load(key)`: Manuálisan indítsa el a megfelelő kulcs betöltését