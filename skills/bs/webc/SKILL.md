---
name: webc
---

Pratite proces, napravite plan i razvijajte korak po korak kako biste izbjegli propuste

1. Pokrenite `./sh/new.js naziv komponente tipa projekta` i kreirajte komponentu u `src/webc` direktoriju
   Tip projekta može biti `css` (komponenta čistog stila), `js` (komponenta web stranice)
   Prvo slovo imena komponente napišite veliko

2. Pročitajte specifikacije kodiranja za `.agents/doc/code` i zatim razvijajte.

   Stil komponente je napisan u `_.styl`. Stil koji se koristi za demonstraciju je napisan u `demo/_.styl`. Zabranjeno je pisati u `ime komponente/_.styl`.

  Korištenje `@import` za uvoz stilova iz drugih komponenti je zabranjeno i u `_.styl` i `demo/_.styl` .

  Slijedite standarde kodiranja i estetiku dizajna [./styl.md](./styl.md).

  Zavisne komponente (i njihovi stilovi) se uvoze putem `importa "./other components.js"` u `webc/componentname.js`; Zavisnosti za demonstraciju se uvoze putem `importa "../../other components.js"` u `demo/_.js`.

   Sve komponente (uključujući komponente čistog stila) moraju imati `ime komponente.js` skript datoteku. `ime komponente.js` komponenti čistog stila uvozi samo odgovarajući `_.styl`. Za komponente sa JS logikom, slijedite [webc.js.md](./webc.js.md) proces za razvoj.

3. Pritisnite [demo.md](./demo.md) demonstracija razvoja procesa

4. Pokrenite `./test.sh` korijenskog direktorija. Popravite greške i alarme, izdvojite funkcije, optimizirajte kod i izbjegnite dupliciranje i redundantnost. Za specifikacije koda pogledajte `.agents/doc/code/js.md`

5. Pročitajte [dbg.md](./dbg.md) i otklonite greške u komponentama prema procesu

6. Pratite [i18n.md](./i18n.md) proces za implementaciju internacionalizacije komponenti i demonstracija i pisanje dokumenata

7. Testirajte ponovo i optimizirajte kod

8. Otvorite podagenta i pozovite `.agents/skills/js_review/SKILL.md` da pregledate i optimizirate kod.

9. Ponovo otklanjanje grešaka