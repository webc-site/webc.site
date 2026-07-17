# Streaming rendering sa Markdown nga teksto

- Incrementally parse ug render Markdown
- Pakigtambayayong sa nag-scroll nga elemento sa ginikanan aron awtomatiko nga mag-scroll kung ang sulud molapas sa screen
- Ihunong ang autoscroll kung nag-klik o nag-scroll pataas, ipadayon kung nag-scroll paubos
- Awtomatikong ipakita ang mga indikasyon sa kahimtang sa pag-type

## Gamita ang demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Streaming data rendering pinaagi sa gibalik nga asynchronous generator function
  el.gen = async function* () {
    abot "# titulo\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      abot "- butang " + i + "\n";
    }
  };
</script>
```

## kabtangan

| ngalan sa hiyas | tipo | iilustrar |
| :--- | :--- | :--- |
| `gen` | `Function` | Function nga nagbalik sa usa ka asynchronous iterator/generator, paghawan sa sulod ug pag-re-render human sa pag-set |

## estilo

| Klase/Tag | iilustrar |
| :--- | :--- |
| `Md` | Awtomatikong gidugang ang klase sa sangkap kung nag-mount, itakda ang istilo sa Markdown |
| `i.T` | Ang indikasyon sa status sa pag-type awtomatikong idugang sa katapusan sa panahon sa pagsulod sa datos |