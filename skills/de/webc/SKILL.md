---
name: webc
---

Verfolgen Sie den Prozess, erstellen Sie einen Plan und entwickeln Sie ihn Schritt für Schritt, um Auslassungen zu vermeiden

1. Führen Sie `./sh/new.js Projekttyp-Komponentenname` aus und erstellen Sie einen Komponentenordner im Verzeichnis `src`
   Der Projekttyp kann `css` (reine Stilkomponente), `js` (Webseitenkomponente) sein.
   Schreiben Sie den ersten Buchstaben des Komponentennamens groß

2. Lesen Sie die Codierungsspezifikationen für `.agents/doc/code` und entwickeln Sie sie dann.

   In `_.styl` zuerst `@import "../component name/_.styl"`, um Abhängigkeiten zu importieren. Bitte befolgen Sie die Codierungsstandards und die Designästhetik von [./styl.md](./styl.md).

   Ändern Sie die Stile anderer Komponenten und importieren Sie sie stattdessen direkt, verwenden Sie am Anfang `@import` und deaktivieren Sie `extend`.

   Der zur Demonstration verwendete Stil darf nicht in `component name/_.styl` und in `demo/_.styl` geschrieben werden.

   Entwickeln Sie die Komponente `js` gemäß dem Prozess [webc.js.md](./webc.js.md) (löschen Sie bitte `Komponentenname/_.js` für reine Stilkomponenten).

3. Drücken Sie [demo.md](./demo.md) Prozessentwicklungsdemonstration

4. Führen Sie `./test.sh` des Stammverzeichnisses aus. Beheben Sie Fehler und Alarme, extrahieren Sie Funktionen, optimieren Sie Code und vermeiden Sie Duplikate und Redundanz. Codespezifikationen finden Sie unter `.agents/doc/code/js.md`

5. Lesen Sie [dbg.md](./dbg.md) und debuggen Sie Komponenten entsprechend dem Prozess

6. Befolgen Sie den Prozess [i18n.md](./i18n.md), um die Internationalisierung von Komponenten und Demonstrationen umzusetzen und Dokumente zu schreiben

7. Testen Sie erneut und optimieren Sie den Code

8. Öffnen Sie einen Subagenten und rufen Sie `.agents/skills/js_review/SKILL.md` auf, um den Code zu überprüfen und zu optimieren.

9. Erneut debuggen