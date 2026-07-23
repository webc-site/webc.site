# Komponenti i navigimit të drejtorisë

- Paraqitja vertikale e përkuljes
- Mbështet fjalorin për të kaluar në të dhënat e drejtorisë
- Klikoni për të ngarkuar automatikisht tekstin Markdown
- Afishimi i statusit të ngarkimit të animacionit

## Përdorni demonstrimin

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Përdor komponentët"
};
</script>
```

## ndërfaqe

### Vetitë dhe metodat

- `toc.li`: Vendos një objekt drejtorie ose listë hyrjesh, të tilla si `{ key: title }`
- `toc.mdUrl`: Cakto funksionin e gjenerimit të URL-së së kërkesës `(key, lang) => url` ose vargun e prefiksit
- `toc.target`: Vendosni ose shoqëroni nyjen e përmbajtjes së synuar (si p.sh. `c-md`), trajtoni automatikisht `ing` pritjen dhe mbushjen e përmbajtjes
- `toc.load(key)`: Aktivizoni me dorë ngarkimin e çelësit përkatës