# Streamingweergave van Markdown-tekst

- Stapsgewijs parseren en renderen van Markdown
- Werk samen met het scrollende bovenliggende element om automatisch te scrollen wanneer de inhoud het scherm overschrijdt
- Pauzeer automatisch scrollen wanneer u klikt of naar boven scrollt, en hervat wanneer u naar beneden scrollt
- Geef automatisch typestatusindicatoren weer

## Gebruik de demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Streaming van gegevensweergave via de geretourneerde asynchrone generatorfunctie
  el.gen = async function* () {
    opbrengst "# titel\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      opbrengst "- item " + i + "\n";
    }
  };
</script>
```

## eigendom

| attribuutnaam | type | illustreren |
| :--- | :--- | :--- |
| `gen` | `Function` | Functie die een asynchrone iterator/generator retourneert, inhoud wist en opnieuw rendert na instelling |

## stijl

| Klasse/tag | illustreren |
| :--- | :--- |
| `Md` | Klasse wordt automatisch aan de component toegevoegd tijdens het monteren, stel de Markdown-stijl in |
| `i.T` | Typestatusindicator wordt automatisch toegevoegd aan het einde tijdens gegevensinvoer |