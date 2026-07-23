
  Per il componente `js`, implementa il componente utilizzando `Light DOM` in `src/webc/componentname.js`.

  Utilizza percorsi relativi per importare altri componenti, ad esempio: `import "./component name.js"` (Nel file JS di ciascun componente, importa prima le dipendenze, quindi importa il corrispondente `_.styl`, ad esempio `import "./component name/_.styl";`).

  `this` Definisci solo la funzione di callback nativa del componente web, scrivi le altre come funzioni indipendenti, passa `this` e i parametri richiesti.

  Oltre alle interfacce esposte esternamente, al fine di facilitare l'ottimizzazione dello scuotimento degli alberi e la compressione del codice, è vietato associare attributi privati ​​personalizzati su `this` (utilizzare `this.$` per scaricare funzioni) e le funzioni di ordine superiore possono essere utilizzate per restituire chiusure per contenere variabili intermedie.

  Non scrivere `constructor`, l'attributo si ottiene in `connectedCallback`.


  Fare riferimento a [./js.md](./js.md) per riutilizzare le funzioni pubbliche in `src/js/`

  Per i contenitori, utilizza `slot` invece degli attributi.
  Se è necessario caricare dati, esporre l'interfaccia di caricamento al livello superiore sotto forma di funzione di callback asincrona e utilizzare i commenti per indicare il formato del valore restituito.
  I componenti devono evitare perdite di memoria. `disconnectedCallback` unisci gli eventi di disinstallazione in un'unica funzione `this.$` e non scrivere più funzioni di disinstallazione.
  Il valore restituito dall'interfaccia può essere un valore singolo, un array o un array di array, non un oggetto.
  Se il componente ha più stati, utilizza commenti su più righe per descrivere chiaramente il formato dei dati di ciascuno stato. (Non far precedere ogni riga di commento con `*`)
  Cambio di stato, utilizzando costanti numeriche (definite in `const.js`).
  Durante il caricamento del callback, utilizza `const xx = newEl('b');xx.className="Ing"` per visualizzare l'animazione e introduce le dipendenze tramite `import "./Ing.js"` nel file JS del componente.