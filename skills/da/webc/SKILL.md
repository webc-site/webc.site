---
name: webc
---

Følg processen, lav en plan og udvikle trin for trin for at undgå udeladelser

1. Kør `./sh/new.js projekttype komponentnavn` og opret komponenten under `src/webc` biblioteket
   Projekttypen kan være `css` (ren stilkomponent), `js` (websidekomponent)
   Sæt det første bogstav i komponentnavnet med stort

2. Læs kodningsspecifikationerne for `.agents/doc/code` og udvikle derefter.

   Komponentstilen er skrevet i `_.styl`. Stilen brugt til demonstration er skrevet i `demo/_.styl`. Det er forbudt at skrive det i `komponentnavn/_.styl`.

  Brug af `@import` til at importere typografier fra andre komponenter er forbudt i både `_.styl` og `demo/_.styl` .

  Følg kodningsstandarderne og designæstetikken i [./styl.md](./styl.md).

  Afhængige komponenter (og deres stilarter) importeres via `import "./other components.js"` i `webc/componentname.js`; afhængigheder til demonstration importeres via `import "../../other components.js"` i `demo/_.js`.

   Alle komponenter (inklusive rene stilkomponenter) skal have en `komponentnavn.js` scriptfil. `komponentnavn.js` af rene stilkomponenter importerer kun den tilsvarende `_.styl`. For komponenter med JS-logik skal du følge processen [webc.js.md](./webc.js.md) for at udvikle.

3. Tryk på [demo.md](./demo.md) demonstration af procesudvikling

4. Kør `./test.sh` af rodmappen. Ret fejl og alarmer, udtræk funktioner, optimer kode og undgå duplikering og redundans. For kodespecifikationer, se `.agents/doc/code/js.md`

5. Læs [dbg.md](./dbg.md) og debug komponenter i henhold til processen

6. Følg [i18n.md](./i18n.md)-processen for at implementere internationaliseringen af ​​komponenter og demonstrationer og skrive dokumenter

7. Test igen og optimer koden

8. Åbn en underagent og ring til `.agents/skills/js_review/SKILL.md` for at gennemgå og optimere koden.

9. Debugging igen