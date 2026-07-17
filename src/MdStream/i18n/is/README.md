# Straumflutningur á Markdown texta

- Þjálfa og skila Markdown í skrefum
- Samvinna með foreldri sem flettir til að fletta sjálfkrafa þegar efnið fer yfir skjáinn
- Gerðu hlé á sjálfvirkri flettingu þegar smellt er eða skrunað upp, haldið áfram þegar skrunað er niður
- Birta sjálfkrafa innsláttarstöðuvísa

## Notaðu kynninguna

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Straumgagnaflutningur í gegnum skilaða ósamstilltu rafallaðgerðina
  el.gen = async function* () {
    gefa "# titill\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      skila "- atriði " + i + "\n";
    }
  };
</script>
```

## eign

| eigindarheiti | gerð | sýna |
| :--- | :--- | :--- |
| `gen` | `Function` | Aðgerð sem skilar ósamstilltum endurtekningu/rafalli, hreinsar efni og endurgerir eftir stillingu |

## stíll

| Class/Tag | sýna |
| :--- | :--- |
| `Md` | Class bætt sjálfkrafa við íhlutinn við uppsetningu, stilltu Markdown stíl |
| `i.T` | Innsláttarstöðuvísir bætt sjálfkrafa við í lokin við innslátt gagna |