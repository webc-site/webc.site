---
name: webc
---

Sekite procesą, sudarykite planą ir kurkite žingsnis po žingsnio, kad išvengtumėte praleidimų

1. Paleiskite `./sh/new.js projekto tipo komponento pavadinimas` ir sukurkite komponento aplanką `src` kataloge
   Projekto tipas gali būti `css` (grynojo stiliaus komponentas), `js` (tinklalapio komponentas)
   Pirmąją komponento pavadinimo raidę parašykite didžiąja

2. Perskaitykite `.agents/doc/code` kodavimo specifikacijas ir sukurkite.

   Į `_.styl` pirmiausia `@import "../component name/_.styl"`, kad importuotumėte priklausomybes. Laikykitės kodavimo standartų ir dizaino estetikos [./styl.md](./styl.md).

   Pakeiskite kitų komponentų stilius ir importuokite juos tiesiogiai, pradžioje naudokite `@import` ir išjunkite `extend`.

   Draudžiama demonstruoti naudojamą stilių `komponento pavadinimas/_.styl` ir `demo/_.styl`.

   Komponentą `js` sukurkite pagal [webc.js.md](./webc.js.md) procesą (ištrinkite `komponento pavadinimą/_.js`, jei naudojate gryno stiliaus komponentus)

3. Paspauskite [demo.md](./demo.md) proceso kūrimo demonstracija

4. Paleiskite `./test.sh` šakninį katalogą. Ištaisykite klaidas ir pavojaus signalus, išskleiskite funkcijas, optimizuokite kodą ir išvengsite dubliavimo bei perteklių. Norėdami sužinoti kodo specifikacijas, žr. `.agents/doc/code/js.md`

5. Perskaitykite [dbg.md](./dbg.md) ir derinkite komponentus pagal procesą

6. Vykdykite [i18n.md](./i18n.md) procesą, kad įgyvendintumėte komponentų ir demonstracijų internacionalizavimą ir rašykite dokumentus

7. Išbandykite dar kartą ir optimizuokite kodą

8. Atidarykite antrinį agentą ir paskambinkite `.agents/skills/js_review/SKILL.md`, kad peržiūrėtumėte ir optimizuotumėte kodą.

9. Vėl derinimas