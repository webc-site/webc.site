# Streamovanie vykresľovania textu Markdown

- Postupne analyzujte a vykresľujte Markdown
- Spolupracujte s rolovacím nadradeným prvkom na automatické rolovanie, keď obsah presiahne obrazovku
- Pozastaviť automatické posúvanie pri kliknutí alebo posúvaní nahor, pokračovať pri posúvaní nadol
- Automaticky zobrazovať indikátory stavu písania

## Použite demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Vykresľovanie streamovaných údajov prostredníctvom vrátenej funkcie asynchrónneho generátora
  el.gen = async function* () {
    výnos "# titul\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      výnos "- položka " + i + "\n";
    }
  };
</script>
```

## majetku

| názov atribútu | typu | ilustrovať |
| :--- | :--- | :--- |
| `gen` | `Function` | Funkcia, ktorá vracia asynchrónny iterátor/generátor, vymaže obsah a po nastavení znova vykreslí |

## štýl

| Trieda/Značka | ilustrovať |
| :--- | :--- |
| `Md` | Trieda sa automaticky pridá do komponentu pri montáži, nastavte štýl Markdown |
| `i.T` | Indikátor stavu písania sa automaticky pridáva na koniec počas zadávania údajov |