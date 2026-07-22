---
name: webc
---

Seuraa prosessia, tee suunnitelma ja kehitä askel askeleelta välttääksesi puutteita

1. Suorita `./sh/new.js projektityypin komponentin nimi` ja luo komponentti hakemistoon `src/webc`
   Projektin tyyppi voi olla `css` (puhdas tyylikomponentti), `js` (verkkosivukomponentti)
   Kirjoita komponentin nimen ensimmäinen kirjain isolla

2. Lue `.agents/doc/code`:n koodaustiedot ja kehitä sitten.

   Komponenttityyli on kirjoitettu muodossa `_.styl`. Esittelyssä käytetty tyyli on kirjoitettu muodossa `demo/_.styl`. Sen kirjoittaminen muotoon `komponentin nimi/_.styl` on kielletty.

  `@import`:n käyttäminen tyylien tuomiseen muista komponenteista on kiellettyä sekä `_.styl` että `demo/_.styl` .

  Noudata [./styl.md](./styl.md) koodausstandardeja ja suunnittelun estetiikkaa.

  Riippuvat komponentit (ja niiden tyylit) tuodaan komennolla `import "./other component.js"` tiedostossa `webc/componentname.js`; esittelyn riippuvuudet tuodaan `tuomalla "../../other component.js"` kohdassa `demo/_.js`.

   Kaikilla komponenteilla (mukaan lukien puhtaat tyylikomponentit) on oltava `komponentin nimi.js`-skriptitiedosto. Puhtaiden tyylikomponenttien `komponentin nimi.js` tuo vain vastaavan `_.styl`. Jos komponentit, joissa on JS-logiikka, kehitetään noudattamalla [webc.js.md](./webc.js.md)-prosessia.

3. Paina [demo.md](./demo.md) prosessikehityksen esittely

4. Suorita juurihakemiston `./test.sh`. Korjaa virheet ja hälytykset, pura toimintoja, optimoi koodi ja vältä päällekkäisyyksiä ja redundanssia. Katso koodin tiedot kohdasta `.agents/doc/code/js.md`

5. Lue [dbg.md](./dbg.md) ja korjaa komponentit prosessin mukaisesti

6. Noudata [i18n.md](./i18n.md)-prosessia komponenttien ja demonstraatioiden kansainvälistämiseksi ja dokumenttien kirjoittamiseksi

7. Testaa uudelleen ja optimoi koodi

8. Avaa aliagentti ja soita numeroon `.agents/skills/js_review/SKILL.md` tarkistaaksesi ja optimoidaksesi koodin.

9. Taas virheenkorjaus