Kasutage standardset `css`, ärge kirjutage `css`, mis algab tähega `-webkit-` (raamistik sisestab selle automaatselt)

Arendage komponentide stiile kaasaegsete `css` funktsioonidega, nagu `css nesting` , `flex` jne.

Sama väärtuse jaoks saab ühes kohas kirjutada, määratleda ja uuesti kasutada mitut css-valijat ning funktsioon `stylus` on keelatud.

Piksliühik on `px` ja väärtus peab olema täisarv.

Järgige Apple'i uusima vedelklaasi disainiesteetikat

`svg` Asetage pilt kausta `svg` ja kasutage seda suhtelise teega kaustas `styl`

Ärge kasutage välimisi varje, kasutage sisemisi varje sagedamini ja sisemisi varje ei tohiks nihutada.

Ära määra `font-family`

`stylus` Kasutab ainult kõige elementaarsemaid muutujaid ja taande süntaksi vormingut ilma lisafunktsioonideta

Keelatud on `@import` kasutamine muude komponentstiilide (sh komponentide `_.styl` ja `demo/_.styl` importimiseks); komponendist sõltuvad stiilid imporditakse komponendi JS-faili kaudu