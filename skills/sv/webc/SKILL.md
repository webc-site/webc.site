---
name: webc
---

Följ processen, gör en plan och utveckla steg för steg för att undvika försummelser

1. Kör `./sh/new.js projekttyp komponentnamn` och skapa en komponentmapp under `src` katalogen
   Projekttypen kan vara `css` (ren stilkomponent), `js` (webbsideskomponent)
   Sätt den första bokstaven i komponentnamnet med stor bokstav

2. Läs kodningsspecifikationerna för `.agents/doc/code` och utveckla sedan.

   I `_.styl`, först `@import "../komponentnamn/_.styl"` för att importera beroenden. Följ kodningsstandarderna och designestetiken för [./styl.md](./styl.md).

   Ändra stilarna för andra komponenter och importera dem istället direkt, använd `@import` i början och inaktivera `extend`.

   Stilen som används för demonstration är förbjuden från att skrivas i `komponentnamn/_.styl` och skrivas i `demo/_.styl`.

   För `js`-komponenten, utveckla den enligt [webc.js.md](./webc.js.md)-processen (ta bort `komponentnamn/_.js` för rena stilkomponenter)

3. Tryck på [demo.md](./demo.md) demonstration av processutveckling

4. Kör `./test.sh` av rotkatalogen. Åtgärda fel och larm, extrahera funktioner, optimera kod och undvik dubbelarbete och redundans. För kodspecifikationer, se `.agents/doc/code/js.md`

5. Läs [dbg.md](./dbg.md) och felsök komponenter enligt processen

6. Följ [i18n.md](./i18n.md)-processen för att implementera internationaliseringen av komponenter och demonstrationer och skriva dokument

7. Testa igen och optimera koden

8. Öppna en underagent och ring `.agents/skills/js_review/SKILL.md` för att granska och optimera koden.

9. Felsökning igen