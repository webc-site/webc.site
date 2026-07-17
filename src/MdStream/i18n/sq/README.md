# Transmetimi i tekstit Markdown në transmetim

- Analizoni dhe jepni gradualisht Markdown
- Bashkëpunoni me elementin prind lëvizës për të lëvizur automatikisht kur përmbajtja tejkalon ekranin
- Ndaloni lëvizjen automatike kur klikoni ose lëvizni lart, rifilloni kur lëvizni poshtë
- Shfaq automatikisht treguesit e statusit të shtypjes

## Përdorni demonstrimin

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Transmetimi i transmetimit të të dhënave përmes funksionit të gjeneratorit asinkron të kthyer
  el.gen = async function* () {
    japin "# titull\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      yield "- artikull " + i + "\n";
    }
  };
</script>
```

## prone

| emri i atributit | lloji | ilustrojnë |
| :--- | :--- | :--- |
| `gen` | `Function` | Funksioni që kthen një përsëritës/gjenerues asinkron, fshin përmbajtjen dhe riprodhohet pas vendosjes |

## stil

| Klasa/Tag | ilustrojnë |
| :--- | :--- |
| `Md` | Klasa i shtohet automatikisht komponentit kur montohet, vendosni stilin Markdown |
| `i.T` | Treguesi i statusit të shtypjes shtohet automatikisht në fund gjatë futjes së të dhënave |