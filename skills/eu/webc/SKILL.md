---
name: webc
---

Jarraitu prozesua, egin plan bat eta garatu urratsez urrats omisioak ekiditeko

1. Exekutatu `./sh/new.js proiektu motako osagaiaren izena` eta sortu osagaia `src/webc` direktorioan
   Proiektu mota `css` izan daiteke (estilo hutsa), `js` (web-orriaren osagaia)
   Idatzi maiuskulaz osagaiaren izenaren lehen letra

2. Irakurri `.agents/doc/code` kodetze-zehaztapenak eta gero garatu.

   Osagaiaren estiloa `_.styl`-n idatzita dago. Erakusketarako erabilitako estiloa `demo/_.styl`n idatzita dago. Debekatuta dago `osagaiaren izena/_.style`n idaztea.

  Beste osagai batzuetatik estiloak inportatzeko `@import` erabiltzea debekatuta dago bai `_.styl` bai `demo/_.styl`n.

  Jarraitu [./styl.md](./styl.md) kodeketa-estandarrak eta diseinu-estetika.

  Menpeko osagaiak (eta haien estiloak) `inportatu "./other components.js"` bidez inportatzen dira `webc/componentname.js`-n; Erakusketarako menpekotasunak `inportatu "../../other components.js"` bidez inportatzen dira `demo/_.js`n.

   Osagai guztiek (estilo hutseko osagaiak barne) `osagaiaren name.js` script-fitxategi bat izan behar dute. Estilo hutseko osagaien `osagaiaren name.js`ak dagokion `_.styl` soilik inportatzen du. JS logika duten osagaietarako, jarraitu [webc.js.md](./webc.js.md) prozesua garatzeko.

3. Sakatu [demo.md](./demo.md) prozesuaren garapenaren erakustaldia

4. Exekutatu `./test.sh` erroko direktorioa. Konpondu akatsak eta alarmak, atera funtzioak, optimizatu kodea eta saihestu bikoizketak eta erredundantziak. Kodearen zehaztapenetarako, ikus `.agents/doc/code/js.md`

5. Irakurri [dbg.md](./dbg.md) eta arazketa osagaiak prozesuaren arabera

6. Jarraitu [i18n.md](./i18n.md) prozesua osagaien eta erakusketen nazioartekotzea ezartzeko eta dokumentuak idazteko

7. Probatu berriro eta optimizatu kodea

8. Ireki azpi-agente bat eta deitu `.agents/skills/js_review/SKILL.md` kodea berrikusteko eta optimizatzeko.

9. Berriro arazketa