---
name: webc
---

Seuraa prosessia, tee suunnitelma ja kehitä askel askeleelta välttääksesi puutteita

1. Suorita `./sh/new.js-projektityypin komponentin nimi` ja luo komponenttikansio `src`-hakemiston alle
   Projektin tyyppi voi olla `css` (puhdas tyylikomponentti), `js` (verkkosivukomponentti)
   Kirjoita komponentin nimen ensimmäinen kirjain isolla

2. Lue `.agents/doc/code`:n koodaustiedot ja kehitä sitten.

   Kohdassa `_.styl` tuo riippuvuudet ensin `@import "../komponentin nimi/_.styl"`. Noudata [./styl.md](./styl.md) koodausstandardeja ja suunnittelun estetiikkaa.

   Muokkaa muiden komponenttien tyylejä ja tuo ne sen sijaan suoraan, käytä `@import` alussa ja poista `extend` käytöstä.

   Esittelyyn käytetyn tyylin kirjoittaminen muotoon `komponentin nimi/_.styl` ja muodossa `demo/_.styl` on kielletty.

   Kehitä komponentille `js` se prosessin [webc.js.md](./webc.js.md) mukaisesti (poista `komponentin nimi/_.js` puhtaiden tyylikomponenttien osalta)

3. Paina [demo.md](./demo.md) prosessikehityksen esittely

4. Suorita juurihakemiston `./test.sh`. Korjaa virheet ja hälytykset, pura toimintoja, optimoi koodi ja vältä päällekkäisyyksiä ja redundanssia. Katso koodin tiedot kohdasta `.agents/doc/code/js.md`

5. Lue [dbg.md](./dbg.md) ja korjaa komponentit prosessin mukaisesti

6. Noudata [i18n.md](./i18n.md)-prosessia komponenttien ja demonstraatioiden kansainvälistämiseksi ja dokumenttien kirjoittamiseksi

7. Testaa uudelleen ja optimoi koodi

8. Avaa aliagentti ja soita numeroon `.agents/skills/js_review/SKILL.md` tarkistaaksesi ja optimoidaksesi koodin.

9. Taas virheenkorjaus