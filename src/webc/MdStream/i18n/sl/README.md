# Pretočno upodabljanje besedila Markdown

- Postopno razčleni in upodobi Markdown
- Sodelujte z drsnim nadrejenim elementom za samodejno drsenje, ko vsebina preseže zaslon
- Zaustavite samodejno drsenje, ko kliknete ali se pomaknete navzgor, nadaljujte, ko se pomaknete navzdol
- Samodejno prikaži indikatorje statusa tipkanja

## Uporabite demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Pretočno upodabljanje podatkov prek vrnjene funkcije asinhronega generatorja
el.gen = async function* () {
  donos "# naslov\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    donos "- element " + i + "\n";
  }
};
</script>
```

## premoženje

| ime atributa | vrsto | ilustrirati |
| :--- | :--- | :--- |
| `gen` | `Function` | Funkcija, ki vrne asinhroni iterator/generator, počisti vsebino in jo po nastavitvi ponovno upodobi |

## stil

| Razred/oznaka | ilustrirati |
| :--- | :--- |
| `Md` | Razred samodejno dodan komponenti pri namestitvi, nastavite slog Markdown |
| `i.T` | Indikator stanja tipkanja se samodejno doda na koncu med vnosom podatkov |