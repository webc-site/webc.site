Použite štandardné `css`, nepíšte `css` začínajúce na `-webkit-` (rámec ho automaticky vloží)

Vyvíjajte štýly komponentov s modernými `css` funkciami, ako sú `css nesting` , `flex` atď.

Pre rovnakú hodnotu možno napísať, definovať a znova použiť viacero selektorov css na jednom mieste a funkcia `stylus` je zakázaná.

Pixelová jednotka je `px` a hodnota musí byť celé číslo.

Postupujte podľa estetiky dizajnu najnovšieho tekutého skla Apple

`svg` Umiestnite obrázok do priečinka `svg` a použite ho v `styl` s relatívnou cestou

Nepoužívajte vonkajšie tiene, častejšie používajte vnútorné tiene a vnútorné tiene by sa nemali premiestňovať.

Nenastavujte `font-family`

`stylus` Používa iba najzákladnejšie premenné a formát syntaxe odsadenia bez pokročilých funkcií

Je zakázané používať `@import` na importovanie iných štýlov komponentov (vrátane komponentov `_.styl` a `demo/_.styl`); štýly závislé od komponentu sa importujú cez súbor JS komponentu