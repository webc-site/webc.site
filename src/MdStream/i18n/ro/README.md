# Redare în flux a textului Markdown

- Analizați și redați progresiv Markdown
- Cooperați cu elementul părinte de defilare pentru a derula automat atunci când conținutul depășește ecranul
- Întrerupeți derularea automată când faceți clic sau derulați în sus, reluați când derulați în jos
- Afișează automat indicatorii de stare de tastare

## Utilizați demonstrația

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Redarea datelor în flux prin funcția de generator asincron returnată
  el.gen = async function* () {
    randamentul „# titlu\n”;
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      yield "- Nr. " + i + " element\n";
    }
  };
</script>
```

## proprietate

| nume de atribut | tip | ilustra |
| :--- | :--- | :--- |
| `gen` | `Function` | Funcție care returnează un iterator/generator asincron, șterge conținutul și redă din nou după setare |

## stil

| Clasă/Etichetă | ilustra |
| :--- | :--- |
| `Md` | Clasa adăugată automat la componentă la montare, setați stilul Markdown |
| `i.T` | Indicatorul de stare de tastare adăugat automat la sfârșit în timpul introducerii datelor |