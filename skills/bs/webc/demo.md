# Demo

Pogledajte `src/webc/BoxX/demo` i razvijte demo komponente u `src/webc/component name/demo/`

`demo/_.pug`, demo podšablon

Uključene su samo minimalističke oznake komponenti, nije potrebna potpuna stranica, a uvoz stilova i skripti je zabranjen. Okvir će se automatski ubaciti (kao što je `demo/_.styl`, `demo/_.js`).

Nemojte pisati naslov (na primjer, nemojte pisati xxx demo), ne pišite naziv komponente, ne predstavljajte komponentu, samo napišite status slučaja upotrebe demo (ako nema statusa, ne pišite naslov)

Korijenski element `_.pug` koristi `main.demo.Lg` , koji je definirao stil u `demo/_.styl` i ne definira stil samog `main.demo.Lg`.

Kontejner komponente prikaza treba biti poravnat sa `main.demo.Lg`, a između njih ne bi trebalo biti `margin` i `padding`, jer je `main.demo` sam već postavio `padding`, a njegovo postavljanje na prazno će se ponoviti.

`demo/_.styl` Ako postoji samo jedna komponenta prikaza, njen kontejner neće imati vanjski okvir, već će postaviti samo `max-width` (jer će prezentacijski kontejner automatski dodati vanjski okvir). Ako ih ima više, kontejner se može odvojiti vanjskim okvirom.

Nemojte pisati `img` u `demo/_.pug`, koristite `demo/_.styl` za postavljanje pozadinske slike

Ako komponenta ima više obrazaca, prikažite ih redoslijedom (kao što su učitavanje, prazni podaci, podaci, neuspjeli, itd.), fleksibilan vertikalni raspored

`demo/_.styl`: `stylus` stil demo stranice, slijedite specifikacije koda i estetiku dizajna [./styl.md](./styl.md)

Ako ne napišete `@import '../_.styl'` za uvoz komponente koja se demonstrira, ona će biti automatski ubrizgana; zabranjeno je koristiti `@import` u `demo/_.styl` za uvoz drugih stilova komponenti. Ako demo ovisi o drugim komponentama (kao što je dugme `.Btn`), uvezite zavisne komponente preko `import "../../Btn.js"` u `demo/_.js`.

`demo/_.js`: Pozovite skriptu, format `export default (root) => { ... }`, parametar `root` je host (`document` ili korijenski element sandbox kontejnera)

`D.createElement` je zabranjen, koristite `newEl` spomenuo [./js.md](./js.md)

`js` je zabranjeno za korištenje u `c-t`, a za internacionalizaciju `fLang`

Ako `../component name.js` (`../component name.js` treba da prikaže samu komponentu, a druge zavisne komponente koje zahteva demo i dalje treba da se uvezu), potreban je samo `import`, a ne uvozi se nikakav specifičan sadržaj, koji se može automatski izostaviti (frajmvork će ga automatski izostaviti

`pug` Nema potrebe za uvozom `js` i `styl` , okvir će ih automatski ubaciti