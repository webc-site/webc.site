# Streaming renderiranje Markdown teksta

- Postupno analizirajte i renderirajte Markdown
- Surađujte s pomičnim roditeljskim elementom za automatsko pomicanje kada sadržaj pređe zaslon
- Pauzirajte automatsko pomicanje kada kliknete ili pomičete prema gore, nastavite kada pomičete prema dolje
- Automatski prikaz indikatora statusa tipkanja

## Koristite demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Renderiranje podataka strujanjem kroz vraćenu funkciju asinkronog generatora
  el.gen = async function* () {
    prinos "# naslov\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      prinos "- stavka " + i + "\n";
    }
  };
</script>
```

## imovine

| ime atributa | tip | ilustrirati |
| :--- | :--- | :--- |
| `gen` | `Function` | Funkcija koja vraća asinkroni iterator/generator, briše sadržaj i ponovno prikazuje nakon postavljanja |

## stil

| Klasa/oznaka | ilustrirati |
| :--- | :--- |
| `Md` | Klasa se automatski dodaje komponenti prilikom montiranja, postavite Markdown stil |
| `i.T` | Indikator statusa tipkanja automatski se dodaje na kraju tijekom unosa podataka |