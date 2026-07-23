# Komponent tan-Navigazzjoni tad-Direttorju

- Vertikali Flex Layout
- Appoġġ dizzjunarju biex jgħaddi data tad-direttorju
- Ikklikkja biex awtomatikament ittella test Markdown
- Il-wiri tal-istatus tat-tagħbija tal-animazzjoni tal-Ing

## Uża d-demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Uża komponenti"
};
</script>
```

## interface

### Proprjetajiet u metodi

- `toc.li`: Issettja oġġett tad-direttorju jew lista ta' entrati, bħal `{ key: title }`
- `toc.mdUrl`: Issettja l-funzjoni tal-ġenerazzjoni tal-URL tat-talba `(key, lang) => url` jew string tal-prefiss
- `toc.target`: Issettja jew assoċja n-nodu tal-kontenut fil-mira (bħal `c-md`), jimmaniġġja awtomatikament `ing` l-istennija u l-mili tal-kontenut
- `toc.load(key)`: Ixpruna manwalment it-tagħbija taċ-ċavetta korrispondenti