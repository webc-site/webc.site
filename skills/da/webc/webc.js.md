
  For `js`-komponenten skal du bruge `Light DOM` til at implementere komponenten i `src/component name/_.js`.

  Brug relative stier til at importere andre komponenter, såsom: `import "../komponentnavn/_.js"` (`js` importerer ikke `styl`, rammen vil automatisk indsætte det).

  `this` Definer kun webkomponentens oprindelige tilbagekaldsfunktion, skriv de andre som uafhængige funktioner, indsæt `this` og de nødvendige parametre.

  Ud over de eksternt eksponerede grænseflader, for at lette trærystende optimering og kodekomprimering, er det forbudt at binde brugerdefinerede private attributter på `this` (brug `this.$` til aflæsning af funktioner), og funktioner af høj orden kan bruges til at returnere lukninger til at holde mellemliggende variabler.

  Skriv ikke `constructor`, attributten er hentet i `connectedCallback`.


  Se [./js.md](./js.md) for at genbruge de offentlige funktioner under `src/js/`

  For containere skal du bruge `slot` i stedet for attributter.
  Hvis du har brug for at indlæse data, skal du blotlægge indlæsningsgrænsefladen for det øverste lag i form af en asynkron tilbagekaldsfunktion og bruge kommentarer til at angive formatet på returværdien.
  Komponenter skal undgå hukommelseslækager. `disconnectedCallback` flet afinstallationshændelser til én funktion `this.$` og skriv ikke flere afinstallationsfunktioner.
  Interfacereturværdien kan være en enkelt værdi, et array eller et array af arrays, ikke et objekt.
  Hvis komponenten har flere tilstande, skal du bruge kommentarer med flere linjer til klart at beskrive dataformatet for hver tilstand. (Lad være med `*` foran hver linje af kommentarer)
  Tilstandsskift ved hjælp af numeriske konstanter (defineret til `const.js`).
  Mens tilbagekaldet indlæses, skal du vise animation med `const xx = newEl('b');xx.className="Ing"` og `@import "../Ing/_.styl"` i `_.styl`