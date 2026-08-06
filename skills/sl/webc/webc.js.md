
  Za komponento `js` implementirajte komponento z `Light DOM` v `src/webc/componentname.js`.

  Uporabite relativne poti za uvoz drugih komponent, kot je: `import "./component name.js"` (V datoteko JS vsake komponente najprej uvozite odvisnosti in nato uvozite ustrezne `_.styl`, na primer `import "./component name/_.styl";`).

  `this` Definirajte samo izvorno funkcijo povratnega klica spletne komponente, druge zapišite kot neodvisne funkcije, posredujte `this` in zahtevane parametre.

  Poleg zunanjih izpostavljenih vmesnikov je za lažjo optimizacijo drevnega stresanja in stiskanje kode prepovedano vezati zasebne atribute po meri na `this` (uporabite `this.$` za funkcije razkladanja), funkcije visokega reda pa je mogoče uporabiti za vrnitev zaprtij za shranjevanje vmesnih spremenljivk.

  Ne pišite `constructor`, atribut je pridobljen v `connectedCallback`.


  Glejte [./js.md](./js.md) za ponovno uporabo javnih funkcij pod `src/js/`

  Za vsebnike uporabite `slot` namesto atributov.
  Če morate naložiti podatke, izpostavite vmesnik za nalaganje zgornji plasti v obliki asinhrone funkcije za povratni klic in uporabite komentarje, da označite obliko vrnjene vrednosti.
  Komponente se morajo izogibati puščanju pomnilnika. `disconnectedCallback` združite dogodke odstranitve v eno funkcijo `this.$` in ne pišite več funkcij odstranitve.
  Vrnjena vrednost vmesnika je lahko ena sama vrednost, matrika ali matrika matrik, ne objekt.
  Če ima komponenta več stanj, uporabite večvrstične komentarje, da jasno opišete format podatkov vsakega stanja. (Ne postavljajte `*` pred vsako vrstico komentarja)
  Preklapljanje stanja z uporabo številskih konstant (definirano na `const.js`).
  Ko se povratni klic nalaga, uporabite `const xx = newEl('b');xx.className="Ing"` za prikaz animacije in uvedite odvisnosti prek `import "./Ing.js"` v komponentni datoteki JS.