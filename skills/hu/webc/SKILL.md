---
name: webc
---

Kövesse a folyamatot, készítsen tervet, és lépésről lépésre fejlessze a kihagyások elkerülése érdekében

1. Futtassa a `./sh/new.js projekttípusú összetevőnév` programot, és hozza létre az összetevőt a `src/webc` könyvtárban
   A projekt típusa lehet `css` (tiszta stíluselem), `js` (weboldal-komponens)
   Írja nagybetűvel az összetevő nevének kezdőbetűjét

2. Olvassa el az `.agents/doc/code` kódolási specifikációit, majd fejlessze.

   Az összetevőstílus a következővel van írva: `_.styl`. A demonstrációhoz használt stílus a `demo/_.styl`-ben van írva. `komponensnév/_.styl`-be írni tilos.

  A `@import` használata stílusok importálására más összetevőkből tilos a `_.styl` és a `demo/_.styl` esetén is.

  Kövesse a [./styl.md](./styl.md) kódolási szabványait és tervezési esztétikáját.

  A függő összetevők (és stílusaik) a `import "./other component.js"` segítségével importálhatók a `webc/componentname.js` fájlban; a demonstrációhoz szükséges függőségek a `importálás "../../other component.js"` segítségével importálva `demo/_.js`.

   Minden összetevőnek (beleértve a tiszta stílusú összetevőket is) rendelkeznie kell egy `komponensnév.js` szkriptfájllal. A tiszta stílusú összetevők `komponens neve.js` csak a megfelelő `_.styl`-t importálja. JS-logikával rendelkező összetevők esetében kövesse a [webc.js.md](./webc.js.md) folyamatot a fejlesztéshez.

3. Nyomja meg a [demo.md](./demo.md) folyamatfejlesztési bemutatót

4. Futtassa a gyökérkönyvtár `./test.sh` elemét. Javítsa ki a hibákat és riasztásokat, bontsa ki a funkciókat, optimalizálja a kódot, és elkerülje a duplikációt és a redundanciát. A kód specifikációit lásd: `.agents/doc/code/js.md`

5. Olvassa el a [dbg.md](./dbg.md) fájlt, és végezze el a komponensek hibakeresését a folyamatnak megfelelően

6. Kövesse az [i18n.md](./i18n.md) folyamatot az összetevők és bemutatók nemzetközivé tételéhez, és dokumentumokat írjon

7. Tesztelje újra, és optimalizálja a kódot

8. Nyisson meg egy alügynököt, és hívja a `.agents/skills/js_review/SKILL.md` telefonszámot a kód áttekintéséhez és optimalizálásához.

9. Újra hibakeresés