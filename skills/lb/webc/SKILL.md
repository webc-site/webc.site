---
name: webc
---

Follegt de Prozess, maacht e Plang, an entwéckelt Schrëtt fir Schrëtt fir Ausléiser ze vermeiden

1. Run `./sh/new.js Projetstyp Komponentnumm` a erstellt e Komponentordner ënner dem `src` Verzeichnis
   Projekttyp kann `css` (reng Stil Komponent), `js` (Websäit Komponent) sinn
   Kapitaliséiert den éischte Buschtaf vum Komponentnumm

2. Liest d'Kodéierungsspezifikatioune fir `.agents/doc/code` an entwéckelen dann.

   An `_.styl`, éischt `@import "../component name/_.styl"` fir Ofhängegkeeten z'importéieren. Follegt w.e.g. d'Kodéierungsnormen an d'Designästhetik vun [./styl.md](./styl.md).

   Ännert d'Stiler vun anere Komponenten an importéiert se amplaz direkt, benotzt `@import` am Ufank an deaktivéiert `extend`.

   De Stil, dee fir Demonstratioun benotzt gëtt, ass verbueden am `Komponentnumm/_.styl` ze schreiwen an an `demo/_.styl` ze schreiwen.

   Fir den `js` Komponent, entwéckelt se no dem [webc.js.md](./webc.js.md) Prozess (läscht w.e.g. `Komponentname/_.js` fir pure Stil Komponenten)

3. Press [demo.md](./demo.md) Prozess Entwécklung Demonstratioun

4. Run `./test.sh` vum Root-Verzeichnis. Fix Feeler an Alarmer, Extrait Funktiounen, optiméiert Code, a vermeit Duplikatioun an Redundanz. Fir Code Spezifikatioune, kuckt `.agents/doc/code/js.md`

5. Liesen [dbg.md](./dbg.md) an debug Komponente no de Prozess

6. Follegt de [i18n.md](./i18n.md) Prozess fir d'Internationaliséierung vu Komponenten an Demonstratiounen ëmzesetzen an Dokumenter ze schreiwen

7. Test nach eng Kéier an optiméiert de Code

8. Öffnen en Ënneragent an rufft `.agents/skills/js_review/SKILL.md` un fir de Code ze iwwerpréiwen an ze optimiséieren.

9. Debugging erëm