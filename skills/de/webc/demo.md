# Demo

Beziehen Sie sich auf `src/BoxX/demo` und entwickeln Sie eine Demo der Komponente in `src/component name/demo/`

`demo/_.pug`, Demo-Untervorlage

Es sind nur minimalistische Komponenten-Tags enthalten, es ist keine vollständige Seite erforderlich und der Import von Stilen und Skripten ist verboten. Das Framework fügt automatisch ein (z. B. `demo/_.styl`, `demo/_.js`).

Schreiben Sie keinen Titel (z. B. keine xxx-Demo), schreiben Sie keinen Komponentennamen, stellen Sie die Komponente nicht vor, schreiben Sie nur den Status des Demo-Anwendungsfalls (wenn kein Status vorhanden ist, schreiben Sie keinen Titel).

Das Stammelement von `_.pug` verwendet `main.demo.Lg` , das den Stil in `demo/_.styl` definiert hat und nicht den Stil von `main.demo.Lg` selbst definiert.

Der Container der Anzeigekomponente sollte an `main.demo.Lg` ausgerichtet sein und zwischen ihnen sollten sich keine `margin` und `padding` befinden, da `main.demo` selbst bereits `padding` festgelegt hat und das Leersetzen wiederholt wird.

`demo/_.styl` Wenn nur eine Anzeigekomponente vorhanden ist, verfügt ihr Container nicht über einen äußeren Rahmen und legt nur `max-width` fest (da der Präsentationscontainer automatisch einen äußeren Rahmen hinzufügt). Bei mehreren kann der Container durch einen Außenrahmen getrennt werden.

Schreiben Sie nicht `img` in `demo/_.pug`, sondern verwenden Sie `demo/_.styl`, um das Hintergrundbild festzulegen

Wenn die Komponente über mehrere Formulare verfügt, zeigen Sie diese bitte der Reihe nach an (z. B. Laden, leere Daten, Daten, fehlgeschlagen usw.), flexibles vertikales Layout

`demo/_.styl`: `stylus` Stil der Demoseite, bitte folgen Sie den Codespezifikationen und der Designästhetik von [./styl.md](./styl.md)

Schreiben Sie nicht `@import '../_.styl'`, um die zu demonstrierende Komponente zu importieren, sie wird automatisch injiziert

Bitte importieren Sie `@import '../../Btn/_.styl'` in `demo/_.styl` und verwenden Sie `.Btn`

`demo/_.js`: Rufen Sie das Skript auf, formatieren Sie `export default (root) => { ... }`, Parameter `root` ist der Host (`document` oder das Stammelement des Sandbox-Containers)

`D.createElement` ist verboten, verwenden Sie `newEl` erwähnt von [./js.md](./js.md)

`js` ist für die Verwendung in `c-t` und für die Internationalisierung `fLang` verboten

Wenn `../_.js` (`../_.js` die Komponente selbst anzeigen soll, müssen die von anderen Demos benötigten abhängigen Komponenten noch importiert werden) ist nur `import` erforderlich und es wird kein spezifischer Inhalt importiert, der weggelassen werden kann (das Framework fügt ihn automatisch ein).

`pug` `js` und `styl` müssen nicht importiert werden, das Framework fügt sie automatisch ein