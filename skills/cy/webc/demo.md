# Demo

Cyfeiriwch at `src/BoxX/demo` a datblygwch arddangosiad o'r gydran yn `src/component name/demo/`

`demo/_.pug`, is-dempled demo

Dim ond tagiau cydrannau minimalaidd sy'n cael eu cynnwys, nid oes angen tudalen gyflawn, a gwaherddir mewnforio arddulliau a sgriptiau. Bydd y fframwaith yn chwistrellu'n awtomatig (fel `demo/_.styl`, `demo/_.js`).

Peidiwch ag ysgrifennu teitl (er enghraifft, peidiwch ag ysgrifennu xxx demo), peidiwch ag ysgrifennu enw'r gydran, peidiwch â chyflwyno'r gydran, ysgrifennwch statws yr achos defnydd demo yn unig (os nad oes statws, ysgrifennwch ddim teitl)

Mae elfen wraidd `_.pug` yn defnyddio `main.demo.Lg` , sydd wedi diffinio'r arddull yn `demo/_.styl` ac nid yw'n diffinio arddull `main.demo.Lg` ei hun.

Dylai cynhwysydd y gydran arddangos gael ei alinio â `main.demo.Lg`, ac ni ddylai fod `margin` a `padding` rhyngddynt, oherwydd bod `main.demo` ei hun eisoes wedi gosod `padding`, a bydd ei osod yn wag yn cael ei ailadrodd.

`demo/_.styl` Os mai dim ond un gydran arddangos sydd, ni fydd gan ei gynhwysydd ffrâm allanol, a gosodwch `max-width` yn unig (oherwydd bydd y cynhwysydd cyflwyno yn ychwanegu ffrâm allanol yn awtomatig). Os oes rhai lluosog, gall y cynhwysydd gael ei wahanu gan ffrâm allanol.

Peidiwch ag ysgrifennu `img` yn `demo/_.pug`, defnyddiwch `demo/_.styl` i osod y ddelwedd gefndir

Os oes gan y gydran ffurfiau lluosog, dangoswch nhw mewn trefn (fel llwytho, data gwag, data, methu, ac ati), gosodiad fertigol ystwyth

`demo/_.styl`: `stylus` arddull y dudalen demo, dilynwch fanylebau'r cod ac estheteg dylunio [./styl.md](./styl.md)

Peidiwch ag ysgrifennu `@import '../_.styl'` i fewnforio'r gydran i'w dangos, bydd yn cael ei chwistrellu'n awtomatig

Mewnforiwch `@import '../../Btn/_.styl'` i `demo/_.styl` a defnyddiwch `.Btn`

`demo/_.js`: Ffoniwch y sgript, fformat `export default (root) => { ... }`, paramedr `root` yw'r gwesteiwr (`document` neu elfen wraidd y cynhwysydd blwch tywod)

`D.createElement` wedi'i wahardd, defnyddiwch `newEl` a grybwyllir gan [./js.md](./js.md)

Mae `js` wedi'i wahardd i'w ddefnyddio yn `c-t`, ac ar gyfer rhyngwladoli `fLang`

Os yw `../_.js` (`../_.js` i ddangos y gydran ei hun, mae angen mewngludo'r cydrannau dibynnol sy'n ofynnol gan arddangosiadau eraill) dim ond `import` sydd ei angen, ac nid oes unrhyw gynnwys penodol yn cael ei fewnforio, y gellir ei hepgor (bydd y fframwaith yn ei chwistrellu'n awtomatig)

`pug` Dim angen mewnforio `js` a `styl` , bydd y fframwaith yn eu chwistrellu'n awtomatig