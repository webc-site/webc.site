---
name: webc
---

Postupujte podľa procesu, vytvorte plán a rozvíjajte krok za krokom, aby ste sa vyhli vynechaniu

1. Spustite `./sh/new.js názov komponentu typu projektu` a vytvorte komponent v adresári `src/webc`
   Typ projektu môže byť `css` (komponent čistého štýlu), `js` (komponent webovej stránky)
   Veľké prvé písmeno názvu komponentu

2. Prečítajte si špecifikácie kódovania pre `.agents/doc/code` a potom vyvíjajte.

   Štýl komponentu je napísaný v `_.styl`. Štýl použitý na demonštráciu je napísaný v `demo/_.styl`. Je zakázané písať ho v `názov komponentu/_.styl`.

  Používanie `@import` na import štýlov z iných komponentov je zakázané v `_.styl` aj `demo/_.styl` .

  Dodržiavajte štandardy kódovania a estetiku dizajnu [./styl.md](./styl.md).

  Závislé komponenty (a ich štýly) sa importujú cez `import "./other components.js"` v `webc/componentname.js`; závislosti na demonštráciu sa importujú pomocou `importu "../../other components.js"` v `demo/_.js`.

   Všetky komponenty (vrátane komponentov čistého štýlu) musia mať súbor skriptu `component name.js`. `komponent name.js` komponentov čistého štýlu importuje iba zodpovedajúci `_.styl`. V prípade komponentov s logikou JS postupujte pri vývoji podľa postupu [webc.js.md](./webc.js.md).

3. Stlačte [demo.md](./demo.md) ukážku vývoja procesu

4. Spustite `./test.sh` koreňového adresára. Opravte chyby a alarmy, extrahujte funkcie, optimalizujte kód a zabráňte duplicite a redundancii. Špecifikácie kódu nájdete v časti `.agents/doc/code/js.md`

5. Prečítajte si [dbg.md](./dbg.md) a odlaďte komponenty podľa procesu

6. Postupujte podľa postupu [i18n.md](./i18n.md) na implementáciu internacionalizácie komponentov a demonštrácií a písanie dokumentov

7. Otestujte znova a optimalizujte kód

8. Otvorte podagenta a zavolajte na `.agents/skills/js_review/SKILL.md`, aby skontroloval a optimalizoval kód.

9. Opäť ladenie