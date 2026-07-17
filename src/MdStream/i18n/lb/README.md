# Streaming Rendering vum Markdown Text

- Markdown inkrementell parséieren a rendéieren
- Kooperéiert mam scrollende Elterendeel fir automatesch ze scrollen wann den Inhalt den Écran iwwerschreift
- Paus Autoscroll wann Dir klickt oder erop scrollt, widderhuelen wann Dir erof scrollt
- Automatesch Typ Status Indikatoren weisen

## Benotzt d'Demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Streaming Datenrendering duerch déi zréckginn asynchron Generatorfunktioun
  el.gen = async function* () {
    erginn "# Titel\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      nozeginn "- Element " + i + "\n";
    }
  };
</script>
```

## Propriétéit

| Attribut Numm | Typ | illustréieren |
| :--- | :--- | :--- |
| `gen` | `Function` | Funktioun déi en asynchronen Iterator / Generator zréckkënnt, Inhalt läscht an no der Astellung nei rendert |

## Stil

| Class/Tag | illustréieren |
| :--- | :--- |
| `Md` | Klass automatesch op d'Komponente bäigefüügt beim Montage, setzen Markdown-Stil |
| `i.T` | Typ Status Indikator automatesch um Enn bäigefüügt beim Dateentrée |