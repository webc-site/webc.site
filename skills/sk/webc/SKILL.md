---
name: webc
---

Postupujte podľa procesu, vytvorte plán a rozvíjajte krok za krokom, aby ste sa vyhli vynechaniu

1. Spustite `./sh/new.js názov komponentu typu projektu` a vytvorte priečinok komponentu v adresári `src`
   Typ projektu môže byť `css` (komponent čistého štýlu), `js` (komponent webovej stránky)
   Veľké prvé písmeno názvu komponentu

2. Prečítajte si špecifikácie kódovania pre `.agents/doc/code` a potom vyvíjajte.

   V `_.styl` najprv `@importujte "../názov komponentu/_.styl"` na import závislostí. Dodržujte štandardy kódovania a estetiku dizajnu [./styl.md](./styl.md).

   Upravte štýly ostatných komponentov a namiesto toho ich priamo importujte, na začiatku použite `@import` a vypnite `extend`.

   Štýl použitý na demonštráciu sa nesmie písať v `názve komponentu/_.styl` a písať v `demo/_.styl`.

   Pre komponent `js` ho vyviňte podľa procesu [webc.js.md](./webc.js.md) (pre komponenty čistého štýlu odstráňte `názov komponentu/_.js`)

3. Stlačte [demo.md](./demo.md) ukážku vývoja procesu

4. Spustite `./test.sh` koreňového adresára. Opravte chyby a alarmy, extrahujte funkcie, optimalizujte kód a zabráňte duplicite a redundancii. Špecifikácie kódu nájdete v časti `.agents/doc/code/js.md`

5. Prečítajte si [dbg.md](./dbg.md) a odlaďte komponenty podľa procesu

6. Postupujte podľa postupu [i18n.md](./i18n.md) na implementáciu internacionalizácie komponentov a demonštrácií a písanie dokumentov

7. Otestujte znova a optimalizujte kód

8. Otvorte podagenta a zavolajte na `.agents/skills/js_review/SKILL.md`, aby skontroloval a optimalizoval kód.

9. Opäť ladenie