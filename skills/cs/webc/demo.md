# Demo

Podívejte se na `src/BoxX/demo` a vytvořte ukázku komponenty v `src/název komponenty/demo/`

`demo/_.pug`, ukázková podšablona

Jsou zahrnuty pouze minimalistické značky komponent, není vyžadována úplná stránka a import stylů a skriptů je zakázán. Rámec se automaticky vloží (například `demo/_.styl`, `demo/_.js`).

Nepište název (například nepište xxx demo), nepište název komponenty, nepředstavujte komponentu, pište pouze stav případu použití dema (pokud není uveden žádný stav, nepište žádný název)

Kořenový prvek `_.pug` používá `main.demo.Lg` , který definoval styl v `demo/_.styl` a nedefinuje styl samotného `main.demo.Lg`.

Kontejner komponenty zobrazení by měl být zarovnán s `main.demo.Lg` a mezi nimi by neměly být žádné `margin` a `padding`, protože `main.demo` sám již nastavil `padding` a nastavení prázdného místa se bude opakovat.

`demo/_.styl` Pokud existuje pouze jedna komponenta zobrazení, její kontejner nebude mít vnější rám a bude nastaven pouze `max-width` (protože prezentační kontejner automaticky přidá vnější rámeček). Pokud je jich více, lze kontejner oddělit vnějším rámem.

Nepište `img` do `demo/_.pug`, použijte `demo/_.styl` k nastavení obrázku na pozadí

Pokud má komponenta více formulářů, zobrazte je v pořadí (například načítání, prázdná data, data, selhání atd.), flexibilní vertikální rozložení

`demo/_.styl`: `stylus` styl ukázkové stránky, dodržujte prosím specifikace kódu a estetiku designu [./styl.md](./styl.md)

Nepište `@import '../_.styl'` pro import komponenty, která má být demonstrována, bude automaticky vložena

Importujte prosím `@import '../../Btn/_.styl'` do `demo/_.styl` a použijte `.Btn`

`demo/_.js`: Volání skriptu, formát `export default (root) => { ... }`, parametr `root` je hostitel (`document` nebo kořenový prvek kontejneru izolovaného prostoru)

`D.createElement` je zakázáno, použijte `newEl` uvedené v [./js.md](./js.md)

`js` je zakázáno používat v `c-t` a pro internacionalizaci `fLang`

Pokud `../_.js` (`../_.js` má zobrazit samotnou komponentu, závislé komponenty vyžadované jinými ukázkami je stále třeba importovat) je vyžadován pouze `import` a není importován žádný konkrétní obsah, který lze vynechat (rámec jej automaticky vloží)

`pug` Není třeba importovat `js` a `styl` , framework je automaticky vloží