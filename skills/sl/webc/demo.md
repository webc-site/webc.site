# Demo

Glejte `src/webc/BoxX/demo` in razvijte predstavitev komponente v `src/webc/component name/demo/`

`demo/_.pug`, predstavitvena podpredloga

Vključene so samo minimalistične oznake komponent, ni potrebna nobena celotna stran, uvoz slogov in skriptov pa je prepovedan. Ogrodje bo samodejno vstavljeno (kot je `demo/_.styl`, `demo/_.js`).

Ne napišite naslova (na primer ne napišite xxx demo), ne napišite imena komponente, ne uvedite komponente, napišite samo status primera uporabe demo (če ni statusa, ne napišite naslova)

Korenski element `_.pug` uporablja `main.demo.Lg`, ki je definiral slog v `demo/_.styl` in ne definira samega sloga `main.demo.Lg`.

Vsebnik prikazne komponente mora biti poravnan z `main.demo.Lg` in med njima ne sme biti `margin` in `padding`, ker je sam `main.demo` že nastavil `padding` in bo ponovljena nastavitev na prazno.

`demo/_.styl` Če obstaja samo ena komponenta zaslona, ​​njen vsebnik ne bo imel zunanjega okvirja in bo nastavljen samo `max-width` (ker bo predstavitveni vsebnik samodejno dodal zunanji okvir). Če jih je več, lahko posodo ločite z zunanjim okvirjem.

Ne pišite `img` v `demo/_.pug`, uporabite `demo/_.styl` za nastavitev slike ozadja

Če ima komponenta več obrazcev, jih prikažite po vrstnem redu (na primer nalaganje, prazni podatki, podatki, neuspelo itd.), prilagodite navpično postavitev

`demo/_.styl`: `stylus` slog predstavitvene strani, upoštevajte specifikacije kode in estetiko oblikovanja [./styl.md](./styl.md)

Če ne napišete `@import '../_.styl'` za uvoz komponente, ki jo želite prikazati, bo samodejno vstavljena; prepovedano je uporabljati `@import` v `demo/_.styl` za uvoz drugih slogov komponent. Če je predstavitev odvisna od drugih komponent (kot je gumb `.Btn`), uvozite odvisne komponente prek `import "../../Btn.js"` v `demo/_.js`.

`demo/_.js`: Pokličite skript, format `export default (root) => { ... }`, parameter `root` je gostitelj (`document` ali korenski element vsebnika peskovnika)

`D.createElement` je prepovedano, uporabite `newEl`, ki ga omenja [./js.md](./js.md)

`js` je prepovedano uporabljati v `c-t` in za internacionalizacijo `fLang`

Če `../component name.js` (`../component name.js` mora prikazati samo komponento in je treba še uvoziti druge odvisne komponente, ki jih zahteva predstavitev), je potreben samo `import` in ni uvožena nobena posebna vsebina, ki jo je mogoče izpustiti (ogrodje jo bo samodejno vbrizgalo)

`pug` `js` in `styl` ni treba uvoziti, okvir ju bo samodejno vstavil