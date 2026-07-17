# Streaming-gjengivelse av Markdown-tekst

- Analyser og gjengi Markdown trinnvis
- Samarbeid med det rullende overordnede elementet for å rulle automatisk når innholdet overskrider skjermen
- Sett automatisk rulling på pause når du klikker eller ruller opp, fortsett når du ruller nedover
- Vis automatisk skrivestatusindikatorer

## Bruk demoen

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Streaming av datagjengivelse gjennom den returnerte asynkrone generatorfunksjonen
  el.gen = async function* () {
    gi "# tittel\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      gi "- element " + i + "\n";
    }
  };
</script>
```

## eiendom

| attributtnavn | type | illustrere |
| :--- | :--- | :--- |
| `gen` | `Function` | Funksjon som returnerer en asynkron iterator/generator, sletter innhold og gjengir etter innstilling |

## stil

| Klasse/Tag | illustrere |
| :--- | :--- |
| `Md` | Klasse automatisk lagt til komponenten ved montering, angi Markdown-stil |
| `i.T` | Skrivestatusindikator automatisk lagt til på slutten under datainntasting |