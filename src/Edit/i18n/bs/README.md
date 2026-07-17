# Dugme za uređivanje stranice ili dokumenta

- Sadrži dugme za uređivanje pod pravim uglom
- Ugrađeni Pophover upiti za lebdenje
- Podržava prenošenje jump URL-a i otvaranje novog prozora

## Koristite demo

```html
<c-edit href="https://github.com"></c-edit>

<script type="module">
import "webc.site/Edit/_.js";
</script>
```

## Parametri interfejsa

Oznaka komponente je `<c-edit>`, a adresa za skok se može uređivati ​​kroz konfiguraciju atributa `href`.