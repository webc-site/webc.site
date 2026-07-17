
  For `js`-komponenten, bruk `Light DOM` for å implementere komponenten i `src/component name/_.js`.

  Bruk relative baner for å importere andre komponenter, for eksempel: `import "../component name/_.js"` (`js` importerer ikke `styl`, rammeverket vil automatisk injisere det).

  `this` Definer kun den opprinnelige tilbakeringingsfunksjonen til webkomponenten, skriv de andre som uavhengige funksjoner, send inn `this` og de nødvendige parameterne.

  I tillegg til de eksternt eksponerte grensesnittene er det forbudt å binde tilpassede private attributter på `this` (bruk `this.$` for å laste ut funksjoner), for å lette trerystende optimalisering og kodekomprimering, og funksjoner av høy orden kan brukes til å returnere lukkinger for å holde mellomvariabler.

  Ikke skriv `constructor`, attributtet er hentet i `connectedCallback`.


  Se [./js.md](./js.md) for å gjenbruke de offentlige funksjonene under `src/js/`

  For beholdere, bruk `slot` i stedet for attributter.
  Hvis du trenger å laste inn data, utsett lastegrensesnittet for det øvre laget i form av en asynkron tilbakeringingsfunksjon, og bruk kommentarer for å indikere formatet til returverdien.
  Komponenter må unngå minnelekkasjer. `disconnectedCallback` slå sammen avinstalleringshendelser til én funksjon `this.$` og ikke skriv flere avinstalleringsfunksjoner.
  Grensesnittets returverdi kan være en enkelt verdi, en matrise eller en matrise med matriser, ikke et objekt.
  Hvis komponenten har flere tilstander, bruk kommentarer med flere linjer for å tydelig beskrive dataformatet for hver tilstand. (Ikke før hver linje med kommentarer med `*`)
  Tilstandsbytte ved bruk av numeriske konstanter (definert til `const.js`).
  Mens tilbakeringingen lastes, vis animasjon med `const xx = newEl('b');xx.className="Ing"` og `@import "../Ing/_.styl"` i `_.styl`