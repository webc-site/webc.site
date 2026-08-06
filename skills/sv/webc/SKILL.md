---
name: webc
---

Följ processen, gör en plan och utveckla steg för steg för att undvika försummelser

1. Kör `./sh/new.js projekttyp komponentnamn` och skapa komponenten under `src/webc` katalogen
   Projekttypen kan vara `css` (ren stilkomponent), `js` (webbsideskomponent)
   Sätt den första bokstaven i komponentnamnet med stor bokstav

2. Läs kodningsspecifikationerna för `.agents/doc/code` och utveckla sedan.

   Komponentstilen är skriven i `_.styl`. Stilen som används för demonstration är skriven i `demo/_.styl`. Det är förbjudet att skriva det i `komponentnamn/_.styl`.

  Att använda `@import` för att importera stilar från andra komponenter är förbjudet i både `_.styl` och `demo/_.styl` .

  Följ kodningsstandarderna och designestetiken för [./styl.md](./styl.md).

  Beroende komponenter (och deras stilar) importeras via `import "./other components.js"` i `webc/componentname.js`; beroenden för demonstration importeras via `import "../../other components.js"` i `demo/_.js`.

   Alla komponenter (inklusive komponenter i ren stil) måste ha en skriptfil `komponentnamn.js`. `komponentnamn.js` för rena stilkomponenter importerar bara motsvarande `_.styl`. För komponenter med JS-logik, följ processen [webc.js.md](./webc.js.md) för att utveckla.

3. Tryck på [demo.md](./demo.md) demonstration av processutveckling

4. Kör `./test.sh` av rotkatalogen. Åtgärda fel och larm, extrahera funktioner, optimera kod och undvik dubbelarbete och redundans. För kodspecifikationer, se `.agents/doc/code/js.md`

5. Läs [dbg.md](./dbg.md) och felsök komponenter enligt processen

6. Följ [i18n.md](./i18n.md)-processen för att implementera internationaliseringen av komponenter och demonstrationer och skriva dokument

7. Testa igen och optimera koden

8. Öppna en underagent och ring `.agents/skills/js_review/SKILL.md` för att granska och optimera koden.

9. Felsökning igen