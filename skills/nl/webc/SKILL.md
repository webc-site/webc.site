---
name: webc
---

Volg het proces, maak een plan en ontwikkel stap voor stap om omissies te voorkomen

1. Voer `./sh/new.js projecttype componentnaam` uit en maak een componentmap onder de map `src`
   Het projecttype kan `css` (pure stijlcomponent), `js` (webpaginacomponent) zijn
   Geef de eerste letter van de componentnaam een ​​hoofdletter

2. Lees de coderingsspecificaties voor `.agents/doc/code` en ontwikkel vervolgens.

   In `_.styl` eerst `@import "../component name/_.styl"` om afhankelijkheden te importeren. Volg de coderingsnormen en ontwerpesthetiek van [./styl.md](./styl.md).

   Wijzig de stijlen van andere componenten en importeer ze in plaats daarvan rechtstreeks, gebruik `@import` aan het begin en schakel `extend` uit.

   Het is verboden om de stijl die voor de demonstratie wordt gebruikt, te schrijven in `componentnaam/_.styl` en niet te schrijven in `demo/_.styl`.

   Voor de `js` component ontwikkelt u deze volgens het [webc.js.md](./webc.js.md) proces (verwijder `componentnaam/_.js` voor pure stijlcomponenten)

3. Druk op [demo.md](./demo.md) demonstratie van procesontwikkeling

4. Voer `./test.sh` van de hoofdmap uit. Herstel fouten en alarmen, extraheer functies, optimaliseer code en voorkom duplicatie en redundantie. Zie `.agents/doc/code/js.md` voor codespecificaties

5. Lees [dbg.md](./dbg.md) en debug componenten volgens het proces

6. Volg het [i18n.md](./i18n.md)-proces om de internationalisering van componenten en demonstraties te implementeren en documenten te schrijven

7. Test opnieuw en optimaliseer de code

8. Open een subagent en roep `.agents/skills/js_review/SKILL.md` aan om de code te bekijken en te optimaliseren.

9. Opnieuw debuggen