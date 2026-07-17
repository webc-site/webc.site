# Streaming-gengivelse af Markdown-tekst

- Parse og gengiv Markdown trinvist
- Samarbejd med det rullende overordnede element for automatisk at rulle, når indholdet overstiger skærmen
- Sæt automatisk rulning på pause, når du klikker eller ruller op, fortsæt, når du ruller ned
- Vis automatisk indtastningsstatusindikatorer

## Brug demoen

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Streaming af datagengivelse gennem den returnerede asynkrone generatorfunktion
  el.gen = async function* () {
    give "# titel\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      yield "- item " + i + "\n";
    }
  };
</script>
```

## ejendom

| attributnavn | type | illustrere |
| :--- | :--- | :--- |
| `gen` | `Function` | Funktion, der returnerer en asynkron iterator/generator, rydder indhold og gengiver efter indstilling |

## stil

| Klasse/Tag | illustrere |
| :--- | :--- |
| `Md` | Klasse tilføjes automatisk til komponenten ved montering, indstil Markdown-stil |
| `i.T` | Indtastningsstatusindikator tilføjes automatisk i slutningen under dataindtastning |