---
name: webc
---

Pratite proces, napravite plan i razvijajte se korak po korak kako biste izbjegli propuste

1. Pokrenite `./sh/new.js ime komponente tipa projekta` i stvorite mapu komponente u `src` direktoriju
   Vrsta projekta može biti `css` (komponenta čistog stila), `js` (komponenta web stranice)
   Prvo slovo naziva komponente napišite velikim slovom

2. Pročitajte specifikacije kodiranja za `.agents/doc/code` i zatim razvijajte.

   U `_.styl`, prvo `@import "../component name/_.styl"` za uvoz ovisnosti. Molimo slijedite standarde kodiranja i estetiku dizajna [./styl.md](./styl.md).

   Izmijenite stilove ostalih komponenti i umjesto toga ih izravno uvezite, upotrijebite `@import` na početku i onemogućite `extend`.

   Zabranjeno je pisati stil koji se koristi za demonstraciju u `naziv komponente/_.styl` i pisati u `demo/_.styl`.

   Za `js` komponentu, razvijte je u skladu s postupkom [webc.js.md](./webc.js.md) (izbrišite `component name/_.js` za komponente čistog stila)

3. Pritisnite [demo.md](./demo.md) demonstracija razvoja procesa

4. Pokrenite `./test.sh` iz korijenskog direktorija. Popravite pogreške i alarme, izdvojite funkcije, optimizirajte kod i izbjegnite dupliciranje i redundantnost. Za specifikacije koda, pogledajte `.agents/doc/code/js.md`

5. Pročitajte [dbg.md](./dbg.md) i ispravite komponente u skladu s postupkom

6. Slijedite proces [i18n.md](./i18n.md) za implementaciju internacionalizacije komponenti i demonstracija te pisanje dokumenata

7. Ponovno testirajte i optimizirajte kôd

8. Otvorite pod-agenta i nazovite `.agents/skills/js_review/SKILL.md` da pregledate i optimizirate kod.

9. Ponovno otklanjanje pogrešaka