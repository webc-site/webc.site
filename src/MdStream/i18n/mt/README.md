# Rendiment streaming tat-test Markdown

- Inkrementalment parse u tirrendi Markdown
- Ikkoopera mal-element ġenitur tal-iskrolljar biex tiskrollja awtomatikament meta l-kontenut jaqbeż l-iskrin
- Waqqaf l-awtoscroll meta tikklikkja jew tiskrollja 'l fuq, ibda meta tiskrollja 'l isfel
- Uri awtomatikament indikaturi tal-istatus tat-tajpjar

## Uża d-demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Streaming tad-dejta permezz tal-funzjoni tal-ġeneratur asinkroniku rritornat
  el.gen = async function* () {
    rendiment "# titolu\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      Ilde "- th " + i + " term\n";
    }
  };
</script>
```

## proprjetà

| isem attribut | tip | juru |
| :--- | :--- | :--- |
| `gen` | `Function` | Funzjoni li tirritorna iteratur/ġeneratur mhux sinkroniku, tnaddaf il-kontenut u tirrendi mill-ġdid wara l-issettjar |

## stil

| Klassi/Tag | juru |
| :--- | :--- |
| `Md` | Klassi awtomatikament miżjuda mal-komponent meta immuntar, issettja l-istil Markdown |
| `i.T` | Indikatur tal-istatus tat-tajpjar miżjud awtomatikament fl-aħħar waqt id-dħul tad-dejta |