
  Komponentam `js` izmantojiet `Light DOM`, lai ieviestu komponentu `src/component name/_.js`.

  Izmantojiet relatīvos ceļus, lai importētu citus komponentus, piemēram: `importēt "../component name/_.js"` (`js` neimportē `styl`, ietvars to automātiski ievadīs).

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
  Kamēr notiek atzvanīšanas ielāde, rādīt animāciju ar `const xx = newEl('b');xx.className="Ing"` un `@import "../Ing/_.styl"` `_.styl`