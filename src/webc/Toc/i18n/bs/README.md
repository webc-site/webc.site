# Komponenta za navigaciju direktorija

- Vertikalni Flex Layout
- Podrška rječniku za prosljeđivanje podataka direktorija
- Kliknite da automatski učitate Markdown tekst
- Prikaz statusa učitavanja Ing animacija

## Koristite demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Koristite komponente"
};
</script>
```

## interfejs

### Svojstva i metode

- `toc.li`: Postavlja objekt direktorija ili listu unosa, kao što je `{ key: title }`
- `toc.mdUrl`: Postavite funkciju generiranja URL-a zahtjeva `(key, lang) => url` ili niz prefiksa
- `toc.target`: Postavite ili povežite ciljni sadržaj sadržaja (kao što je `c-md`), automatski upravljajte `ing` čekanjem i popunjavanjem sadržaja
- `toc.load(key)`: Ručno pokrenite učitavanje odgovarajućeg ključa