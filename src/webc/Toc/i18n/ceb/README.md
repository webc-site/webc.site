# Direktoryo nga Navigation Component

- Vertical Flex Layout
- Suportahi ang diksyonaryo aron mapasa ang data sa direktoryo
- Pag-klik aron awtomatiko nga makarga ang Markdown nga teksto
- Nag-load sa status display Ing animation

## Gamita ang demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Gamita ang mga sangkap"
};
</script>
```

## interface

### Mga kabtangan ug pamaagi

- `toc.li`: Nagtakda og direktoryo nga butang o listahan sa mga entri, sama sa `{ key: title }`
- `toc.mdUrl`: I-set ang hangyo nga URL generation function `(key, lang) => url` o prefix string
- `toc.target`: Itakda o i-associate ang target content node (sama sa `c-md`), awtomatik nga magdumala sa `ing` paghulat ug pagpuno sa sulod
- `toc.load(key)`: Manu-manong i-trigger ang pagkarga sa katugbang nga yawe