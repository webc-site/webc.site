
  Za `js` komponentu, koristite `Light DOM` za implementaciju komponente u `src/component name/_.js`.

  Koristite relativne putove za uvoz drugih komponenti, kao što su: `import "../component name/_.js"` (`js` ne uvozi `styl`, framework će ga automatski ubaciti).

  `this` Definirajte samo izvornu funkciju povratnog poziva web komponente, ostale napišite kao neovisne funkcije, proslijedite `this` i potrebne parametre.

  Uz vanjska izložena sučelja, kako bi se olakšala optimizacija stabla i kompresija koda, zabranjeno je vezati prilagođene privatne atribute na `this` (koristite `this.$` za funkcije pražnjenja), a funkcije visokog reda mogu se koristiti za vraćanje zatvaranja za držanje međuvarijabli.

  Nemojte pisati `constructor`, atribut se dobiva u `connectedCallback`.


  Pogledajte [./js.md](./js.md) za ponovno korištenje javnih funkcija pod `src/js/`

  Za spremnike koristite `slot` umjesto atributa.
  Ako trebate učitati podatke, izložite sučelje za učitavanje gornjem sloju u obliku asinkrone funkcije povratnog poziva i upotrijebite komentare za označavanje formata povratne vrijednosti.
  Komponente moraju izbjegavati curenje memorije. `disconnectedCallback` spojite događaje deinstalacije u jednu funkciju `this.$` i nemojte pisati više funkcija deinstalacije.
  Povratna vrijednost sučelja može biti jedna vrijednost, niz ili niz nizova, a ne objekt.
  Ako komponenta ima više stanja, upotrijebite komentare u više redaka da jasno opišete format podataka svakog stanja. (Ne stavljajte `*` ispred svakog retka komentara)
  Promjena stanja, korištenje numeričkih konstanti (definiranih na `const.js`).
  Dok se povratni poziv učitava, prikaži animaciju s `const xx = newEl('b');xx.className="Ing"` i `@import "../Ing/_.styl"` u `_.styl`