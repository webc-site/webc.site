---
name: webc
---

Follegt de Prozess, maacht e Plang, an entwéckelt Schrëtt fir Schrëtt fir Ausléiser ze vermeiden

1. Run `./sh/new.js Projet Typ Komponent Numm` a erstellt de Komponent ënner dem `src/webc` Verzeichnis
   Projekttyp kann `css` (reng Stil Komponent), `js` (Websäit Komponent) sinn
   Kapitaliséiert den éischte Buschtaf vum Komponentnumm

2. Liest d'Kodéierungsspezifikatioune fir `.agents/doc/code` an entwéckelen dann.

   De Komponentstil gëtt an `_.styl` geschriwwen. De Stil benotzt fir Demonstratioun ass an `demo/_.styl` geschriwwen. Et ass verbueden et an `Komponentnumm/_.styl` ze schreiwen.

  D'Benotzung vun `@import` fir Stiler aus anere Komponenten z'importéieren ass verbueden a béid `_.styl` an `demo/_.styl` .

  Follegt d'Kodéierungsnormen an d'Designästhetik vun [./styl.md](./styl.md).

  Ofhängeg Komponenten (an hir Stiler) ginn iwwer `import "./aner Komponenten.js"` an `webc/componentname.js` importéiert; Ofhängegkeete fir Demonstratioun ginn iwwer `Import "../../aner Komponenten.js"` an `demo/_.js` importéiert.

   All Komponenten (inklusiv pure Stil Komponenten) mussen eng `Component name.js` Skriptdatei hunn. De `Component name.js` vu pure Stilkomponenten importéiert nëmmen déi entspriechend `_.styl`. Fir Komponente mat JS Logik, befollegt de [webc.js.md](./webc.js.md) Prozess fir z'entwéckelen.

3. Press [demo.md](./demo.md) Prozess Entwécklung Demonstratioun

4. Run `./test.sh` vum Root-Verzeichnis. Fix Feeler an Alarmer, Extrait Funktiounen, optiméiert Code, a vermeit Duplikatioun an Redundanz. Fir Code Spezifikatioune, kuckt `.agents/doc/code/js.md`

5. Liesen [dbg.md](./dbg.md) an debug Komponente no de Prozess

6. Follegt de [i18n.md](./i18n.md) Prozess fir d'Internationaliséierung vu Komponenten an Demonstratiounen ëmzesetzen an Dokumenter ze schreiwen

7. Test nach eng Kéier an optiméiert de Code

8. Öffnen en Ënneragent an rufft `.agents/skills/js_review/SKILL.md` un fir de Code ze iwwerpréiwen an ze optimiséieren.

9. Debugging erëm