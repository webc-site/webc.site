# Streamové vykreslování textu Markdown

- Postupně analyzujte a vykreslujte Markdown
- Spolupracujte s rolovacím rodičovským prvkem, aby se automaticky posouval, když obsah přesahuje obrazovku
- Pozastavit automatické posouvání při kliknutí nebo posouvání nahoru, pokračovat při posouvání dolů
- Automaticky zobrazovat indikátory stavu psaní

## Použijte demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Vykreslování datových proudů prostřednictvím vrácené funkce asynchronního generátoru
  el.gen = async function* () {
    výnos "# titul\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      výnos "- položka " + i + "\n";
    }
  };
</script>
```

## vlastnictví

| název atributu | typ | ilustrovat |
| :--- | :--- | :--- |
| `gen` | `Function` | Funkce, která vrací asynchronní iterátor/generátor, vymaže obsah a po nastavení se znovu vykreslí |

## styl

| Třída/Značka | ilustrovat |
| :--- | :--- |
| `Md` | Třída automaticky přidána do komponenty při montáži, nastavte styl Markdown |
| `i.T` | Indikátor stavu psaní se automaticky přidá na konec během zadávání dat |