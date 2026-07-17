
  För `js`-komponenten, använd `Light DOM` för att implementera komponenten i `src/component name/_.js`.

  Använd relativa sökvägar för att importera andra komponenter, såsom: `importera "../komponentnamn/_.js"` (`js` importerar inte `styl`, ramverket injicerar det automatiskt).

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
  Medan återuppringningen laddas, visa animering med `const xx = newEl('b');xx.className="Ing"` och `@import "../Ing/_.styl"` i `_.styl`