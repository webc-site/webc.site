---
name: webc
---

Volg die proses, maak 'n plan en ontwikkel stap vir stap om weglatings te vermy

1. Begin `./sh/new.js projektipe komponentnaam` en skep 'n komponentlêer onder die `src`-gids
   Projektipe kan `css` (suiwer stylkomponent), `js` (webbladkomponent) wees
   Hoofletter die eerste letter van die komponentnaam

2. Lees die koderingsspesifikasies vir `.agents/doc/code` en ontwikkel dan.

   In `_.styl`, eers `@import "../component name/_.styl"` om afhanklikhede in te voer. Volg asseblief die koderingstandaarde en ontwerp-estetika van [./styl.md](./styl.md).

   Verander die style van ander komponente en voer dit eerder direk in, gebruik `@import` aan die begin en deaktiveer `extend`.

   Die styl wat vir demonstrasie gebruik word, word verbied om in `komponentnaam/_.styl` geskryf te word en in `demo/_.styl` geskryf te word.

   Vir die `js`-komponent, ontwikkel dit volgens die [webc.js.md](./webc.js.md)-proses (vee asseblief `komponentnaam/_.js` uit vir suiwer stylkomponente)

3. Druk [demo.md](./demo.md) prosesontwikkeling demonstrasie

4. Begin `./test.sh` van die wortelgids. Maak foute en alarms reg, onttrek funksies, optimaliseer kode en vermy duplisering en oortolligheid. Vir kodespesifikasies, sien `.agents/doc/code/js.md`

5. Lees [dbg.md](./dbg.md) en ontfout komponente volgens die proses

6. Volg die [i18n.md](./i18n.md) proses om die internasionalisering van komponente en demonstrasies te implementeer en dokumente te skryf

7. Toets weer en optimaliseer die kode

8. Maak 'n subagent oop en bel `.agents/skills/js_review/SKILL.md` om die kode te hersien en te optimaliseer.

9. Ontfout weer