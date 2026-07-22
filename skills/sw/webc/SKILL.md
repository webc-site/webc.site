---
name: webc
---

Fuata mchakato, tengeneza mpango, na uandae hatua kwa hatua ili kuepuka kuachwa

1. Endesha `./sh/new.js aina ya jina la kijenzi cha mradi` na uunde kijenzi chini ya saraka ya `src/webc`
   Aina ya mradi inaweza kuwa `css` (sehemu ya mtindo safi), `js` (sehemu ya ukurasa wa wavuti)
   Andika herufi kubwa ya kwanza ya jina la sehemu

2. Soma ubainishaji wa usimbaji wa `.agents/doc/code` kisha uunde.

   Mtindo wa kipengele umeandikwa katika `_.styl`. Mtindo unaotumika kwa maonyesho umeandikwa katika `demo/_.styl`. Hairuhusiwi kuiandika katika `component name/_.styl`.

  Kutumia `@import` kuleta mitindo kutoka kwa vipengele vingine ni marufuku katika `_.styl` na `demo/_.styl` .

  Fuata viwango vya usimbaji na umaridadi wa muundo wa [./styl.md](./styl.md).

  Vipengee tegemezi (na mitindo yake) huletwa kupitia `import "./other components.js"` katika `webc/componentname.js`; vitegemezi vya onyesho vinaletwa kupitia `kuagiza "../../other components.js"` katika `demo/_.js`.

   Vipengee vyote (pamoja na vijenzi vya mtindo safi) lazima viwe na faili ya hati ya `component name.js`. `component name.js` ya vipengele vya mtindo safi huingiza tu `_.styl` sambamba. Kwa vipengele vilivyo na mantiki ya JS, fuata mchakato wa [webc.js.md](./webc.js.md) ili kuunda.

3. Bonyeza [demo.md](./demo.md) onyesho la ukuzaji wa mchakato

4. Endesha `./test.sh` ya saraka ya mizizi. Rekebisha hitilafu na kengele, toa utendakazi, boresha msimbo na uepuke kunakili na kurudiwa tena. Kwa vipimo vya msimbo, angalia `.agents/doc/code/js.md`

5. Soma [dbg.md](./dbg.md) na utatue vipengele kulingana na mchakato

6. Fuata mchakato wa [i18n.md](./i18n.md) ili kutekeleza utangazaji wa kimataifa wa vipengele na maandamano na kuandika hati

7. Jaribu tena na uboreshe nambari ya kuthibitisha

8. Fungua wakala mdogo na upige `.agents/skills/js_review/SKILL.md` ili kukagua na kuboresha msimbo.

9. Kutatua tena