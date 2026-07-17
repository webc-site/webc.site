
  Pre komponent `js` použite `Light DOM` na implementáciu komponentu do `src/názov komponentu/_.js`.

  Na import ďalších komponentov použite relatívne cesty, ako napríklad: `importovať "../názov komponentu/_.js"` (`js` neimportuje `styl`, framework ho automaticky vloží).

  `this` Definujte iba natívnu funkciu spätného volania webového komponentu, ostatné zapíšte ako nezávislé funkcie, odovzdajte `this` a požadované parametre.

  Okrem externe exponovaných rozhraní je na uľahčenie optimalizácie natriasaním stromov a kompresie kódu zakázané viazať vlastné súkromné ​​atribúty na `this` (použite `this.$` na funkcie uvoľnenia) a funkcie vysokého rádu možno použiť na vrátenie uzáverov na uchovávanie medzipremenných.

  Nepíšte `constructor`, atribút sa získa v `connectedCallback`.


  Opätovné použitie verejných funkcií pod `src/js/` nájdete v [./js.md](./js.md)

  Pre kontajnery použite namiesto atribútov `slot`.
  Ak potrebujete načítať údaje, vystavte načítavacie rozhranie hornej vrstve vo forme asynchrónnej funkcie spätného volania a pomocou komentárov uveďte formát návratovej hodnoty.
  Komponenty sa musia vyhýbať únikom pamäte. `disconnectedCallback` zlúčiť udalosti odinštalovania do jednej funkcie `this.$` a nepísať viacero odinštalačných funkcií.
  Návratová hodnota rozhrania môže byť jedna hodnota, pole alebo pole polí, nie objekt.
  Ak má komponent viacero stavov, použite viacriadkové komentáre, aby ste jasne opísali formát údajov každého stavu. (Nepredraďujte každý riadok komentárov znakom `*`)
  Prepínanie stavov pomocou číselných konštánt (definovaných ako `const.js`).
  Počas načítavania spätného volania zobrazte animáciu s `const xx = newEl('b');xx.className="Ing"` a `@import "../Ing/_.styl"` v `_.styl`