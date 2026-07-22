
  Komponentui `js` įdiekite komponentą naudodami `Light DOM` `src/webc/componentname.js`.

  Norėdami importuoti kitus komponentus, naudokite santykinius kelius, pvz.: `importuoti "./component name.js"` (kiekvieno komponento JS failo pradžioje reikia importuoti atitinkamą `_.styl`, pvz., `importuoti "./component name/_.styl";`).

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
  Kai įkeliamas atgalinis skambutis, naudokite `const xx = newEl('b');xx.className="Ing"`, kad būtų rodoma animacija, ir įtraukite priklausomybes per `import "./Ing.js"` komponento JS faile.