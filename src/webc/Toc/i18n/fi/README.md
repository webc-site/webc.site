# Hakemiston navigointikomponentti

- Pysty Flex-asettelu
- Tukisanakirja hakemistotietojen välittämiseen
- Napsauta ladataksesi Markdown-teksti automaattisesti
- Latauksen tilan näyttö Ing animaatio

## Käytä demoa

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Käytä komponentteja"
};
</script>
```

## käyttöliittymä

### Ominaisuudet ja menetelmät

- `toc.li`: Asettaa hakemistoobjektin tai merkintöjen luettelon, kuten `{ key: title }`
- `toc.mdUrl`: Aseta pyynnön URL-osoitteen luontitoiminto `(key, lang) => url` tai etuliitemerkkijono
- `toc.target`: Aseta tai liitä kohdesisältösolmu (kuten `c-md`), käsittele `ing` automaattisesti odottaminen ja sisällön täyttö
- `toc.load(key)`: Käynnistä vastaavan avaimen lataus manuaalisesti