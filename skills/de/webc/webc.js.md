
  Verwenden Sie für die Komponente `js` `Light DOM`, um die Komponente in `src/component name/_.js` zu implementieren.

  Verwenden Sie relative Pfade, um andere Komponenten zu importieren, wie zum Beispiel: `import "../component name/_.js"` (`js` importiert `styl` nicht, das Framework fügt es automatisch ein).

  `this` Definieren Sie nur die native Rückruffunktion der Webkomponente, schreiben Sie die anderen als unabhängige Funktionen, übergeben Sie `this` und die erforderlichen Parameter.

  Zusätzlich zu den extern bereitgestellten Schnittstellen ist es zur Erleichterung der Tree-Shaking-Optimierung und Codekomprimierung verboten, benutzerdefinierte private Attribute an `this` zu binden (verwenden Sie `this.$` zum Entladen von Funktionen), und Funktionen höherer Ordnung können verwendet werden, um Abschlüsse zurückzugeben, um Zwischenvariablen zu halten.

  Schreiben Sie nicht `constructor`, das Attribut wird in `connectedCallback` abgerufen.


  Informationen zur Wiederverwendung der öffentlichen Funktionen unter `src/js/` finden Sie unter [./js.md](./js.md).

  Verwenden Sie für Container `slot` anstelle von Attributen.
  Wenn Sie Daten laden müssen, stellen Sie die Ladeschnittstelle der oberen Ebene in Form einer asynchronen Rückruffunktion zur Verfügung und verwenden Sie Kommentare, um das Format des Rückgabewerts anzugeben.
  Komponenten müssen Speicherlecks vermeiden. `disconnectedCallback` führen Sie Deinstallationsereignisse in einer Funktion zusammen `this.$` und schreiben Sie nicht mehrere Deinstallationsfunktionen.
  Der Rückgabewert der Schnittstelle kann ein einzelner Wert, ein Array oder ein Array von Arrays sein, kein Objekt.
  Wenn die Komponente mehrere Zustände hat, verwenden Sie mehrzeilige Kommentare, um das Datenformat jedes Zustands klar zu beschreiben. (Stellen Sie nicht vor jeder Kommentarzeile `*` ein.)
  Zustandsumschaltung mithilfe numerischer Konstanten (definiert als `const.js`).
  Während der Rückruf geladen wird, zeigen Sie die Animation mit `const xx = newEl('b');xx.className="Ing"` und `@import "../Ing/_.styl"` in `_.styl` an