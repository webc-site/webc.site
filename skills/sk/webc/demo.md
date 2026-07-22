# Demo

Pozrite si `src/webc/BoxX/demo` a vytvorte ukážku komponentu v `src/webc/component name/demo/`

`demo/_.pug`, podšablóna ukážky

Zahrnuté sú iba minimalistické značky komponentov, nevyžaduje sa úplná stránka a import štýlov a skriptov je zakázaný. Rámec sa automaticky vloží (napríklad `demo/_.styl`, `demo/_.js`).

Nepíšte názov (napríklad nepíšte xxx demo), nepíšte názov komponentu, neuvádzajte komponent, iba napíšte stav prípadu použitia dema (ak tam nie je žiadny stav, nepíšte žiadny názov)

Koreňový prvok `_.pug` používa `main.demo.Lg` , ktorý definoval štýl v `demo/_.styl` a nedefinuje samotný štýl `main.demo.Lg`.

Kontajner komponentu zobrazenia by mal byť zarovnaný s `main.demo.Lg` a medzi nimi by nemali byť žiadne `margin` a `padding`, pretože samotný `main.demo` už nastavil `padding` a nastavenie prázdneho miesta sa zopakuje.

`demo/_.styl` Ak existuje iba jeden komponent zobrazenia, jeho kontajner nebude mať vonkajší rám a bude nastavený iba `max-width` (pretože kontajner prezentácie automaticky pridá vonkajší rám). Ak je ich viac, kontajner môže byť oddelený vonkajším rámom.

Nepíšte `img` do `demo/_.pug`, použite `demo/_.styl` na nastavenie obrázka na pozadí

Ak má komponent viacero formulárov, zobrazte ich v poradí (napríklad načítavanie, prázdne údaje, údaje, neúspešné atď.), flexibilné vertikálne rozloženie

`demo/_.styl`: `stylus` štýl ukážkovej stránky, dodržujte prosím špecifikácie kódu a estetiku dizajnu [./styl.md](./styl.md)

Ak nenapíšete `@import '../_.styl'` na import komponentu, ktorý sa má demonštrovať, bude automaticky vložený; je zakázané používať `@import` v `demo/_.styl` na import iných štýlov komponentov. Ak demo závisí od iných komponentov (ako je tlačidlo `.Btn`), importujte závislé komponenty cez `import "../../Btn.js"` v `demo/_.js`.

`demo/_.js`: volajte skript, formát `export default (root) => { ... }`, parameter `root` je hostiteľ (`document` alebo koreňový prvok kontajnera karantény)

`D.createElement` je zakázané, použite `newEl` spomínané [./js.md](./js.md)

`js` je zakázané používať v `c-t` a na internacionalizáciu `fLang`

Ak má `../component name.js` (`../component name.js` zobraziť samotný komponent a ďalšie závislé komponenty vyžadované ukážkou je ešte potrebné importovať), vyžaduje sa len `import` a neimportuje sa žiadny špecifický obsah, ktorý je možné vynechať (rámec ho automaticky vloží)

`pug` Nie je potrebné importovať `js` a `styl` , rámec ich automaticky vloží