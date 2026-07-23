# Kataloogide navigeerimise komponent

- Vertikaalne Flex paigutus
- Abisõnastik kataloogiandmete edastamiseks
- Klõpsake märgistuse teksti automaatseks laadimiseks
- Laadimisoleku kuva Inglise animatsioon

## Kasutage demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Kasuta komponente"
};
</script>
```

## liides

### Omadused ja meetodid

- `toc.li`: määrab kataloogiobjekti või kirjete loendi, näiteks `{ key: title }`
- `toc.mdUrl`: määrake päringu URL-i genereerimise funktsioon `(key, lang) => url` või eesliite string
- `toc.target`: määrake või seostage sihtsisu sõlm (nt `c-md`), haldage automaatselt `ing` ootamist ja sisu täitmist
- `toc.load(key)`: käivitage käsitsi vastava võtme laadimine