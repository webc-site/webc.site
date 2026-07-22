# Ffrydio rendrad o destun Markdown

- Dosrannu a rendrad Markdown yn raddol
- Cydweithiwch â'r elfen rhiant sgrolio i sgrolio'n awtomatig pan fydd y cynnwys yn fwy na'r sgrin
- Oedwch wrth sgrolio'n awtomatig wrth glicio neu sgrolio i fyny, ailddechrau wrth sgrolio i lawr
- Arddangos dangosyddion statws teipio yn awtomatig

## Defnyddiwch y demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Ffrydio data rendro drwy'r swyddogaeth generadur asyncronaidd a ddychwelwyd
el.gen = async function* () {
  cynnyrch "# title\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    cynnyrch "- eitem" + i + "\n";
  }
};
</script>
```

## eiddo

| enw priodoledd | math | darlunio |
| :--- | :--- | :--- |
| `gen` | `Function` | Swyddogaeth sy'n dychwelyd iterator/generadur asyncronaidd, yn clirio cynnwys ac yn ail-rendro ar ôl ei osod |

## arddull

| Dosbarth/Tag | darlunio |
| :--- | :--- |
| `Md` | Dosbarth wedi'i ychwanegu'n awtomatig at y gydran wrth osod, gosodwch arddull Markdown |
| `i.T` | Dangosydd statws teipio wedi'i ychwanegu'n awtomatig ar y diwedd wrth fewnbynnu data |