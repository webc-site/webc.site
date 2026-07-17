# Markdown-tekstin suoratoisto

- Jäsennä ja renderöi asteittain Markdown
- Tee yhteistyötä vierivän pääelementin kanssa vierittääksesi automaattisesti, kun sisältö ylittää näytön
- Keskeytä automaattinen vieritys, kun napsautat tai vierität ylös, ja jatka vierittäessäsi alas
- Näytä automaattisesti kirjoitustilan ilmaisimet

## Käytä demoa

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Tietojen suoratoisto palautetun asynkronisen generaattorifunktion kautta
  el.gen = async function* () {
    tuotto "# otsikko\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      tuotto "- kohde " + i + "\n";
    }
  };
</script>
```

## omaisuutta

| attribuutin nimi | tyyppi | havainnollistaa |
| :--- | :--- | :--- |
| `gen` | `Function` | Toiminto, joka palauttaa asynkronisen iteraattorin/generaattorin, tyhjentää sisällön ja hahmontaa uudelleen asettamisen jälkeen |

## tyyli

| Luokka/tunniste | havainnollistaa |
| :--- | :--- |
| `Md` | Luokka lisätään automaattisesti komponenttiin asennuksen yhteydessä, aseta Markdown-tyyli |
| `i.T` | Kirjoitustilan ilmaisin lisätään automaattisesti loppuun tietojen syöttämisen aikana |