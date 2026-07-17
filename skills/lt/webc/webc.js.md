
  Komponentui `js` naudokite `Light DOM`, kad įdiegtumėte komponentą `src/component name/_.js`.

  Naudokite santykinius kelius, kad importuotumėte kitus komponentus, pvz.: `importuokite "../component name/_.js"` (`js` neimportuoja `styl`, sistema jį automatiškai įves).

  `this` Apibrėžkite tik vietinę žiniatinklio komponento atgalinio skambinimo funkciją, kitas parašykite kaip nepriklausomas funkcijas, pateikite `this` ir reikiamus parametrus.

  Be išorinių sąsajų, siekiant palengvinti optimizavimą ir kodo glaudinimą, draudžiama susieti pasirinktinius privačius atributus `this` (naudokite `this.$` iškrovimo funkcijoms), o aukštesnės eilės funkcijos gali būti naudojamos norint grąžinti uždarymus tarpiniams kintamiesiems.

  Nerašykite `constructor`, atributas gaunamas `connectedCallback`.


  Jei norite pakartotinai naudoti viešąsias funkcijas pagal `src/js/`, žr. [./js.md](./js.md)

  Sudėtiniams rodiniams naudokite `slot` vietoj atributų.
  Jei reikia įkelti duomenis, parodykite įkėlimo sąsają viršutiniam sluoksniui kaip asinchroninio atgalinio skambinimo funkciją ir naudokite komentarus, kad nurodytumėte grąžinamos reikšmės formatą.
  Komponentai turi vengti atminties nutekėjimo. `disconnectedCallback` sujunkite pašalinimo įvykius į vieną funkciją `this.$` ir nerašykite kelių pašalinimo funkcijų.
  Sąsajos grąžinimo vertė gali būti viena reikšmė, masyvas arba masyvų masyvas, o ne objektas.
  Jei komponentas turi kelias būsenas, naudokite kelių eilučių komentarus, kad aiškiai apibūdintumėte kiekvienos būsenos duomenų formatą. (Prieš kiekvieną komentarų eilutę nerašykite `*`)
  Būsenos perjungimas naudojant skaitines konstantas (nustatyta `const.js`).
  Kol įkeliamas atgalinis skambutis, rodykite animaciją su `const xx = newEl('b');xx.className="Ing"` ir `@import "../Ing/_.styl"` `_.styl`