
  Ar gyfer y gydran `js`, gweithredwch y gydran gan ddefnyddio `Light DOM` yn `src/webc/componentname.js`.

  Defnyddiwch lwybrau perthynol i fewnforio cydrannau eraill, megis: `mewnforio "./component name.js"` (Yn ffeil JS pob cydran, mewngludo'r dibyniaethau yn gyntaf, ac yna mewngludo'r `_.styl` cyfatebol, er enghraifft `mewnforio"./component name/_.styl";`).

  `this` Diffiniwch swyddogaeth galw'n ôl brodorol y gydran we yn unig, ysgrifennwch y lleill fel swyddogaethau annibynnol, pasiwch `this` a'r paramedrau gofynnol.

  Yn ogystal â'r rhyngwynebau allanol, er mwyn hwyluso optimeiddio ysgwyd coed a chywasgu cod, gwaherddir rhwymo priodoleddau preifat personol ar `this` (defnyddiwch `this.$` ar gyfer swyddogaethau dadlwytho), a gellir defnyddio swyddogaethau lefel uchel i ddychwelyd cau i ddal newidynnau canolraddol.

  Peidiwch ag ysgrifennu `constructor`, ceir y briodwedd yn `connectedCallback`.


  Cyfeiriwch at [./js.md](./js.md) i ailddefnyddio'r swyddogaethau cyhoeddus o dan `src/js/`

  Ar gyfer cynwysyddion, defnyddiwch `slot` yn lle priodoleddau.
  Os oes angen i chi lwytho data, datgelwch y rhyngwyneb llwytho i'r haen uchaf ar ffurf swyddogaeth galw'n ôl asyncronig, a defnyddiwch sylwadau i nodi fformat y gwerth dychwelyd.
  Rhaid i gydrannau osgoi gollyngiadau cof. `disconnectedCallback` uno digwyddiadau dadosod yn un swyddogaeth `this.$` a pheidiwch ag ysgrifennu swyddogaethau dadosod lluosog.
  Gall gwerth dychwelyd y rhyngwyneb fod yn werth sengl, yn arae, neu'n amrywiaeth o araeau, nid gwrthrych.
  Os oes gan y gydran gyflyrau lluosog, defnyddiwch sylwadau aml-linell i ddisgrifio fformat data pob cyflwr yn glir. (Peidiwch â rhoi `*` o flaen pob llinell o sylwadau)
  Newid cyflwr, gan ddefnyddio cysonion rhifol (a ddiffinnir i `const.js`).
  Pan fydd y galwad yn ôl yn llwytho, defnyddiwch `const xx = newEl('b');xx.className="Ing"` i arddangos yr animeiddiad, a chyflwyno dibyniaethau trwy `import "./Ing.js"` yn y ffeil JS cydran.