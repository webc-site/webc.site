# Demo

Ikusi `src/webc/BoxX/demo` eta garatu osagaiaren demo bat `src/webc/component name/demo/` atalean

`demo/_.pug`, demo azpitxantiloia

Osagai minimalisten etiketak bakarrik sartzen dira, ez da orri osoa behar eta estiloak eta scriptak inportatzea debekatuta dago. Markoa automatikoki injektatuko da (adibidez, `demo/_.styl`, `demo/_.js`).

Ez idatzi izenbururik (adibidez, ez idatzi xxx demo), ez idatzi osagaiaren izena, ez sartu osagaia, idatzi demoaren erabilera kasuaren egoera soilik (egoerarik ez badago, ez idatzi izenbururik)

`_.pug`-ren erro-elementuak `main.demo.Lg` erabiltzen du, `demo/_.styl`-n estiloa definitu duena eta ez du `main.demo.Lg`-ren estiloa bera definitzen.

Bistaratzeko osagaiaren edukiontzia `main.demo.Lg`-rekin lerrokatuta egon behar da, eta ez luke `margin` eta `padding` artean egon behar, `main.demo`k berak dagoeneko ezarri duelako `padding`, eta hutsik ezartzea errepikatuko da.

`demo/_.styl` Bistaratzeko osagai bakarra badago, bere edukiontziak ez du kanpoko markorik izango, eta `max-width` bakarrik ezarriko du (aurkezpenaren edukiontziak automatikoki kanpoko marko bat gehituko duelako). Hainbat badaude, edukiontzia kanpoko marko batez bereiz daiteke.

Ez idatzi `img` `demo/_.pug`-n, erabili `demo/_.styl` atzeko planoa ezartzeko

Osagaiak forma anitz baditu, mesedez bistaratu ordenan (adibidez, kargatzea, datu hutsak, datuak, huts egin du, etab.), malgutu diseinu bertikala

`demo/_.styl`: `stylus` demo orriaren estiloa, jarraitu [./styl.md](./styl.md) kodearen zehaztapenak eta diseinu estetika.

Ez baduzu `@import '../_.styl'` idazten frogatu beharreko osagaia inportatzeko, automatikoki injektatuko da; debekatuta dago `@import` `demo/_.styl`n erabiltzea beste osagai-estilo batzuk inportatzeko. Demoa beste osagai batzuen araberakoa bada (adibidez, `.Btn` botoia), inportatu menpeko osagaiak `import "../../Btn.js"` bidez `demo/_.js`n.

`demo/_.js`: deitu scriptari, formatua `export default (root) => { ... }`, `root` parametroa ostalaria da (`document` edo sandbox edukiontziaren erro-elementua)

`D.createElement` debekatuta dago, erabili [./js.md](./js.md) aipatzen den `newEl`

`js` debekatuta dago `c-t`n erabiltzea eta nazioartekotzea `fLang`

`../component name.js` (`../component name.js` osagaia bera bistaratu behar bada, eta demoak eskatzen dituen menpeko beste osagai batzuk oraindik inportatu behar dira), `import` baino ez da beharrezkoa, eta ez da eduki zehatzik inportatzen, hori kendu daiteke (esparruak automatikoki sartuko du)

`pug` Ez da `js` eta `styl` inportatu beharrik, markoak automatikoki sartuko ditu