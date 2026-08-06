
  Voor de `js` component implementeert u de component met behulp van `Light DOM` in `src/webc/componentname.js`.

  Gebruik relatieve paden om andere componenten te importeren, zoals: `import "./component name.js"` (Importeer in het JS-bestand van elke component eerst de afhankelijkheden en importeer vervolgens de overeenkomstige `_.styl`, bijvoorbeeld `importeer "./component name/_.styl";`).

  `this` Definieer alleen de native callback-functie van de webcomponent, schrijf de andere als onafhankelijke functies, geef `this` en de vereiste parameters door.

  Naast de extern blootgestelde interfaces is het, om boomschuddende optimalisatie en codecompressie te vergemakkelijken, verboden om aangepaste privékenmerken te binden op `this` (gebruik `this.$` voor het ontladen van functies), en functies van hoge orde kunnen worden gebruikt om sluitingen terug te geven om tussenvariabelen vast te houden.

  Schrijf niet `constructor`, het attribuut wordt verkregen in `connectedCallback`.


  Raadpleeg [./js.md](./js.md) om de publieke functies onder `src/js/` opnieuw te gebruiken

  Gebruik voor containers `slot` in plaats van attributen.
  Als u gegevens moet laden, stelt u de laadinterface bloot aan de bovenste laag in de vorm van een asynchrone callback-functie en gebruikt u opmerkingen om het formaat van de geretourneerde waarde aan te geven.
  Componenten moeten geheugenlekken voorkomen. `disconnectedCallback` voeg verwijderingsgebeurtenissen samen in één functie `this.$` en schrijf niet meerdere verwijderingsfuncties.
  De retourwaarde van de interface kan een enkele waarde, een array of een array van arrays zijn, en geen object.
  Als de component meerdere statussen heeft, gebruik dan commentaar van meerdere regels om de gegevensindeling van elke status duidelijk te beschrijven. (Laat elke regel commentaar niet voorafgaan door `*`)
  Statuswisseling, met behulp van numerieke constanten (gedefinieerd als `const.js`).
  Wanneer de callback wordt geladen, gebruikt u `const xx = newEl('b');xx.className="Ing"` om de animatie weer te geven en introduceert u afhankelijkheden via `import "./Ing.js"` in het JS-componentbestand.