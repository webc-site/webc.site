# Direktorioa nabigatzeko osagaia

- Flex Bertikala Diseinua
- Laguntza hiztegia direktorioko datuak pasatzeko
- Egin klik Markdown testua automatikoki kargatzeko
- Egoera bistaratzea Ing animazioa

## Erabili demoa

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Erabili osagaiak"
};
</script>
```

## interfazea

### Propietateak eta metodoak

- `toc.li`: direktorio-objektua edo sarreren zerrenda ezartzen du, adibidez, `{ key: title }`
- `toc.mdUrl`: Ezarri eskaera URL sortzeko funtzioa `(key, lang) => url` edo aurrizki-katea
- `toc.target`: ezarri edo lotu helburuko eduki-nodoa (adibidez, `c-md`), automatikoki kudeatu `ing` itxarotea eta edukia betetzea
- `toc.load(key)`: eskuz abiarazi dagokion gakoaren karga