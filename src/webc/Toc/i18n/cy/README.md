# Cydran Llywio Cyfeiriadur

- Cynllun Fertigol Flex
- Cefnogi geiriadur i drosglwyddo data cyfeiriadur
- Cliciwch i lwytho testun Markdown yn awtomatig
- Wrthi'n llwytho arddangos statws Ing animeiddiad

## Defnyddiwch y demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  " : " doc/use " : " Defnyddio cydrannau "
};
</script>
```

## rhyngwyneb

### Priodweddau a dulliau

- `toc.li`: Yn gosod gwrthrych cyfeiriadur neu restr o gofnodion, megis `{ key: title }`
- `toc.mdUrl`: Gosod swyddogaeth cynhyrchu URL cais `(key, lang) => url` neu llinyn rhagddodiad
- `toc.target`: Gosod neu gysylltu'r nod cynnwys targed (fel `c-md`), trin `ing` aros a llenwi cynnwys yn awtomatig
- `toc.load(key)`: Sbardunwch lwytho'r allwedd gyfatebol â llaw