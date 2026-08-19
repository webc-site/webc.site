---
name: webc
---

Volg die proses, maak 'n plan en ontwikkel stap vir stap om weglatings te vermy

1. Begin `./sh/new.js projektipe komponent naam` en skep die komponent onder die `src/webc` gids
   Projektipe kan `css` (suiwer stylkomponent), `js` (webbladkomponent) wees
   Hoofletter die eerste letter van die komponentnaam

2. Lees die koderingsspesifikasies vir `.agents/doc/code` en ontwikkel dan.

   Die komponentstyl is geskryf in `_.styl`. Die styl wat vir demonstrasie gebruik word, is in `demo/_.styl` geskryf. Dit is verbode om dit in `komponentnaam/_.styl` te skryf.

  Die gebruik van `@import` om style vanaf ander komponente in te voer is verbode in beide `_.styl` en `demo/_.styl` .

  Volg die koderingstandaarde en ontwerp-estetika van [./styl.md](./styl.md).

  Afhanklike komponente (en hul style) word ingevoer via `invoer "./ander komponente.js"` in `webc/komponentnaam.js`; afhanklikhede vir demonstrasie word ingevoer via `invoer "../../other components.js"` in `demo/_.js`.

   Alle komponente (insluitend suiwer stylkomponente) moet 'n `komponentnaam.js`-skriplêer hê. Die `komponentnaam.js` van suiwer stylkomponente voer slegs die ooreenstemmende `_.styl` in. Vir komponente met JS-logika, volg die [webc.js.md](./webc.js.md)-proses om te ontwikkel.

3. Druk [demo.md](./demo.md) prosesontwikkeling demonstrasie

4. Begin `./test.sh` van die wortelgids. Maak foute en alarms reg, onttrek funksies, optimaliseer kode en vermy duplisering en oortolligheid. Vir kodespesifikasies, sien `.agents/doc/code/js.md`

5. Lees [dbg.md](./dbg.md) en ontfout komponente volgens die proses

6. Volg die [i18n.md](./i18n.md) proses om die internasionalisering van komponente en demonstrasies te implementeer en dokumente te skryf

7. Toets weer en optimaliseer die kode

8. Maak 'n subagent oop en bel `.agents/skills/js_review/SKILL.md` om die kode te hersien en te optimaliseer.

9. Ontfout weer