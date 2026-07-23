---
name: webc
---

Järgige protsessi, koostage plaan ja arendage samm-sammult, et vältida tegematajätmisi

1. Käivitage `./sh/new.js projektitüübi komponendi nimi` ja looge komponent kataloogis `src/webc`
   Projekti tüüp võib olla `css` (puhas stiilikomponent), `js` (veebilehe komponent)
   Komponendi nime esitäht kirjutatakse suurtähtedega

2. Lugege koodi `.agents/doc/code` spetsifikatsioone ja seejärel arendage.

   Komponendi stiil on kirjutatud `_.styl`. Demonstreerimiseks kasutatav stiil on kirjutatud `demo/_.styl`. Keelatud on seda kirjutada `komponendi nimes/_.styl`.

  `@import` kasutamine stiilide importimiseks muudest komponentidest on keelatud nii `_.styl` kui ka `demo/_.styl` puhul.

  Järgige [./styl.md](./styl.md) kodeerimisstandardeid ja kujundusesteetikat.

  Sõltuvad komponendid (ja nende stiilid) imporditakse faili `webc/componentname.js` kaudu `impordi "./other component.js"` kaudu; demonstreerimiseks kasutatavad sõltuvused imporditakse faili `impordi "../../other component.js"` kaudu failis `demo/_.js`.

   Kõigil komponentidel (kaasa arvatud puhta stiiliga komponendid) peab olema `komponendi nimi.js` skriptifail. Puhta stiili komponentide `komponendi nimi.js` impordib ainult vastava `_.styl`. JS-loogikaga komponentide puhul järgige arendamiseks protsessi [webc.js.md](./webc.js.md).

3. Vajutage [demo.md](./demo.md) protsessi arendamise tutvustus

4. Käivitage juurkataloogi `./test.sh`. Parandage vead ja häired, eraldage funktsioone, optimeerige koodi ning vältige dubleerimist ja liiasust. Koodi spetsifikatsioonid leiate jaotisest `.agents/doc/code/js.md`

5. Lugege [dbg.md](./dbg.md) ja siluge komponente vastavalt protsessile

6. Järgige [i18n.md](./i18n.md) protsessi, et rakendada komponentide ja demonstratsioonide rahvusvahelistumist ning kirjutada dokumente

7. Testige uuesti ja optimeerige kood

8. Avage alamagent ja helistage koodi ülevaatamiseks ja optimeerimiseks numbril `.agents/skills/js_review/SKILL.md`.

9. Jälle silumine