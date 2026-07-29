Gebruik standaard `css`, moenie `css` skryf wat met `-webkit-` begin nie (die raamwerk sal dit outomaties inspuit)

Ontwikkel komponentstyle met moderne `css` kenmerke soos `css nesting` , `flex` ens.

Vir dieselfde waarde kan veelvuldige css-kiesers op een plek geskryf, gedefinieer en hergebruik word, en die funksie van `stylus` is gedeaktiveer.

Die piekseleenheid is `px`, en die waarde moet 'n heelgetal wees.

Volg die ontwerp-estetika van Apple se nuutste Liquid Glass

`svg` Plaas die prent in die `svg` vouer en gebruik dit in `styl` met 'n relatiewe pad

Moenie buitenste skaduwees gebruik nie, gebruik binneskaduwees meer gereeld, en die binneskaduwees moet nie verplaas word nie.

Moenie `font-family` stel nie

`stylus` Gebruik slegs die mees basiese veranderlikes en inkepingsintaksisformaat, sonder gevorderde kenmerke

Dit is verbode om `@import` te gebruik om ander komponentstyle in te voer (insluitend komponente `_.styl` en `demo/_.styl`); komponent-afhanklike style word ingevoer deur die komponent se JS-lêer