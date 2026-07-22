# Demó

Tekintse meg a következőt: `src/webc/BoxX/demo`, és készítse el az összetevő bemutatóját a következő helyen: `src/webc/component name/demo/`

`demo/_.pug`, bemutató alsablon

Csak minimalista komponenscímkéket tartalmaznak, nincs szükség teljes oldalra, és tilos a stílusok és szkriptek importálása. A keretrendszer automatikusan beilleszti (például `demo/_.styl`, `demo/_.js`).

Ne írjon címet (például ne írjon xxx demót), ne írja be a komponens nevét, ne mutassa be a komponenst, csak a demó használati esetének állapotát írja be (ha nincs állapot, ne írjon címet)

Az `_.pug` gyökéreleme a `main.demo.Lg` elemet használja, amely meghatározta a stílust a `demo/_.styl`-ban, és nem határozza meg magának az `main.demo.Lg` stílusát.

A megjelenítési komponens tárolóját a `main.demo.Lg`-hez kell igazítani, és ne legyen közöttük `margin` és `padding`, mert a `main.demo` maga már beállította a `padding` értéket, és az üresre állítás megismétlődik.

`demo/_.styl` Ha csak egy megjelenítési komponens van, a konténernek nem lesz külső kerete, és csak `max-width` van beállítva (mivel a prezentációs tároló automatikusan hozzáad egy külső keretet). Ha több is van, a tartályt el lehet választani egy külső kerettel.

Ne írjon `img` a `demo/_.pug`-ba, használja a `demo/_.styl`-t a háttérkép beállításához

Ha az összetevőnek több űrlapja van, kérjük, jelenítse meg azokat sorrendben (például betöltés, üres adatok, adatok, sikertelen stb.), rugalmas függőleges elrendezés

`demo/_.styl`: `stylus` a bemutató oldal stílusa, kérjük, kövesse a [./styl.md](./styl.md) kódspecifikációit és tervezési esztétikáját.

Ha nem írja be az `@import '../_.styl'` parancsot a demonstrálandó komponens importálásához, a rendszer automatikusan beinjektálja; tilos a `@import` használata a `demo/_.styl`-ban más összetevőstílusok importálására. Ha a bemutató más összetevőktől függ (például a `.Btn` gombtól), kérjük, importálja a függő összetevőket a `import "../../Btn.js"` `demo/_.js`ben.

`demo/_.js`: A szkript meghívása, `export default (root) => { ... }` formátum, `root` paraméter a gazdagép (`document` vagy a sandbox tároló gyökéreleme)

`D.createElement` tiltott, használja a `newEl` [./js.md](./js.md) által említett

A `js` használata tilos itt: `c-t` és nemzetköziesítéshez `fLang`

Ha a `../component name.js` (`../komponensnév.js` magát az összetevőt jeleníti meg, és a demó által igényelt többi függő összetevőt továbbra is importálni kell), akkor csak az `import` elemre van szükség, és nincs konkrét tartalom importálása, ami elhagyható (a keretrendszer automatikusan beadja)

`pug` Nincs szükség `js` és `styl` importálására, a keretrendszer automatikusan beilleszti őket