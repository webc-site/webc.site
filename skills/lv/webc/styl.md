Izmantojiet standarta `css`, nerakstiet `css`, kas sākas ar `-webkit-` (ietvars to automātiski ievadīs)

Izstrādājiet komponentu stilus ar modernām `css` funkcijām, piemēram, `css nesting` , `flex` utt.

Vienai un tai pašai vērtībai vienuviet var ierakstīt, definēt un atkārtoti izmantot vairākus css atlasītājus, un funkcija `stylus` ir atspējota.

Pikseļu vienība ir `px`, un vērtībai ir jābūt veselam skaitlim.

Sekojiet Apple jaunākā Liquid Glass dizaina estētikai

`svg` Ievietojiet attēlu mapē `svg` un izmantojiet to mapē `styl` ar relatīvu ceļu

Neizmantojiet ārējās ēnas, izmantojiet iekšējās ēnas biežāk, un iekšējās ēnas nedrīkst pārvietot.

Neiestatīt `font-family`

`stylus` Izmanto tikai visvienkāršākos mainīgos un atkāpes sintakses formātu bez papildu funkcijām

Ir aizliegts izmantot `@import`, lai importētu citus komponentu stilus (ieskaitot komponentus `_.styl` un `demo/_.styl`); no komponentiem atkarīgie stili tiek importēti, izmantojot komponenta JS failu