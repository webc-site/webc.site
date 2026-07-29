Koristite standardni `css`, nemojte pisati `css` počevši s `-webkit-` (okvir će to automatski ubaciti)

Razvijte stilove komponenti s modernim `css` značajkama kao što su `css nesting` , `flex` itd.

Za istu vrijednost, višestruki css selektori mogu se napisati, definirati i ponovno koristiti na jednom mjestu, a funkcija `stylus` je onemogućena.

Jedinica piksela je `px`, a vrijednost mora biti cijeli broj.

Slijedite estetiku dizajna najnovijeg Appleovog tekućeg stakla

`svg` Postavite sliku u mapu `svg` i koristite je u `styl` s relativnom stazom

Nemojte koristiti vanjske sjene, češće koristite unutarnje sjene, a unutarnje sjene ne smiju se pomicati.

Ne postavljajte `font-family`

`stylus` Koristi samo najosnovnije varijable i format sintakse uvlake, bez naprednih značajki

Zabranjeno je koristiti `@import` za uvoz drugih stilova komponenti (uključujući komponente `_.styl` i `demo/_.styl`); stilovi ovisni o komponenti uvoze se kroz JS datoteku komponente