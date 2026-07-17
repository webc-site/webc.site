---
name: webc
---

Sledujte proces, vytvořte plán a vyvíjejte krok za krokem, abyste se vyhnuli opomenutím

1. Spusťte `./sh/new.js název komponenty typu projektu` a vytvořte složku komponenty v adresáři `src`
   Typ projektu může být `css` (komponenta čistého stylu), `js` (komponenta webové stránky)
   První písmeno názvu komponenty pište na velké

2. Přečtěte si specifikace kódování pro `.agents/doc/code` a poté vyvíjejte.

   V `_.styl` nejprve `@importujte "../název součásti/_.styl"` k importu závislostí. Dodržujte prosím standardy kódování a estetiku designu [./styl.md](./styl.md).

   Upravte styly ostatních komponent a místo toho je přímo importujte, na začátku použijte `@import` a deaktivujte `extend`.

   Styl použitý pro ukázku nesmí být psán v `název komponenty/_.styl` a psán v `demo/_.styl`.

   Komponentu `js` vyviňte podle procesu [webc.js.md](./webc.js.md) (pro komponenty čistého stylu smažte `název komponenty/_.js`)

3. Stiskněte [demo.md](./demo.md) ukázka vývoje procesu

4. Spusťte `./test.sh` kořenového adresáře. Opravte chyby a alarmy, extrahujte funkce, optimalizujte kód a vyhněte se duplicitě a redundanci. Specifikace kódu viz `.agents/doc/code/js.md`

5. Přečtěte si [dbg.md](./dbg.md) a odlaďte komponenty podle procesu

6. Postupujte podle postupu [i18n.md](./i18n.md) pro implementaci internacionalizace komponent a ukázek a psaní dokumentů

7. Otestujte znovu a optimalizujte kód

8. Otevřete podřízeného agenta a zavolejte `.agents/skills/js_review/SKILL.md` pro kontrolu a optimalizaci kódu.

9. Opět ladění