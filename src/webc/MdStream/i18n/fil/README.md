# Streaming rendering ng Markdown text

- Paunti-unting i-parse at i-render ang Markdown
- Makipagtulungan sa scrolling parent element para awtomatikong mag-scroll kapag lumampas ang content sa screen
- I-pause ang autoscroll kapag nag-click o nag-scroll pataas, ipagpatuloy kapag nag-scroll pababa
- Awtomatikong ipakita ang mga tagapagpahiwatig ng katayuan sa pagta-type

## Gamitin ang demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Streaming data rendering sa pamamagitan ng ibinalik na asynchronous generator function
el.gen = async function* () {
  magbunga ng "# pamagat\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    magbunga ng "- item " + i + "\n";
  }
};
</script>
```

## ari-arian

| pangalan ng katangian | uri | ilarawan |
| :--- | :--- | :--- |
| `gen` | `Function` | Function na nagbabalik ng asynchronous na iterator/generator, nag-clear ng content at muling nagre-render pagkatapos ng setting |

## istilo

| Klase/Tag | ilarawan |
| :--- | :--- |
| `Md` | Awtomatikong idinaragdag ang klase sa component kapag nag-mount, itakda ang Markdown style |
| `i.T` | Awtomatikong idinaragdag ang tagapagpahiwatig ng katayuan ng pagta-type sa dulo sa panahon ng pagpasok ng data |