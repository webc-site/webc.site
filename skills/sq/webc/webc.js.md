
  Për komponentin `js`, përdorni `Light DOM` për të zbatuar komponentin në `src/emri i komponentit/_.js`.

  Përdorni shtigje relative për të importuar komponentë të tjerë, si p.sh.: `import "../component name/_.js"` (`js` nuk importon `styl`, korniza do ta injektojë automatikisht).

  `this` Përcaktoni vetëm funksionin origjinal të kthimit të thirrjes së komponentit të uebit, shkruani të tjerët si funksione të pavarura, kaloni në `this` dhe parametrat e kërkuar.

  Përveç ndërfaqeve të ekspozuara nga jashtë, për të lehtësuar optimizimin e lëkundjes së pemëve dhe kompresimin e kodit, është e ndaluar të lidhni atribute private të personalizuara në `this` (përdorni `this.$` për shkarkimin e funksioneve), dhe funksionet e rendit të lartë mund të përdoren për të kthyer mbylljet për të mbajtur variabla të ndërmjetme.

  Mos shkruani `constructor`, atributi merret në `connectedCallback`.


  Referojuni [./js.md](./js.md) për të ripërdorur funksionet publike nën `src/js/`

  Për kontejnerët, përdorni `slot` në vend të atributeve.
  Nëse keni nevojë të ngarkoni të dhëna, ekspozoni ndërfaqen e ngarkimit në shtresën e sipërme në formën e një funksioni kthimi asinkron dhe përdorni komentet për të treguar formatin e vlerës së kthimit.
  Komponentët duhet të shmangin rrjedhjet e kujtesës. `disconnectedCallback` bashkoni ngjarjet e çinstalimit në një funksion `this.$` dhe mos shkruani funksione të shumëfishta çinstalimi.
  Vlera e kthimit të ndërfaqes mund të jetë një vlerë e vetme, një grup ose një grup vargjesh, jo një objekt.
  Nëse komponenti ka shumë gjendje, përdorni komente me shumë rreshta për të përshkruar qartë formatin e të dhënave të secilit shtet. (Mos i paraprini çdo rreshti komentesh me `*`)
  Ndërrimi i gjendjes, duke përdorur konstante numerike (të përcaktuara në `const.js`).
  Ndërsa kthimi i telefonatës po ngarkohet, shfaq animacionin me `const xx = newEl('b');xx.className="Ing"` dhe `@import "../Ing/_.styl"` në `_.styl`