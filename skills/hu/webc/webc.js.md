
  Az `js` összetevő esetében használja a `Light DOM` elemet az összetevő megvalósításához az `src/component name/_.js` fájlban.

  Használjon relatív elérési utat más összetevők importálásához, például: `import "../component name/_.js"` (`js` nem importálja a `styl` elemet, a keretrendszer automatikusan beilleszti).

  `this` Csak a webkomponens natív visszahívási függvényét határozza meg, a többit független függvényként írja be, adja át az `this`-t és a szükséges paramétereket.

  A külső felületeken kívül a farázó optimalizálás és a kódtömörítés megkönnyítése érdekében tilos egyéni privát attribútumokat kötni a `this`-on (használd a `this.$`-t a kirakási függvényekhez), a magasrendű függvények pedig a köztes változók tárolására szolgáló lezárások visszaadására használhatók.

  Ne írjon `constructor`-t, az attribútum a `connectedCallback`-ből származik.


  Tekintse meg a [./js.md](./js.md) fájlt az `src/js/` alatti nyilvános funkciók újrafelhasználásához

  Tárolóknál használja az `slot` karakterláncot attribútumok helyett.
  Ha adatokat kell betöltenie, tegye ki a betöltési felületet a felső rétegnek egy aszinkron visszahívási függvény formájában, és megjegyzésekkel jelezze a visszatérési érték formátumát.
  Az alkatrészeknek kerülniük kell a memóriaszivárgást. `disconnectedCallback` egyesítse az eltávolítási eseményeket egyetlen függvénybe, `this.$` és ne írjon több eltávolítási függvényt.
  Az interfész visszatérési értéke lehet egyetlen érték, tömb vagy tömbök tömbje, nem pedig objektum.
  Ha az összetevőnek több állapota van, többsoros megjegyzésekkel írja le egyértelműen az egyes állapotok adatformátumát. (Ne előzze meg a megjegyzések sorait `*`)
  Állapotváltás numerikus konstansok használatával (`const.js`).
  Amíg a visszahívás betöltődik, mutasson animációt a `const xx = newEl('b');xx.className="Ing"` és `@import "../Ing/_.styl"` karakterekkel a `_.styl`