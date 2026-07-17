# JS-Codespezifikation

## Codierungsstil

- Einfach, elegant und effizient, mit modernster js-Syntax
- Teilen Sie zu lange Funktionen auf, und das Schnittstellendesign sollte eine geringe Kopplung und eine hohe Kohäsion aufweisen.
- Verwenden Sie mehr Arrays + Schleifen/forEach/map und schreiben Sie weniger sich wiederholenden Code
- Schreiben Sie keine Funktionskommentare in einfachem Code, um übermäßige Kommentare zu vermeiden. Komplexe Logik und besondere Bedürfnisse werden in raffiniertem Chinesisch erklärt.
- Wiederholter Code wird in Funktionen abstrahiert, um Redundanz zu reduzieren. Beispielsweise kann `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` als `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()` geschrieben werden
- Variablendeklaration: Kombinieren Sie mehrere aufeinanderfolgende `const`-Deklarationen in einer Anweisung. Anstatt es in drei Zeilen zu schreiben, schreiben Sie `const a=1, b=2, c=3;`
- Asynchrone Verarbeitung: Verwenden Sie `await`, verbieten Sie die Verwendung von `.then`-Kettenaufrufen
- Ausnahmebehandlungscode nicht automatisch generieren, `try...catch` nicht automatisch schreiben (`try ... catch` wird manuell verwaltet, vorhandenes `try catch` sollte nicht gelöscht werden)
- Zuerst reine Funktionen: Schreiben Sie nur reine Funktionen, niemals Klassen
- Verwenden Sie Pfeilfunktionen `const funcName = () => {}` und verwenden Sie nicht das Schlüsselwort `function` (außer Generatoren); Wenn Sie .bind zum Binden von Parametern verwenden können, vermeiden Sie die Definition von Funktionen
- Code-Wiederverwendung: Achten Sie auf die Wiederverwendung, extrahieren Sie mehr kleine Funktionen und vermeiden Sie strikt eine große Anzahl ähnlicher oder durch Kopieren eingefügter Codestrukturen.
- Objektzugriff: Priorisieren Sie die Verwendung von Destrukturierungszuweisungen, um erforderliche Attribute zu extrahieren, vermeiden Sie die wiederholte interne Verwendung von Punkten für den Zugriff auf tiefe und verschachtelte Attribute und führen Sie wiederholte optionale Kettenbeurteilungen zusammen
- Verwenden Sie keine Objekte für Funktionsparameter, schreiben Sie nicht `{a,b,c}`, schreiben Sie `a, b, c`; Wenn es viele optionale Parameter gibt, verwenden Sie [[Anzahl der Konfigurationselemente, Konfigurationselemente], [Anzahl der Konfigurationselemente, Konfigurationselemente],..] In diesem Paradigma werden Konfigurationselemente mit numerischen Konstanten definiert
- Für mehrwertige Rückgaben verwenden Sie das Array `[a,b,c]` anstelle von `{a,b,c}`. Wenn mehr als drei Rückgabewerte vorhanden sind, verwenden Sie numerische Konstanten, um die Positionsbedeutung zu definieren.
- Es ist keine Zeichenfolge erforderlich, um den Status darzustellen. Verwenden Sie numerische Konstanten, um den Status zu definieren
- Es wird keine Zeichenfolgenvorlage (``) verwendet, sondern die Zeichenfolgenverkettung (+), außer beim Import (praktisch für die statische Vite-Analyse).
- Wenn Sie für die Schleife eine Seriennummer benötigen, verwenden Sie `++i` anstelle von `i++`
- Vermeiden Sie unnötiges`?.` und verbieten Sie defensives Programmieren
- Der Variablenname muss nicht im Plural stehen und endet mit `_li`, um eine Liste anzuzeigen.

## Namenskonvention

- Die Namensgebung verfolgt Minimalismus. Verwenden Sie kurze, aber aussagekräftige Namen, zum Beispiel: Verwenden Sie `rm` anstelle von `remove`, `delete`, `del`. Sie sollten jedoch auch Extreme vermeiden, zum Beispiel: Verwenden Sie keinen einzelnen Buchstaben `m` anstelle von `map`
- Versuchen Sie, bei der Benennung von Funktionen nur Verben zu verwenden. Wenn Sie es mit einem Wort ausdrücken können, verwenden Sie nicht zwei Wörter. Substantive spiegeln sich in Dateinamen wider. Wenn Sie dem Dateinamen ein Verb hinzufügen müssen, geben Sie bitte das Substantiv zuerst und das Verb zuletzt ein. Beispiel: `profileSet.js` statt `setProfile.js`
- Variablenname: Verwenden Sie den Unterstreichungsstil (snake_case), zum Beispiel `user_auth_token`; Wenn es sich bei der Variablen um eine Funktion handelt, verwenden Sie den Benennungsstil in Kleinbuchstaben
- Funktionsname: Verwenden Sie CamelCase in Kleinbuchstaben (camelCase), zum Beispiel `userData`
- Funktionsparameter: Wenn es sich um eine Rückruffunktion handelt, benennen Sie sie in Kleinbuchstaben, z. B. `onChange`
- Konstantendefinitionen auf Modulebene verwenden den Unterstreichungsstil `UPPER_SNAKE_CASE` in Großbuchstaben
- Schreiben Sie nicht `get`, also bedeutungslose Präfixe wie: Schreiben Sie `cookieByHeader` anstelle von `getCookie`
- Globale Konstanten/Konstanten auf Modulebene: Verwenden Sie den Unterstreichungsstil in Großbuchstaben (UPPER_SNAKE_CASE), z. B. `CODE_TO_ID`, `ID_TO_LANG`

## Modularer Mechanismus

- Importieren: Funktionen genau nach Bedarf importieren, direkten Import des gesamten Moduls verhindern (`import * as x` vermeiden oder große Objekte importieren)
- Exportieren: Exportieren von Objekten deaktivieren. Exportieren Sie Funktionen und Variablen als Einheiten, z. B. `export const X=1, abc=()=>{};`. Versuchen Sie, sie mit const + Komma zu kombinieren, um den exportierten Inhalt zu deklarieren. Wenn eine Datei nur eine Funktion hat, verwenden Sie `export default`
- Sofern Sie die Export-Standardfunktion nicht intern aufrufen müssen, vermeiden Sie es, zuerst Konstanten zu deklarieren und sie dann am Ende der Datei zu exportieren.
- Pfadauflösung: Beim Abrufen des aktuellen Verzeichnispfads muss `import.meta.dirname` verwendet werden

## Fehler

- Vermeiden Sie Zeichenfolgenfehler und verwenden Sie const, um konstante Fehlercodes zu deklarieren.
- Wenn Sie falsche Dateninformationen zurückgeben müssen, verwenden Sie [Fehlercode, Fehlermeldung,...]. Auf diese Weise ist die Fehlermeldung keine Textbeschreibung, sondern ein numerischer Wert (z. B. [FILE_OVERSIZE, file_size, max_size]).
-

## Versuchen Sie, browserkompatible APIs zu verwenden

- Verschlüsselung und Entschlüsselung: Erzwingen Sie die Verwendung der nativen Web Crypto API
- Binärdaten: Versuchen Sie beim Umgang mit Binärdaten, `Uint8Array` einheitlich zu verwenden