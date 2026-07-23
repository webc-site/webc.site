# Komponenta navigace v adresáři

- Vertikální rozložení Flex
- Podpora slovníku pro předávání dat adresáře
- Kliknutím automaticky načtete text Markdown
- Zobrazení stavu načítání Ing animace

## Použijte demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Použít komponenty"
};
</script>
```

## rozhraní

### Vlastnosti a metody

- `toc.li`: Nastaví objekt adresáře nebo seznam položek, například `{ key: title }`
- `toc.mdUrl`: Nastavte funkci generování adresy URL požadavku `(key, lang) => url` nebo řetězec předpony
- `toc.target`: Nastavit nebo přidružit cílový uzel obsahu (například `c-md`), automaticky zpracovat `ing` čekání a plnění obsahu
- `toc.load(key)`: Ruční spuštění načítání odpovídajícího klíče