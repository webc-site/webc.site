# Gumb za urejanje strani ali dokumenta

- Vsebuje gumb ikone za urejanje pod pravim kotom
- Vgrajeni pozivi za lebdenje Pophover
- Podpira podajanje URL-ja za skok in odpiranje novega okna

## Uporabite demo

```html
<c-edit href="https://github.com"></c-edit>

<script type="module">
import "webc.site/Edit/_.js";
</script>
```

## Parametri vmesnika

Oznaka komponente je `<c-edit>`, naslov skoka pa je mogoče urejati s konfiguracijo atributa `href`.