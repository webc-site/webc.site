# Przesyłanie strumieniowe renderowania tekstu Markdown

- Stopniowo analizuj i renderuj Markdown
- Współpracuj z przewijanym elementem nadrzędnym, aby automatycznie przewijać, gdy zawartość wykracza poza ekran
- Wstrzymaj automatyczne przewijanie podczas klikania lub przewijania w górę i wznawiaj podczas przewijania w dół
- Automatycznie wyświetlaj wskaźniki stanu pisania

## Skorzystaj z wersji demonstracyjnej

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Strumieniowe renderowanie danych przez zwróconą funkcję generatora asynchronicznego
  el.gen = async function* () {
    return "# tytuł\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      wydajność "- pozycja" + i + "\n";
    }
  };
</script>
```

## nieruchomość

| nazwa atrybutu | typ | zilustrować |
| :--- | :--- | :--- |
| `gen` | `Function` | Funkcja zwracająca asynchroniczny iterator/generator, czyści zawartość i ponownie renderuje po ustawieniu |

## styl

| Klasa/znacznik | zilustrować |
| :--- | :--- |
| `Md` | Klasa automatycznie dodawana do komponentu podczas montażu, ustaw styl Markdown |
| `i.T` | Wskaźnik stanu wpisywania dodawany automatycznie na końcu podczas wprowadzania danych |