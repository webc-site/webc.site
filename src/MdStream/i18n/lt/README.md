# Srautinis Markdown teksto atvaizdavimas

- Palaipsniui analizuoti ir pateikti Markdown
- Bendradarbiaukite su slenkančiu pirminiu elementu, kad automatiškai slinktumėte, kai turinys viršija ekraną
- Pristabdykite automatinį slinkimą spustelėjus arba slenkant aukštyn, tęskite, kai slenkate žemyn
- Automatiškai rodyti spausdinimo būsenos indikatorius

## Naudokite demonstracinę versiją

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Srautinis duomenų pateikimas per grąžintą asinchroninio generatoriaus funkciją
  el.gen = async function* () {
    derlius "# pavadinimas\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      derlius "- elementas " + i + "\n";
    }
  };
</script>
```

## nuosavybė

| atributo pavadinimas | tipo | iliustruoti |
| :--- | :--- | :--- |
| `gen` | `Function` | Funkcija, kuri grąžina asinchroninį iteratorių / generatorių, išvalo turinį ir iš naujo pateikia nustačius |

## stilius

| Klasė / žyma | iliustruoti |
| :--- | :--- |
| `Md` | Klasė automatiškai pridedama prie komponento montuojant, nustatykite Markdown stilių |
| `i.T` | Rašymo būsenos indikatorius automatiškai pridedamas pabaigoje įvedant duomenis |