
  Implementieren Sie für die Komponente `js` die Komponente mit `Light DOM` in `src/webc/componentname.js`.

  Verwenden Sie relative Pfade, um andere Komponenten zu importieren, wie zum Beispiel: `import "./component name.js"` (In der JS-Datei jeder Komponente muss das entsprechende `_.styl` am Anfang importiert werden, wie zum Beispiel `import "./component name/_.styl";`).

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
  Wenn der Rückruf geladen wird, verwenden Sie `const xx = newEl('b');xx.className="Ing"`, um die Animation anzuzeigen, und führen Sie Abhängigkeiten über `import "./Ing.js"` in der JS-Datei der Komponente ein.