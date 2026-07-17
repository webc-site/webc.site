# Utoaji wa mtiririko wa maandishi ya Markdown

- Changanua na utoe Markdown kwa kuongezeka
- Shirikiana na kipengele kikuu cha kusogeza ili kusogeza kiotomatiki maudhui yanapozidi skrini
- Sitisha kusogeza kiotomatiki unapobofya au kusogeza juu, endelea unaposogeza chini
- Onyesha kiashirio cha hali ya uchapaji kiotomatiki

## Tumia onyesho

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Utoaji wa data ya utiririshaji kupitia kazi ya jenereta ya asynchronous iliyorejeshwa
  el.gen = async function* () {
    toa "kichwa #\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      yield "- nambari ya " + i + " kipengele\n";
    }
  };
</script>
```

## mali

| jina la sifa | aina | onyesha |
| :--- | :--- | :--- |
| `gen` | `Function` | Kazi inayorudisha kiboreshaji/jenereta isiyolingana, husafisha yaliyomo na kutoa tena baada ya kuweka. |

## mtindo

| Darasa/Lebo | onyesha |
| :--- | :--- |
| `Md` | Darasa huongezwa kiotomatiki kwa kijenzi wakati wa kupachika, weka mtindo wa Markdown |
| `i.T` | Kiashiria cha hali ya uchapaji huongezwa kiotomatiki mwishoni wakati wa kuingiza data |