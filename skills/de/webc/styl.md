Verwenden Sie Standard `css`, schreiben Sie nicht `css` beginnend mit `-webkit-` (das Framework fügt es automatisch ein).

Entwickeln Sie Komponentenstile mit modernen `css`-Funktionen wie `css nesting` , `flex` usw.

Für denselben Wert können mehrere CSS-Selektoren an einer Stelle geschrieben, definiert und wiederverwendet werden, und die Funktion von `stylus` ist deaktiviert.

Die Pixeleinheit ist `px` und der Wert muss eine Ganzzahl sein.

Folgen Sie der Designästhetik von Apples neuestem Liquid Glass

`svg` Platzieren Sie das Bild im Verzeichnis `svg` der Komponente und verwenden Sie den relativen Pfad von `./svg/`, um es in `styl` zu referenzieren

Verwenden Sie keine äußeren Schatten, verwenden Sie häufiger innere Schatten und die inneren Schatten sollten nicht verschoben werden.

Legen Sie `font-family` nicht fest

`stylus` Verwendet nur die grundlegendsten Variablen und das Einrückungssyntaxformat ohne erweiterte Funktionen

Es ist verboten, `@import` zum Importieren anderer Komponentenstile zu verwenden (einschließlich der Komponenten `_.styl` und `demo/_.styl`); Komponentenabhängige Stile werden über die JS-Datei der Komponente importiert