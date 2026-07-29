---
name: jsdoc
description: src/js dokumentum automatikusan generálva
---

## Futtassa a lépéseket

1. Futtassa az `./sh/jsDoc.js` parancsot a hiányzó dokumentációval rendelkező függvények megtekintéséhez (ha nincs kimenet, nem kell hozzáadni).
2. A kimeneti fájl lista szerint olvassa el egyenként a meglévő dokumentumokat és kódokat, és töltse ki azokat (sorrendben dolgozza fel és egyenként törje fel).

## Dokumentációs követelmények

Ha az exportálás függvény, írja be
- Paraméterek és visszatérési értékek:
  - Csak akkor írjon megfelelő leírást, ha vannak paraméterek vagy visszatérési értékek, ellenkező esetben ne írja be őket.
  - A paraméterek bevezetése rendezetlen listák segítségével történik.
  - Ha a visszatérési érték egy tömb, egy rendezetlen listával írja le egyenként (ellenkező esetben írja be közvetlenül, `Visszatérési érték: leírás`, csak egy sor).
  - Ha a paraméterek vagy a visszatérési érték függvények, a paraméterek és a visszatérési értékek leírásához használjon alulrendezett listákat (ha nincs, ne írja be).

Ha az export konstans, mutassa be, mi az, csak egy sort

- Használjon tömör, szakszerű nyelvezetet, és kerülje a melléknevek használatát.
- Tekintse át a meglévő dokumentumot, ne írja át teljesen

## formátum sablon

Minden nevet csak egyszer írjon le, hogy elkerülje az ismétlődést, és próbálja meg egyértelműen egy sorban kifejezni. A hivatkozási formátum a következő

```
# fájlnév

## Funkció neve (paraméter)

Használati leírás

paraméter:
- `xx` : Cél
  - paraméter
    - `a` : Cél
  - Visszatérési érték: leírás

Visszatérési érték: Leírás
```