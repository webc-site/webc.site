
  Għall-komponent `js`, uża `Light DOM` biex timplimenta l-komponent f'`src/isem tal-komponent/_.js`.

  Uża mogħdijiet relattivi biex timporta komponenti oħra, bħal: `importazzjoni "../component name/_.js"` (`js` ma timportax `styl`, il-qafas awtomatikament jinjettah).

  `this` Iddefinixxi biss il-funzjoni nattiva callback tal-komponent tal-web, ikteb l-oħrajn bħala funzjonijiet indipendenti, għaddi `this` u l-parametri meħtieġa.

  Minbarra l-interfaces esposti esternament, sabiex tiġi ffaċilitata l-ottimizzazzjoni tat-tħawwid tas-siġar u l-kompressjoni tal-kodiċi, huwa pprojbit li torbot attributi privati ​​tad-dwana fuq `this` (uża `this.$` għal funzjonijiet ta 'ħatt), u funzjonijiet ta' ordni għolja jistgħu jintużaw biex jirritorna għeluq biex iżżomm varjabbli intermedji.

  Tiktebx `constructor`, l-attribut jinkiseb f'`connectedCallback`.


  Irreferi għal [./js.md](./js.md) biex terġa' tuża l-funzjonijiet pubbliċi taħt `src/js/`

  Għall-kontenituri, uża `slot` minflok attributi.
  Jekk għandek bżonn tagħbija data, tesponi l-interface tat-tagħbija għas-saff ta 'fuq fil-forma ta' funzjoni ta 'callback asinkronika, u uża kummenti biex tindika l-format tal-valur tar-ritorn.
  Il-komponenti għandhom jevitaw tnixxijiet tal-memorja. `disconnectedCallback` għaqqad l-avvenimenti tad-diżinstallazzjoni f'funzjoni waħda `this.$` u tiktebx funzjonijiet tad-diżinstallazzjoni multipli.
  Il-valur tar-ritorn tal-interface jista 'jkun valur wieħed, firxa, jew firxa ta' arrays, mhux oġġett.
  Jekk il-komponent għandu stati multipli, uża kummenti b'ħafna linji biex tiddeskrivi b'mod ċar il-format tad-dejta ta 'kull stat. (Tqabbadx kull linja ta' kummenti b'`*`)
  Qlib ta' l-istat, bl-użu ta' kostanti numeriċi (definiti għal `const.js`).
  Waqt li r-callback ikun qed jgħabbi, uri animazzjoni b'`const xx = newEl('b');xx.className="Ing"` u `@import "../Ing/_.styl"` fi `_.styl`