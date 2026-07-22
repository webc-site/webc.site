# Strömmande rendering av Markdown-text

- Analysera och rendera Markdown stegvis
- Samarbeta med det rullande överordnade elementet för att automatiskt rulla när innehållet överskrider skärmen
- Pausa automatisk rullning när du klickar eller rullar uppåt, återuppta när du rullar nedåt
- Visa automatiskt skrivstatusindikatorer

## Använd demon

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Strömmande datarendering genom den returnerade asynkrona generatorfunktionen
el.gen = async function* () {
  ge "# titel\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    ge "- objekt " + i + "\n";
  }
};
</script>
```

## egendom

| attributnamn | typ | illustrera |
| :--- | :--- | :--- |
| `gen` | `Function` | Funktion som returnerar en asynkron iterator/generator, rensar innehåll och återrenderar efter inställning |

## stil

| Klass/tagg | illustrera |
| :--- | :--- |
| `Md` | Klass läggs automatiskt till komponenten vid montering, ställ in Markdown-stil |
| `i.T` | Skrivstatusindikator läggs automatiskt till i slutet under datainmatning |