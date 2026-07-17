---
name: webc
---

Følg prosessen, lag en plan og utvikler steg for steg for å unngå mangler

1. Kjør `./sh/new.js prosjekttype komponentnavn` og opprett en komponentmappe under `src`-katalogen
   Prosjekttypen kan være `css` (ren stilkomponent), `js` (websidekomponent)
   Bruk stor bokstav i komponentnavnet

2. Les kodingsspesifikasjonene for `.agents/doc/code` og utvikler deretter.

   I `_.styl`, først `@import "../komponentnavn/_.styl"` for å importere avhengigheter. Følg kodingsstandardene og designestetikken til [./styl.md](./styl.md).

   Endre stilene til andre komponenter og importer dem i stedet direkte, bruk `@import` i begynnelsen og deaktiver `extend`.

   Stilen som brukes til demonstrasjon er forbudt fra å være skrevet i `komponentnavn/_.styl` og skrevet i `demo/_.styl`.

   For `js`-komponenten, utvikler den i henhold til [webc.js.md](./webc.js.md)-prosessen (slett `komponentnavn/_.js` for rene stilkomponenter)

3. Trykk på [demo.md](./demo.md) demonstrasjon av prosessutvikling

4. Kjør `./test.sh` av rotkatalogen. Rett opp feil og alarmer, trekk ut funksjoner, optimaliser kode og unngå duplisering og redundans. For kodespesifikasjoner, se `.agents/doc/code/js.md`

5. Les [dbg.md](./dbg.md) og feilsøk komponenter i henhold til prosessen

6. Følg [i18n.md](./i18n.md)-prosessen for å implementere internasjonalisering av komponenter og demonstrasjoner og skrive dokumenter

7. Test igjen og optimaliser koden

8. Åpne en underagent og ring `.agents/skills/js_review/SKILL.md` for å gjennomgå og optimalisere koden.

9. Feilsøking igjen