
  Komponentam `js` ieviesiet komponentu, izmantojot `Light DOM` failā `src/webc/componentname.js`.

  Izmantojiet relatīvos ceļus, lai importētu citus komponentus, piemēram: `importēt "./component name.js"` (katra komponenta JS failā sākumā ir jāimportē atbilstošais `_.styl`, piemēram, `importēt "./component name/_.styl";`).

  `this` Definējiet tikai tīmekļa komponenta vietējo atzvanīšanas funkciju, ierakstiet pārējās kā neatkarīgas funkcijas, nosūtiet `this` un nepieciešamos parametrus.

  Papildus ārēji atklātajām saskarnēm, lai atvieglotu koku satricinošu optimizāciju un koda saspiešanu, ir aizliegts saistīt pielāgotus privātos atribūtus `this` (izkraušanas funkcijām izmantojiet `this.$`), un augstas pakāpes funkcijas var izmantot, lai atgrieztu aizvērumus, lai saglabātu starpposma mainīgos.

  Nerakstiet `constructor`, atribūts tiek iegūts `connectedCallback`.


  Skatiet [./js.md](./js.md), lai atkārtoti izmantotu publiskās funkcijas sadaļā `src/js/`

  Konteineriem atribūtu vietā izmantojiet `slot`.
  Ja nepieciešams ielādēt datus, atveriet ielādes interfeisu augšējam slānim asinhronas atzvanīšanas funkcijas veidā un izmantojiet komentārus, lai norādītu atgriešanas vērtības formātu.
  Komponentiem ir jāizvairās no atmiņas noplūdēm. `disconnectedCallback` sapludiniet atinstalēšanas notikumus vienā funkcijā `this.$` un nerakstiet vairākas atinstalēšanas funkcijas.
  Interfeisa atgriešanas vērtība var būt viena vērtība, masīvs vai masīvu masīvs, nevis objekts.
  Ja komponentam ir vairāki stāvokļi, izmantojiet vairāku rindiņu komentārus, lai skaidri aprakstītu katra stāvokļa datu formātu. (Pirms katras komentāru rindas nepievienojiet `*`)
  Stāvokļa pārslēgšana, izmantojot skaitliskās konstantes (definētas kā `const.js`).
  Kad tiek ielādēts atzvans, izmantojiet `const xx = newEl('b');xx.className="Ing"`, lai parādītu animāciju, un komponenta JS failā ievadiet atkarības, izmantojot `import "./Ing.js"`.