# Demó

Tekintse meg a következőt: `src/BoxX/demo`, és készítse el az összetevő demóját a következő helyen: `src/component name/demo/`

`demo/_.pug`, bemutató alsablon

Csak minimalista komponenscímkéket tartalmaznak, nincs szükség teljes oldalra, és tilos a stílusok és szkriptek importálása. A keretrendszer automatikusan beilleszti (például `demo/_.styl`, `demo/_.js`).

Ne írjon címet (például ne írjon xxx demót), ne írja be a komponens nevét, ne mutassa be a komponenst, csak a demó használati esetének állapotát írja be (ha nincs állapot, ne írjon címet)

Az `_.pug` gyökéreleme a `main.demo.Lg` elemet használja, amely meghatározta a stílust a `demo/_.styl`-ban, és nem határozza meg magának az `main.demo.Lg` stílusát.

A megjelenítési komponens tárolóját a `main.demo.Lg`-hez kell igazítani, és ne legyen közöttük `margin` és `padding`, mert a `main.demo` maga már beállította a `padding` értéket, és az üresre állítás megismétlődik.

`demo/_.styl` Ha csak egy megjelenítési komponens van, a konténernek nem lesz külső kerete, és csak `max-width` van beállítva (mivel a prezentációs tároló automatikusan hozzáad egy külső keretet). Ha több is van, a tartályt el lehet választani egy külső kerettel.

Ne írjon `img` a `demo/_.pug`-ba, használja a `demo/_.styl`-t a háttérkép beállításához

Ha az összetevőnek több űrlapja van, kérjük, jelenítse meg azokat sorrendben (például betöltés, üres adatok, adatok, sikertelen stb.), rugalmas függőleges elrendezés

`demo/_.styl`: `stylus` a bemutató oldal stílusa, kérjük, kövesse a [./styl.md](./styl.md) kódspecifikációit és tervezési esztétikáját.

Ne írjon `@import '../_.styl'`-t a demonstrálandó komponens importálásához, a rendszer automatikusan beinjektálja

Kérjük, importálja a `@import '../../Btn/_.styl'` elemet a `demo/_.styl` mappába, és használja a `.Btn` kódot

`demo/_.js`: A szkript meghívása, `export default (root) => { ... }` formátum, `root` paraméter a gazdagép (`document` vagy a sandbox tároló gyökéreleme)

`D.createElement` tiltott, használja a `newEl` [./js.md](./js.md) által említett

A `js` használata tilos itt: `c-t` és nemzetköziesítéshez `fLang`

Ha a `../_.js` (`../_.js` magát a komponenst jeleníti meg, akkor a más demók által igényelt függő komponenseket továbbra is importálni kell), csak `import` szükséges, és nincs konkrét tartalom importálása, ami elhagyható (a keretrendszer automatikusan beilleszti)

`pug` Nincs szükség `js` és `styl` importálására, a keretrendszer automatikusan beilleszti őket