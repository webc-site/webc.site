---
name: webc
---

Pratite proces, napravite plan i razvijajte korak po korak kako biste izbjegli propuste

1. Pokrenite `./sh/new.js naziv komponente tipa projekta` i kreirajte folder komponente u `src` direktoriju
   Tip projekta može biti `css` (komponenta čistog stila), `js` (komponenta web stranice)
   Prvo slovo imena komponente napišite veliko

2. Pročitajte specifikacije kodiranja za `.agents/doc/code` i zatim razvijajte.

   U `_.styl`, prvo `@import "../component name/_.styl"` za uvoz zavisnosti. Molimo slijedite standarde kodiranja i estetiku dizajna [./styl.md](./styl.md).

   Izmijenite stilove drugih komponenti i umjesto toga uvezite ih direktno, koristite `@import` na početku i onemogućite `extend`.

   Zabranjeno je pisati stil koji se koristi za demonstraciju u `ime komponente/_.styl` i pisati u `demo/_.styl`.

   Za `js` komponentu, razvijte je prema [webc.js.md](./webc.js.md) procesu (molimo izbrišite `ime komponente/_.js` za komponente čistog stila)

3. Pritisnite [demo.md](./demo.md) demonstracija razvoja procesa

4. Pokrenite `./test.sh` korijenskog direktorija. Popravite greške i alarme, izdvojite funkcije, optimizirajte kod i izbjegnite dupliciranje i redundantnost. Za specifikacije koda pogledajte `.agents/doc/code/js.md`

5. Pročitajte [dbg.md](./dbg.md) i otklonite greške u komponentama prema procesu

6. Pratite [i18n.md](./i18n.md) proces za implementaciju internacionalizacije komponenti i demonstracija i pisanje dokumenata

7. Testirajte ponovo i optimizirajte kod

8. Otvorite podagenta i pozovite `.agents/skills/js_review/SKILL.md` da pregledate i optimizirate kod.

9. Ponovo otklanjanje grešaka