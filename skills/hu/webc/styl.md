Használjon szabványos `css`-t, ne írja be a `css` karakterláncot `-webkit-`-val kezdődően (a keretrendszer automatikusan beilleszti)

Alkatrészstílusok fejlesztése modern `css` funkciókkal, például `css nesting` , `flex` stb.

Ugyanazon érték mellett több css-választó is írható, definiálható és újra felhasználható egy helyen, az `stylus` funkciója pedig le van tiltva.

A képpont egysége `px`, és az értéknek egész számnak kell lennie.

Kövesse az Apple legújabb Liquid Glass dizájnesztétikáját

`svg` Helyezze el a képet a `svg` mappába, és használja az `styl` mappába relatív elérési úttal

Ne használjon külső árnyékokat, gyakrabban használjon belső árnyékokat, és a belső árnyékokat nem szabad eltolni.

Ne állítsa be a `font-family` értéket

`stylus` Csak a legalapvetőbb változókat és a behúzás szintaktikai formátumát használja, speciális szolgáltatások nélkül

Tilos az `@import` használata más összetevőstílusok importálására (beleértve a `_.styl` és `demo/_.styl` összetevőket); Az összetevőtől függő stílusok importálása az összetevő JS fájlján keresztül történik