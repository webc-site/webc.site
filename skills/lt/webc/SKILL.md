---
name: webc
---

Sekite procesą, sudarykite planą ir kurkite žingsnis po žingsnio, kad išvengtumėte praleidimų

1. Paleiskite `./sh/new.js projekto tipo komponento pavadinimas` ir sukurkite komponentą `src/webc` kataloge
   Projekto tipas gali būti `css` (grynojo stiliaus komponentas), `js` (tinklalapio komponentas)
   Pirmąją komponento pavadinimo raidę parašykite didžiąja

2. Perskaitykite `.agents/doc/code` kodavimo specifikacijas ir sukurkite.

   Komponento stilius parašytas `_.styl`. Demonstravimui naudojamas stilius parašytas `demo/_.styl`. Draudžiama jį rašyti į `komponento pavadinimą/_.styl`.

  Naudoti `@import` importuoti stilius iš kitų komponentų draudžiama ir `_.styl`, ir `demo/_.styl` .

  Laikykitės kodavimo standartų ir dizaino estetikos [./styl.md](./styl.md).

  Priklausomi komponentai (ir jų stiliai) importuojami naudojant `importuojant "./other komponentus.js"` į `webc/componentname.js`; demonstravimo priklausomybės importuojamos naudojant `importuojant "../../other component.js"` `demo/_.js`.

   Visi komponentai (įskaitant gryno stiliaus komponentus) turi turėti `komponento pavadinimas.js` scenarijaus failą. Gryno stiliaus komponentų `komponento pavadinimas.js` importuoja tik atitinkamą `_.styl`. Jei norite sukurti komponentus su JS logika, vykdykite [webc.js.md](./webc.js.md) procesą.

3. Paspauskite [demo.md](./demo.md) proceso kūrimo demonstracija

4. Paleiskite `./test.sh` šakninį katalogą. Ištaisykite klaidas ir pavojaus signalus, išskleiskite funkcijas, optimizuokite kodą ir išvengsite dubliavimo bei perteklių. Norėdami sužinoti kodo specifikacijas, žr. `.agents/doc/code/js.md`

5. Perskaitykite [dbg.md](./dbg.md) ir derinkite komponentus pagal procesą

6. Vykdykite [i18n.md](./i18n.md) procesą, kad įgyvendintumėte komponentų ir demonstracijų internacionalizavimą ir rašykite dokumentus

7. Išbandykite dar kartą ir optimizuokite kodą

8. Atidarykite antrinį agentą ir paskambinkite `.agents/skills/js_review/SKILL.md`, kad peržiūrėtumėte ir optimizuotumėte kodą.

9. Vėl derinimas