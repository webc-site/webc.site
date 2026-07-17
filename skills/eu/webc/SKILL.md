---
name: webc
---

Jarraitu prozesua, egin plan bat eta garatu urratsez urrats omisioak ekiditeko

1. Exekutatu `./sh/new.js proiektu motaren osagaiaren izena` eta sortu osagaien karpeta bat `src` direktorioaren azpian
   Proiektu mota `css` izan daiteke (estilo hutsa), `js` (web-orriaren osagaia)
   Idatzi maiuskulaz osagaiaren izenaren lehen letra

2. Irakurri `.agents/doc/code` kodetze-zehaztapenak eta gero garatu.

   `_.styl` atalean, lehenik `@import "../component name/_.styl"` mendekotasunak inportatzeko. Mesedez, jarraitu [./styl.md](./styl.md) kodeketa-estandarrak eta diseinu-estetika.

   Aldatu beste osagai batzuen estiloak eta, horren ordez, zuzenean inportatu, erabili `@import` hasieran eta desgaitu `extend`.

   Erakusketarako erabiltzen den estiloa debekatuta dago `osagaiaren izena/_.styl`-en idaztea eta `demo/_.styl`-n idaztea.

   `js` osagairako, garatu [webc.js.md](./webc.js.md) prozesuaren arabera (ezabatu `osagaiaren izena/_.js` estilo hutseko osagaietarako)

3. Sakatu [demo.md](./demo.md) prozesuaren garapenaren erakustaldia

4. Exekutatu `./test.sh` erroko direktorioa. Konpondu akatsak eta alarmak, atera funtzioak, optimizatu kodea eta saihestu bikoizketak eta erredundantziak. Kodearen zehaztapenetarako, ikus `.agents/doc/code/js.md`

5. Irakurri [dbg.md](./dbg.md) eta arazketa osagaiak prozesuaren arabera

6. Jarraitu [i18n.md](./i18n.md) prozesua osagaien eta erakusketen nazioartekotzea ezartzeko eta dokumentuak idazteko

7. Probatu berriro eta optimizatu kodea

8. Ireki azpi-agente bat eta deitu `.agents/skills/js_review/SKILL.md` kodea berrikusteko eta optimizatzeko.

9. Berriro arazketa