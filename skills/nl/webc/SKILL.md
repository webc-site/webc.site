---
name: webc
---

Volg het proces, maak een plan en ontwikkel stap voor stap om omissies te voorkomen

1. Voer `./sh/new.js projecttype componentnaam` uit en maak de component onder de map `src/webc`
   Het projecttype kan `css` (pure stijlcomponent), `js` (webpaginacomponent) zijn
   Geef de eerste letter van de componentnaam een ​​hoofdletter

2. Lees de coderingsspecificaties voor `.agents/doc/code` en ontwikkel vervolgens.

   De componentstijl is geschreven in `_.styl`. De stijl die voor de demonstratie wordt gebruikt, is geschreven in `demo/_.styl`. Het is verboden om het in `componentnaam/_.styl` te schrijven.

  Het gebruik van `@import` om stijlen uit andere componenten te importeren is verboden in zowel `_.styl` als `demo/_.styl` .

  Volg de codeerstandaarden en ontwerpesthetiek van [./styl.md](./styl.md).

  Afhankelijke componenten (en hun stijlen) worden geïmporteerd via `import "./other componenten.js"` in `webc/componentname.js`; afhankelijkheden voor demonstratie worden geïmporteerd via `import "../../othercomponents.js"` in `demo/_.js`.

   Alle componenten (inclusief pure stijlcomponenten) moeten een `component name.js` scriptbestand hebben. De `component name.js` van pure stijlcomponenten importeert alleen de overeenkomstige `_.styl`. Voor componenten met JS-logica volgt u het proces [webc.js.md](./webc.js.md) om te ontwikkelen.

3. Druk op [demo.md](./demo.md) demonstratie van procesontwikkeling

4. Voer `./test.sh` van de hoofdmap uit. Herstel fouten en alarmen, extraheer functies, optimaliseer code en voorkom duplicatie en redundantie. Zie `.agents/doc/code/js.md` voor codespecificaties

5. Lees [dbg.md](./dbg.md) en debug componenten volgens het proces

6. Volg het [i18n.md](./i18n.md)-proces om de internationalisering van componenten en demonstraties te implementeren en documenten te schrijven

7. Test opnieuw en optimaliseer de code

8. Open een subagent en roep `.agents/skills/js_review/SKILL.md` aan om de code te bekijken en te optimaliseren.

9. Opnieuw debuggen