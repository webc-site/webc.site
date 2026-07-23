# Komponent navigácie v adresári

- Vertikálne flexibilné rozloženie
- Podpora slovníka na odovzdávanie údajov adresára
- Kliknutím sa automaticky načíta text Markdown
- Zobrazenie stavu načítania Ing animácia

## Použite demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Použiť komponenty"
};
</script>
```

## rozhranie

### Vlastnosti a metódy

- `toc.li`: Nastaví objekt adresára alebo zoznam záznamov, ako napríklad `{ key: title }`
- `toc.mdUrl`: Nastavte funkciu generovania adresy URL požiadavky `(key, lang) => url` alebo reťazec predpony
- `toc.target`: Nastavte alebo priraďte cieľový uzol obsahu (napríklad `c-md`), automaticky spracujte `ing` čakanie a plnenie obsahu
- `toc.load(key)`: Manuálne spustiť načítanie príslušného kľúča