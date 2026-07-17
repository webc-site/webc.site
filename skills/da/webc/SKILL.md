---
name: webc
---

Følg processen, lav en plan og udvikle trin for trin for at undgå udeladelser

1. Kør `./sh/new.js projekttype komponentnavn` og opret en komponentmappe under `src` mappen
   Projekttypen kan være `css` (ren stilkomponent), `js` (websidekomponent)
   Sæt det første bogstav i komponentnavnet med stort

2. Læs kodningsspecifikationerne for `.agents/doc/code` og udvikle derefter.

   I `_.styl`, først `@import "../komponentnavn/_.styl"` for at importere afhængigheder. Følg venligst kodningsstandarderne og designæstetikken i [./styl.md](./styl.md).

   Rediger stilene for andre komponenter og importer dem i stedet direkte, brug `@import` i begyndelsen og deaktiver `extend`.

   Stilen brugt til demonstration må ikke skrives i `komponentnavn/_.styl` og skrives i `demo/_.styl`.

   For `js`-komponenten skal du udvikle den i henhold til [webc.js.md](./webc.js.md)-processen (slet venligst `komponentnavn/_.js` for rene stilkomponenter)

3. Tryk på [demo.md](./demo.md) demonstration af procesudvikling

4. Kør `./test.sh` af rodmappen. Ret fejl og alarmer, udtræk funktioner, optimer kode og undgå duplikering og redundans. For kodespecifikationer, se `.agents/doc/code/js.md`

5. Læs [dbg.md](./dbg.md) og debug komponenter i henhold til processen

6. Følg [i18n.md](./i18n.md)-processen for at implementere internationaliseringen af ​​komponenter og demonstrationer og skrive dokumenter

7. Test igen og optimer koden

8. Åbn en underagent og ring til `.agents/skills/js_review/SKILL.md` for at gennemgå og optimere koden.

9. Debugging igen