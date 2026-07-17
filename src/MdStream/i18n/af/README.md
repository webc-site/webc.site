# Stroomweergawe van Markdown-teks

- Ontleed en lewer Markdown inkrementeel
- Werk saam met die rol-ouerelement om outomaties te blaai wanneer die inhoud die skerm oorskry
- Onderbreek outoscroll wanneer u op klik of blaai, hervat wanneer u afblaai
- Vertoon outomaties tikstatus-aanwysers

## Gebruik die demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Stroomdata-weergawe deur die teruggestuurde asinchrone generatorfunksie
  el.gen = async function* () {
    lewer "# titel\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      lewer "- item " + i + "\n";
    }
  };
</script>
```

## eiendom

| kenmerk naam | tipe | illustreer |
| :--- | :--- | :--- |
| `gen` | `Function` | Funksie wat 'n asynchrone iterator/generator terugstuur, inhoud uitvee en na instelling weer weergee |

## styl

| Klas/Tag | illustreer |
| :--- | :--- |
| `Md` | Klas word outomaties by die komponent gevoeg wanneer dit gemonteer word, stel Markdown-styl in |
| `i.T` | Tikstatus-aanwyser outomaties bygevoeg aan die einde tydens data-invoer |