# Demo

Pozrite si `src/BoxX/demo` a vytvorte demo komponentu v `src/component name/demo/`

`demo/_.pug`, podšablóna ukážky

Zahrnuté sú iba minimalistické značky komponentov, nevyžaduje sa úplná stránka a import štýlov a skriptov je zakázaný. Rámec sa automaticky vloží (napríklad `demo/_.styl`, `demo/_.js`).

Nepíšte názov (napríklad nepíšte xxx demo), nepíšte názov komponentu, neuvádzajte komponent, iba napíšte stav prípadu použitia dema (ak tam nie je žiadny stav, nepíšte žiadny názov)

Koreňový prvok `_.pug` používa `main.demo.Lg` , ktorý definoval štýl v `demo/_.styl` a nedefinuje samotný štýl `main.demo.Lg`.

Kontajner komponentu zobrazenia by mal byť zarovnaný s `main.demo.Lg` a medzi nimi by nemali byť žiadne `margin` a `padding`, pretože samotný `main.demo` už nastavil `padding` a nastavenie prázdneho miesta sa zopakuje.

`demo/_.styl` Ak existuje iba jeden komponent zobrazenia, jeho kontajner nebude mať vonkajší rám a bude nastavený iba `max-width` (pretože kontajner prezentácie automaticky pridá vonkajší rám). Ak je ich viac, kontajner môže byť oddelený vonkajším rámom.

Nepíšte `img` do `demo/_.pug`, použite `demo/_.styl` na nastavenie obrázka na pozadí

Ak má komponent viacero formulárov, zobrazte ich v poradí (napríklad načítavanie, prázdne údaje, údaje, neúspešné atď.), flexibilné vertikálne rozloženie

`demo/_.styl`: `stylus` štýl ukážkovej stránky, dodržujte prosím špecifikácie kódu a estetiku dizajnu [./styl.md](./styl.md)

Nepíšte `@import '../_.styl'` na import komponentu, ktorý sa má demonštrovať, bude automaticky vložený

Prosím importujte `@import '../../Btn/_.styl'` do `demo/_.styl` a použite `.Btn`

`demo/_.js`: volajte skript, formát `export default (root) => { ... }`, parameter `root` je hostiteľ (`document` alebo koreňový prvok kontajnera karantény)

`D.createElement` je zakázané, použite `newEl` spomínané [./js.md](./js.md)

`js` je zakázané používať v `c-t` a na internacionalizáciu `fLang`

Ak `../_.js` (`../_.js` má zobraziť samotný komponent, stále je potrebné importovať závislé komponenty vyžadované inými ukážkami) vyžaduje sa iba `import` a neimportuje sa žiadny konkrétny obsah, ktorý je možné vynechať (rámec ho automaticky vloží)

`pug` Nie je potrebné importovať `js` a `styl` , rámec ich automaticky vloží