# Component ng Directory Navigation

- Vertical Flex Layout
- Suportahan ang diksyunaryo upang maipasa ang data ng direktoryo
- I-click upang awtomatikong i-load ang Markdown text
- Nilo-load ang pagpapakita ng katayuan sa animation

## Gamitin ang demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Gumamit ng mga bahagi"
};
</script>
```

## interface

### Mga katangian at pamamaraan

- `toc.li`: Nagtatakda ng object ng direktoryo o listahan ng mga entry, gaya ng `{ key: title }`
- `toc.mdUrl`: Itakda ang function ng pagbuo ng URL ng kahilingan `(key, lang) => url` o prefix string
- `toc.target`: Itakda o iugnay ang target na content node (gaya ng `c-md`), awtomatikong pangasiwaan ang `ing` paghihintay at pagpuno ng nilalaman
- `toc.load(key)`: Manu-manong i-trigger ang paglo-load ng kaukulang key