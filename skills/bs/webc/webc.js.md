
  Za `js` komponentu, koristite `Light DOM` da implementirate komponentu u `src/ime komponente/_.js`.

  Koristite relativne putanje za uvoz drugih komponenti, kao što su: `import "../component name/_.js"` (`js` ne uvozi `styl`, okvir će ga automatski ubaciti).

  `this` Definirajte samo izvornu funkciju povratnog poziva web komponente, napišite ostale kao nezavisne funkcije, proslijedite `this` i potrebne parametre.

  Osim vanjskih izloženih sučelja, kako bi se olakšala optimizacija potresanja stabla i kompresija koda, zabranjeno je vezivanje prilagođenih privatnih atributa na `this` (koristite `this.$` za istovar funkcija), a funkcije visokog reda se mogu koristiti za vraćanje zatvaranja za držanje srednjih varijabli.

  Nemojte pisati `constructor`, atribut se dobija u `connectedCallback`.


  Pogledajte [./js.md](./js.md) za ponovno korištenje javnih funkcija pod `src/js/`

  Za kontejnere koristite `slot` umjesto atributa.
  Ako trebate učitati podatke, izložite sučelje za učitavanje gornjem sloju u obliku asinkrone funkcije povratnog poziva i koristite komentare da naznačite format vraćene vrijednosti.
  Komponente moraju izbjegavati curenje memorije. `disconnectedCallback` spojite događaje deinstaliranja u jednu funkciju `this.$` i nemojte pisati više funkcija deinstaliranja.
  Povratna vrijednost interfejsa može biti jedna vrijednost, niz ili niz nizova, a ne objekt.
  Ako komponenta ima više stanja, koristite komentare u više redaka da jasno opišete format podataka svakog stanja. (Nemojte prethoditi svakom retku komentara sa `*`)
  Prebacivanje stanja, korištenjem numeričkih konstanti (definiranih na `const.js`).
  Dok se povratni poziv učitava, prikaži animaciju sa `const xx = newEl('b');xx.className="Ing"` i `@import "../Ing/_.styl"` u `_.styl`