# Markdown teksta straumēšanas renderēšana

- Pakāpeniski parsējiet un atveidojiet Markdown
- Sadarbojieties ar ritināmo vecākelementu, lai automātiski ritinātu, kad saturs pārsniedz ekrānu
- Apturiet automātisko ritināšanu, noklikšķinot vai ritinot uz augšu, un atsākt, ritinot uz leju
- Automātiski parādīt rakstīšanas statusa indikatorus

## Izmantojiet demonstrāciju

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Straumēšanas datu renderēšana, izmantojot atgriezto asinhronā ģeneratora funkciju
  el.gen = async function* () {
    raža "# tituls\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      raža "- prece " + i + "\n";
    }
  };
</script>
```

## īpašums

| atribūta nosaukums | veids | ilustrēt |
| :--- | :--- | :--- |
| `gen` | `Function` | Funkcija, kas atgriež asinhronu iteratoru/ģeneratoru, notīra saturu un pēc iestatīšanas tiek atkārtoti renderēta |

## stils

| Klase/birka | ilustrēt |
| :--- | :--- |
| `Md` | Klase tiek automātiski pievienota komponentam montāžas laikā, iestatiet Markdown stilu |
| `i.T` | Rakstīšanas statusa indikators tiek automātiski pievienots beigās datu ievades laikā |