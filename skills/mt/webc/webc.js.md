
  Għall-komponent `js`, implimenta l-komponent billi tuża `Light DOM` f'`src/webc/componentname.js`.

  Uża mogħdijiet relattivi biex timporta komponenti oħra, bħal: `import "./component name.js"` (Fil-fajl JS ta 'kull komponent, il-`_.styl` korrispondenti għandu jiġi importat fil-bidu, bħal `import "./component name/_.styl";`).

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
  Meta r-callback ikun qed jgħabbi, uża `const xx = newEl('b');xx.className="Ing"` biex turi l-animazzjoni, u daħħal dipendenzi permezz ta' `import "./Ing.js"` fil-fajl JS tal-komponent.