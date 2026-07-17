# Demo

Pogledajte `src/BoxX/demo` i razvijte demonstraciju komponente u `src/component name/demo/`

`demo/_.pug`, demo podpredložak

Uključene su samo minimalističke oznake komponenti, nije potrebna cijela stranica, a uvoz stilova i skripti je zabranjen. Okvir će se automatski ubaciti (kao što je `demo/_.styl`, `demo/_.js`).

Nemojte pisati naslov (na primjer, nemojte pisati xxx demo), nemojte pisati naziv komponente, nemojte uvoditi komponentu, samo pišite status slučaja upotrebe demo (ako nema statusa, nemojte pisati naslov)

Korijenski element `_.pug` koristi `main.demo.Lg`, koji je definirao stil u `demo/_.styl` i ne definira stil samog `main.demo.Lg`.

Spremnik komponente prikaza trebao bi biti poravnat s `main.demo.Lg`, a između njih ne bi trebalo biti `margin` i `padding`, jer je sam `main.demo` već postavio `padding`, a postavljanje na prazno će se ponoviti.

`demo/_.styl` Ako postoji samo jedna komponenta prikaza, njezin spremnik neće imati vanjski okvir i samo će postaviti `max-width` (jer će spremnik prezentacije automatski dodati vanjski okvir). Ako ih ima više, spremnik se može odvojiti vanjskim okvirom.

Nemojte pisati `img` u `demo/_.pug`, koristite `demo/_.styl` za postavljanje pozadinske slike

Ako komponenta ima više obrazaca, prikažite ih redom (kao što su učitavanje, prazni podaci, podaci, neuspjeli itd.), fleksibilni okomiti izgled

`demo/_.styl`: `stylus` stil demo stranice, molimo slijedite specifikacije koda i estetiku dizajna [./styl.md](./styl.md)

Nemojte pisati `@import '../_.styl'` za uvoz komponente koja se demonstrira, ona će biti automatski ubačena

Uvezite `@import '../../Btn/_.styl'` u `demo/_.styl` i koristite `.Btn`

`demo/_.js`: Pozovite skriptu, format `export default (root) => { ... }`, parametar `root` je host (`document` ili korijenski element spremnika sandboxa)

`D.createElement` je zabranjeno, koristite `newEl` koje spominje [./js.md](./js.md)

`js` je zabranjeno koristiti u `c-t`, a za internacionalizaciju `fLang`

Ako `../_.js` (`../_.js` treba prikazati samu komponentu, zavisne komponente koje zahtijevaju druge demonstracije i dalje moraju biti uvezene) potrebno je samo `import` i ne uvozi se određeni sadržaj koji se može izostaviti (okvir će ga automatski ubaciti)

`pug` Nema potrebe za uvozom `js` i `styl`, okvir će ih automatski ubaciti