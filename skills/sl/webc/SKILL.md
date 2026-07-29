---
name: webc
---

Sledite procesu, naredite načrt in razvijajte korak za korakom, da se izognete izpustitvam

1. Zaženite `./sh/new.js ime komponente vrste projekta` in ustvarite komponento v imeniku `src/webc`
   Vrsta projekta je lahko `css` (komponenta čistega sloga), `js` (komponenta spletne strani)
   Prvo črko imena komponente napišite z veliko začetnico

2. Preberite specifikacije kodiranja za `.agents/doc/code` in nato razvijajte.

   Slog komponente je napisan v `_.styl`. Slog, uporabljen za predstavitev, je napisan v `demo/_.styl`. Prepovedano ga je zapisati v `ime komponente/_.styl`.

  Uporaba `@import` za uvoz slogov iz drugih komponent je prepovedana v `_.styl` in `demo/_.styl` .

  Sledite standardom kodiranja in estetiki oblikovanja [./styl.md](./styl.md).

  Odvisne komponente (in njihovi slogi) so uvožene prek `import "./other components.js"` v `webc/componentname.js`; odvisnosti za predstavitev so uvožene prek `import "../../other components.js"` v `demo/_.js`.

   Vse komponente (vključno s komponentami čistega sloga) morajo imeti skriptno datoteko `ime komponente.js`. `komponenta ime.js` komponent čistega sloga uvozi samo ustrezen `_.styl`. Za komponente z logiko JS sledite postopku [webc.js.md](./webc.js.md) za razvoj.

3. Pritisnite [demo.md](./demo.md) predstavitev razvoja procesa

4. Zaženi `./test.sh` korenskega imenika. Odpravite napake in alarme, ekstrahirajte funkcije, optimizirajte kodo in se izognite podvajanju in redundanci. Za specifikacije kode glejte `.agents/doc/code/js.md`

5. Preberite [dbg.md](./dbg.md) in razhroščite komponente v skladu s postopkom

6. Sledite postopku [i18n.md](./i18n.md) za izvedbo internacionalizacije komponent in predstavitev ter pisanje dokumentov

7. Ponovno preizkusite in optimizirajte kodo

8. Odprite podzastopnika in pokličite `.agents/skills/js_review/SKILL.md`, da pregledate in optimizirate kodo.

9. Ponovno odpravljanje napak