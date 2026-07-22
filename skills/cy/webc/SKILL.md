---
name: webc
---

Dilynwch y broses, gwnewch gynllun, a datblygwch gam wrth gam i osgoi hepgoriadau

1. Rhedeg `./sh/new.js enw cydran math y prosiect` a chreu'r gydran o dan y cyfeiriadur `src/webc`
   Gall y math o brosiect fod yn `css` (cydran arddull pur), `js` (cydran tudalen we)
   Priflythrennwch lythyren gyntaf enw'r gydran

2. Darllenwch y manylebau codio ar gyfer `.agents/doc/code` ac yna datblygwch.

   Mae arddull y gydran wedi'i ysgrifennu yn `_.styl`. Mae'r arddull a ddefnyddir ar gyfer arddangos wedi'i ysgrifennu yn `demo/_.styl`. Gwaherddir ei ysgrifennu yn `enw'r gydran/_.styl`.

  Gwaherddir defnyddio `@import` i fewnforio arddulliau o gydrannau eraill yn `_.styl` a `demo/_.styl` .

  Dilynwch safonau codio ac estheteg dylunio [./styl.md](./styl.md).

  Mae cydrannau dibynnol (a'u harddulliau) yn cael eu mewnforio trwy `import "./other components.js"` yn `webc/componentname.js`; mae dibyniaethau ar gyfer arddangos yn cael eu mewnforio drwy `mewnforio "../../other components.js"` yn `demo/_.js`.

   Rhaid i bob cydran (gan gynnwys cydrannau arddull pur) gael ffeil sgript `component name.js`. Mae `enw'r gydran.js` o gydrannau arddull pur yn mewnforio'r `_.styl` cyfatebol yn unig. Ar gyfer cydrannau â rhesymeg JS, dilynwch y broses [webc.js.md](./webc.js.md) i ddatblygu.

3. Pwyswch [demo.md](./demo.md) arddangosiad datblygu prosesau

4. Rhedeg `./test.sh` o'r cyfeiriadur gwraidd. Trwsio gwallau a larymau, echdynnu swyddogaethau, gwneud y gorau o'r cod, ac osgoi dyblygu a dileu swyddi. Ar gyfer manylebau cod, gweler `.agents/doc/code/js.md`

5. Darllenwch [dbg.md](./dbg.md) a chydrannau dadfygio yn ôl y broses

6. Dilynwch y broses [i18n.md](./i18n.md) i weithredu rhyngwladoli cydrannau ac arddangosiadau ac ysgrifennu dogfennau

7. Profwch eto a gwneud y gorau o'r cod

8. Agorwch is-asiant a ffoniwch `.agents/skills/js_review/SKILL.md` i adolygu ac optimeiddio'r cod.

9. Dadfygio eto