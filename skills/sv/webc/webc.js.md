
  För `js`-komponenten, implementera komponenten med `Light DOM` i `src/webc/componentname.js`.

  Använd relativa sökvägar för att importera andra komponenter, såsom: `import "./komponentnamn.js"` (I JS-filen för varje komponent importerar du först beroenden och importerar sedan motsvarande `_.styl`, till exempel `import "./komponentnamn/_.styl";`).

  `this` Definiera endast webbkomponentens inbyggda callback-funktion, skriv de andra som oberoende funktioner, skicka in `this` och de nödvändiga parametrarna.

  Utöver de externt exponerade gränssnitten, för att underlätta trädskakningsoptimering och kodkomprimering, är det förbjudet att binda anpassade privata attribut på `this` (använd `this.$` för avlastningsfunktioner), och funktioner av hög ordning kan användas för att returnera stängningar för att hålla mellanliggande variabler.

  Skriv inte `constructor`, attributet erhålls i `connectedCallback`.


  Se [./js.md](./js.md) för att återanvända de offentliga funktionerna under `src/js/`

  För behållare, använd `slot` istället för attribut.
  Om du behöver ladda data, exponera laddningsgränssnittet för det övre lagret i form av en asynkron återuppringningsfunktion och använd kommentarer för att ange formatet på returvärdet.
  Komponenter måste undvika minnesläckor. `disconnectedCallback` slå samman avinstallationshändelser till en funktion `this.$` och skriv inte flera avinstallationsfunktioner.
  Gränssnittets returvärde kan vara ett enstaka värde, en array eller en array av arrayer, inte ett objekt.
  Om komponenten har flera tillstånd, använd flerradskommentarer för att tydligt beskriva dataformatet för varje tillstånd. (Föregå inte varje rad med kommentarer med `*`)
  Tillståndsväxling med numeriska konstanter (definierad till `const.js`).
  När återuppringningen laddas, använd `const xx = newEl('b');xx.className="Ing"` för att visa animationen och introducera beroenden genom `import "./Ing.js"` i komponent JS-filen.