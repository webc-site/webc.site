---
name: webc
---

Verfolgen Sie den Prozess, erstellen Sie einen Plan und entwickeln Sie ihn Schritt für Schritt, um Auslassungen zu vermeiden

1. Führen Sie `./sh/new.js Projekttyp-Komponentenname` aus und erstellen Sie die Komponente im Verzeichnis `src/webc`
   Der Projekttyp kann `css` (reine Stilkomponente), `js` (Webseitenkomponente) sein.
   Schreiben Sie den ersten Buchstaben des Komponentennamens groß

2. Lesen Sie die Codierungsspezifikationen für `.agents/doc/code` und entwickeln Sie sie dann.

   Der Komponentenstil ist in `_.styl` geschrieben. Der zur Demonstration verwendete Stil ist in `demo/_.styl` geschrieben. Es ist verboten, es in `component name/_.styl` zu schreiben.

  Die Verwendung von `@import` zum Importieren von Stilen aus anderen Komponenten ist sowohl in `_.styl` als auch in `demo/_.styl` verboten.

  Befolgen Sie die Codierungsstandards und die Designästhetik von [./styl.md](./styl.md).

  Abhängige Komponenten (und ihre Stile) werden über `import "./other Components.js"` in `webc/componentname.js` importiert. Abhängigkeiten zur Demonstration werden über `import "../../other Components.js"` in `demo/_.js` importiert.

   Alle Komponenten (einschließlich reiner Stilkomponenten) müssen über eine Skriptdatei `Komponentenname.js` verfügen. Die `Komponentenname.js` reiner Stilkomponenten importiert nur die entsprechende `_.styl`. Befolgen Sie für Komponenten mit JS-Logik den Prozess [webc.js.md](./webc.js.md) zur Entwicklung.

3. Drücken Sie [demo.md](./demo.md) Prozessentwicklungsdemonstration

4. Führen Sie `./test.sh` des Stammverzeichnisses aus. Beheben Sie Fehler und Alarme, extrahieren Sie Funktionen, optimieren Sie Code und vermeiden Sie Duplikate und Redundanz. Codespezifikationen finden Sie unter `.agents/doc/code/js.md`

5. Lesen Sie [dbg.md](./dbg.md) und debuggen Sie Komponenten entsprechend dem Prozess

6. Befolgen Sie den Prozess [i18n.md](./i18n.md), um die Internationalisierung von Komponenten und Demonstrationen umzusetzen und Dokumente zu schreiben

7. Testen Sie erneut und optimieren Sie den Code

8. Öffnen Sie einen Subagenten und rufen Sie `.agents/skills/js_review/SKILL.md` auf, um den Code zu überprüfen und zu optimieren.

9. Erneut debuggen