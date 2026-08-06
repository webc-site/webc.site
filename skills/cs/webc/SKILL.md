---
name: webc
---

Sledujte proces, vytvořte plán a vyvíjejte krok za krokem, abyste se vyhnuli opomenutím

1. Spusťte `./sh/new.js název komponenty typu projektu` a vytvořte komponentu v adresáři `src/webc`
   Typ projektu může být `css` (komponenta čistého stylu), `js` (komponenta webové stránky)
   První písmeno názvu komponenty pište na velké

2. Přečtěte si specifikace kódování pro `.agents/doc/code` a poté vyvíjejte.

   Styl komponenty je napsán v `_.styl`. Styl použitý pro demonstraci je napsán v `demo/_.styl`. Je zakázáno jej zapisovat do `název komponenty/_.styl`.

  Použití `@import` k importu stylů z jiných komponent je zakázáno v `_.styl` i `demo/_.styl` .

  Dodržujte standardy kódování a estetiku designu [./styl.md](./styl.md).

  Závislé komponenty (a jejich styly) se importují pomocí `importu "./other components.js"` v `webc/componentname.js`; závislosti pro ukázku se importují pomocí `importu "../../other components.js"` v `demo/_.js`.

   Všechny komponenty (včetně komponent čistého stylu) musí mít soubor skriptu `component name.js`. `komponenta name.js` komponent čistého stylu importuje pouze odpovídající `_.styl`. U komponent s logikou JS postupujte při vývoji podle postupu [webc.js.md](./webc.js.md).

3. Stiskněte [demo.md](./demo.md) ukázka vývoje procesu

4. Spusťte `./test.sh` kořenového adresáře. Opravte chyby a alarmy, extrahujte funkce, optimalizujte kód a vyhněte se duplicitě a redundanci. Specifikace kódu viz `.agents/doc/code/js.md`

5. Přečtěte si [dbg.md](./dbg.md) a odlaďte komponenty podle procesu

6. Postupujte podle postupu [i18n.md](./i18n.md) pro implementaci internacionalizace komponent a ukázek a psaní dokumentů

7. Otestujte znovu a optimalizujte kód

8. Otevřete podřízeného agenta a zavolejte `.agents/skills/js_review/SKILL.md` pro kontrolu a optimalizaci kódu.

9. Opět ladění