# Listaleiðsöguhluti

- Lóðrétt Flex skipulag
- Stuðningur við orðabók til að senda inn skráargögn
- Smelltu til að hlaða Markdown texta sjálfkrafa
- Hleðsla stöðu sýna Ing hreyfimynd

## Notaðu kynninguna

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Notaðu íhluti"
};
</script>
```

## viðmót

### Eiginleikar og aðferðir

- `toc.li`: Stillir skráarhlut eða lista yfir færslur, eins og `{ key: title }`
- `toc.mdUrl`: Stilltu aðgerðina til að mynda beiðni um vefslóð `(key, lang) => url` eða forskeytistreng
- `toc.target`: Stilltu eða tengdu markefnishnútinn (eins og `c-md`), sjáðu sjálfkrafa um `ing` bið og efnisfyllingu
- `toc.load(key)`: Kveiktu handvirkt á hleðslu á samsvarandi lykli