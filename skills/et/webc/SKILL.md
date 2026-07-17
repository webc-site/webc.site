---
name: webc
---

Järgige protsessi, koostage plaan ja arendage samm-sammult, et vältida tegematajätmisi

1. Käivitage `./sh/new.js projektitüübi komponendi nimi` ja looge kataloogi `src` alla komponendi kaust
   Projekti tüüp võib olla `css` (puhas stiilikomponent), `js` (veebilehe komponent)
   Komponendi nime esitäht kirjutatakse suurtähtedega

2. Lugege koodi `.agents/doc/code` spetsifikatsioone ja seejärel arendage.

   Sõltuvuste importimiseks `_.styl` tehke esmalt `@import "../komponendi nimi/_.styl"`. Järgige faili [./styl.md](./styl.md) kodeerimisstandardeid ja kujundusesteetikat.

   Muutke teiste komponentide stiile ja importige need otse, kasutage alguses `@import` ja keelake `extend`.

   Demonstreerimiseks kasutatava stiili kirjutamine `komponendi nimi/_.styl` ja `demo/_.styl`-vormingus on keelatud.

   Arendage komponendi `js` jaoks seda protsessi [webc.js.md](./webc.js.md) järgi (puhta stiili komponentide puhul kustutage `komponendi nimi/_.js`)

3. Vajutage [demo.md](./demo.md) protsessi arendamise tutvustus

4. Käivitage juurkataloogi `./test.sh`. Parandage vead ja häired, eraldage funktsioone, optimeerige koodi ning vältige dubleerimist ja liiasust. Koodi spetsifikatsioonid leiate jaotisest `.agents/doc/code/js.md`

5. Lugege [dbg.md](./dbg.md) ja siluge komponente vastavalt protsessile

6. Järgige [i18n.md](./i18n.md) protsessi, et rakendada komponentide ja demonstratsioonide rahvusvahelistumist ning kirjutada dokumente

7. Testige uuesti ja optimeerige kood

8. Avage alamagent ja helistage koodi ülevaatamiseks ja optimeerimiseks numbril `.agents/skills/js_review/SKILL.md`.

9. Jälle silumine