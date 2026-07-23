# Komponenta navigacije po imeniku

- Navpična fleksibilna postavitev
- Podpora slovarju za posredovanje podatkov imenika
- Kliknite za samodejno nalaganje besedila Markdown
- Prikaz stanja nalaganja Ing animation

## Uporabite demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Uporabi komponente"
};
</script>
```

## vmesnik

### Lastnosti in metode

- `toc.li`: Nastavi predmet imenika ali seznam vnosov, kot je `{ key: title }`
- `toc.mdUrl`: Nastavite funkcijo ustvarjanja URL-ja zahteve `(key, lang) => url` ali niz predpone
- `toc.target`: Nastavite ali povežite ciljno vsebinsko vozlišče (kot je `c-md`), samodejno obravnava `ing` čakanje in polnjenje vsebine
- `toc.load(key)`: Ročno sprožite nalaganje ustreznega ključa