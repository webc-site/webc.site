# Komponenta navigacije imenika

- Vertikalni Flex raspored
- Podržava rječnik za prosljeđivanje podataka imenika
- Kliknite za automatsko učitavanje Markdown teksta
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
  "doc/use": "Koristi komponente"
};
</script>
```

## sučelje

### Svojstva i metode

- `toc.li`: Postavlja objekt imenika ili popis unosa, kao što je `{ key: title }`
- `toc.mdUrl`: Postavite funkciju generiranja URL-a zahtjeva `(key, lang) => url` ili niz prefiksa
- `toc.target`: Postavite ili pridružite ciljni čvor sadržaja (kao što je `c-md`), automatski upravljajte `ing` čekanjem i punjenjem sadržaja
- `toc.load(key)`: Ručno pokrenite učitavanje odgovarajućeg ključa