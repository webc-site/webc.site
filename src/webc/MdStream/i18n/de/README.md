# Streaming-Rendering von Markdown-Text

- Analysieren und rendern Sie Markdown inkrementell
- Arbeiten Sie mit dem scrollenden übergeordneten Element zusammen, um automatisch zu scrollen, wenn der Inhalt den Bildschirm überschreitet
- Halten Sie den automatischen Bildlauf an, wenn Sie klicken oder nach oben scrollen, und setzen Sie ihn fort, wenn Sie nach unten scrollen
- Zeigt automatisch Tippstatusindikatoren an

## Nutzen Sie die Demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Streaming-Datenrendering durch die zurückgegebene asynchrone Generatorfunktion
el.gen = async function* () {
  yield "# Titel\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    yield "- item " + i + "\n";
  }
};
</script>
```

## Eigentum

| Attributname | Typ | veranschaulichen |
| :--- | :--- | :--- |
| `gen` | `Function` | Funktion, die einen asynchronen Iterator/Generator zurückgibt, Inhalte löscht und nach der Einstellung erneut rendert |

## Stil

| Klasse/Tag | veranschaulichen |
| :--- | :--- |
| `Md` | Die Klasse wird beim Mounten automatisch zur Komponente hinzugefügt und der Markdown-Stil festgelegt |
| `i.T` | Die Eingabestatusanzeige wird am Ende der Dateneingabe automatisch hinzugefügt |