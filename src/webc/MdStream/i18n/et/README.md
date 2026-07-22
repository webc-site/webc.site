# Markdowni teksti voogesitus

- Järk-järgult sõeluda ja renderdada Markdown
- Tehke koostööd keriva põhielemendiga, et automaatselt kerida, kui sisu ületab ekraani
- Peatage automaatne kerimine klõpsamisel või üles kerimisel, jätkake alla kerimisel
- Kuvab automaatselt tippimise oleku indikaatorid

## Kasutage demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Andmete voogesitus tagastatud asünkroonse generaatori funktsiooni kaudu
el.gen = async function* () {
  saagikus "# pealkiri\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    saagikus "- kirje " + i + "\n";
  }
};
</script>
```

## vara

| atribuudi nimi | tüüp | illustreerima |
| :--- | :--- | :--- |
| `gen` | `Function` | Funktsioon, mis tagastab asünkroonse iteraatori/generaatori, kustutab sisu ja renderdab pärast seadistamist uuesti |

## stiilis

| Klass/silt | illustreerima |
| :--- | :--- |
| `Md` | Klass lisatakse paigaldamisel automaatselt komponendile, määrake Markdowni stiil |
| `i.T` | Sisestamise oleku indikaator lisatakse andmete sisestamise ajal automaatselt lõppu |