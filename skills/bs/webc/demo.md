# Demo

Pogledajte `src/BoxX/demo` i razvijte demo komponente u `src/ime komponente/demo/`

`demo/_.pug`, demo podšablon

Uključene su samo minimalističke oznake komponenti, nije potrebna potpuna stranica, a uvoz stilova i skripti je zabranjen. Okvir će se automatski ubaciti (kao što je `demo/_.styl`, `demo/_.js`).

Nemojte pisati naslov (na primjer, nemojte pisati xxx demo), ne pišite naziv komponente, ne predstavljajte komponentu, samo napišite status slučaja upotrebe demo (ako nema statusa, ne pišite naslov)

Korijenski element `_.pug` koristi `main.demo.Lg` , koji je definirao stil u `demo/_.styl` i ne definira stil samog `main.demo.Lg`.

Kontejner komponente prikaza treba biti poravnat sa `main.demo.Lg`, a između njih ne bi trebalo biti `margin` i `padding`, jer je `main.demo` sam već postavio `padding`, a njegovo postavljanje na prazno će se ponoviti.

`demo/_.styl` Ako postoji samo jedna komponenta prikaza, njen kontejner neće imati vanjski okvir, već će postaviti samo `max-width` (jer će prezentacijski kontejner automatski dodati vanjski okvir). Ako ih ima više, kontejner se može odvojiti vanjskim okvirom.

Nemojte pisati `img` u `demo/_.pug`, koristite `demo/_.styl` za postavljanje pozadinske slike

Ako komponenta ima više obrazaca, prikažite ih redoslijedom (kao što su učitavanje, prazni podaci, podaci, neuspjeli, itd.), fleksibilan vertikalni raspored

`demo/_.styl`: `stylus` stil demo stranice, slijedite specifikacije koda i estetiku dizajna [./styl.md](./styl.md)

Nemojte pisati `@import '../_.styl'` da biste uvezli komponentu koja se demonstrira, ona će se automatski ubaciti

Molimo uvezite `@import '../../Btn/_.styl'` u `demo/_.styl` i koristite `.Btn`

`demo/_.js`: Pozovite skriptu, format `export default (root) => { ... }`, parametar `root` je host (`document` ili korijenski element sandbox kontejnera)

`D.createElement` je zabranjen, koristite `newEl` spomenuo [./js.md](./js.md)

`js` je zabranjeno za korištenje u `c-t`, a za internacionalizaciju `fLang`

Ako `../_.js` (`../_.js` treba da prikaže samu komponentu, zavisne komponente koje su potrebne za druge demonstracije i dalje je potrebno uvesti) samo `import` je neophodan, a ne uvozi se nikakav specifičan sadržaj, koji se može izostaviti (framework će ga automatski ubaciti)

`pug` Nema potrebe za uvozom `js` i `styl` , okvir će ih automatski ubaciti