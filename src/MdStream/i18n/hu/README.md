# A Markdown szöveg streaming megjelenítése

- A Markdown fokozatos elemzése és megjelenítése
- Együttműködjön a görgető szülőelemmel az automatikus görgetéshez, ha a tartalom meghaladja a képernyőt
- Az automatikus görgetés szüneteltetése kattintáskor vagy felfelé görgetéskor, folytatása lefelé görgetéskor
- A gépelés állapotjelzőinek automatikus megjelenítése

## Használd a demót

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Adatfolyamok megjelenítése a visszaadott aszinkron generátor függvényen keresztül
  el.gen = async function* () {
    hozam "# cím\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      hozam "- tétel " + i + "\n";
    }
  };
</script>
```

## ingatlan

| attribútum neve | típus | szemléltet |
| :--- | :--- | :--- |
| `gen` | `Function` | Funkció, amely aszinkron iterátort/generátort ad vissza, törli a tartalmat, és a beállítás után újra rendereli |

## stílus

| Osztály/címke | szemléltet |
| :--- | :--- |
| `Md` | Az osztály automatikusan hozzáadódik az összetevőhöz a felszereléskor, állítsa be a Markdown stílust |
| `i.T` | A gépelési állapotjelző automatikusan hozzáadódik a végén az adatbevitel során |