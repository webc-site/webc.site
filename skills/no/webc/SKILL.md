---
name: webc
---

Følg prosessen, lag en plan og utvikler steg for steg for å unngå mangler

1. Kjør `./sh/new.js prosjekttype komponentnavn` og opprett komponenten under `src/webc`-katalogen
   Prosjekttypen kan være `css` (ren stilkomponent), `js` (websidekomponent)
   Bruk stor bokstav i komponentnavnet

2. Les kodingsspesifikasjonene for `.agents/doc/code` og utvikler deretter.

   Komponentstilen er skrevet i `_.styl`. Stilen som brukes til demonstrasjon er skrevet i `demo/_.styl`. Det er forbudt å skrive det i `komponentnavn/_.styl`.

  Å bruke `@import` til å importere stiler fra andre komponenter er forbudt i både `_.styl` og `demo/_.styl` .

  Følg kodingsstandardene og designestetikken til [./styl.md](./styl.md).

  Avhengige komponenter (og deres stiler) importeres via `import "./other components.js"` i `webc/componentname.js`; avhengigheter for demonstrasjon importeres via `import "../../other components.js"` i `demo/_.js`.

   Alle komponenter (inkludert rene stilkomponenter) må ha en `komponentnavn.js`-skriptfil. `komponentnavn.js` av rene stilkomponenter importerer bare den tilsvarende `_.styl`. For komponenter med JS-logikk, følg [webc.js.md](./webc.js.md)-prosessen for å utvikle.

3. Trykk på [demo.md](./demo.md) demonstrasjon av prosessutvikling

4. Kjør `./test.sh` av rotkatalogen. Rett opp feil og alarmer, trekk ut funksjoner, optimaliser kode og unngå duplisering og redundans. For kodespesifikasjoner, se `.agents/doc/code/js.md`

5. Les [dbg.md](./dbg.md) og feilsøk komponenter i henhold til prosessen

6. Følg [i18n.md](./i18n.md)-prosessen for å implementere internasjonalisering av komponenter og demonstrasjoner og skrive dokumenter

7. Test igjen og optimaliser koden

8. Åpne en underagent og ring `.agents/skills/js_review/SKILL.md` for å gjennomgå og optimalisere koden.

9. Feilsøking igjen