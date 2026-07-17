# Streaming rendering Markdown teksta

- Postepeno analizirajte i renderirajte Markdown
- Sarađujte s roditeljskim elementom koji se pomiče za automatsko pomicanje kada sadržaj premaši ekran
- Pauzirajte automatsko pomeranje kada kliknete ili pomerate prema gore, nastavite kada se pomerate prema dole
- Automatski prikaz indikatora statusa kucanja

## Koristite demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Streaming rendering podataka kroz vraćenu funkciju asinkronog generatora
  el.gen = async function* () {
    yield "# naslov\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      prinos "- stavka " + i + "\n";
    }
  };
</script>
```

## imovine

| naziv atributa | tip | ilustrirati |
| :--- | :--- | :--- |
| `gen` | `Function` | Funkcija koja vraća asinhroni iterator/generator, briše sadržaj i ponovo renderira nakon podešavanja |

## stil

| Class/Tag | ilustrirati |
| :--- | :--- |
| `Md` | Klasa se automatski dodaje komponenti prilikom montaže, postavite Markdown stil |
| `i.T` | Indikator statusa kucanja se automatski dodaje na kraju tokom unosa podataka |