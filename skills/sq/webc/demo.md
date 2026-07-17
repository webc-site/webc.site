# Demo

Referojuni `src/BoxX/demo` dhe zhvilloni një demonstrim të komponentit në `src/emri i komponentit/demo/`

`demo/_.pug`, nën shabllon demonstrues

Përfshihen vetëm etiketat minimaliste të komponentëve, nuk kërkohet asnjë faqe e plotë dhe importimi i stileve dhe skripteve është i ndaluar. Korniza do të injektohet automatikisht (si p.sh. `demo/_.styl`, `demo/_.js`).

Mos shkruani një titull (për shembull, mos shkruani demo xxx), mos shkruani emrin e komponentit, mos e prezantoni komponentin, shkruani vetëm statusin e rastit të përdorimit të demonstrimit (nëse nuk ka status, shkruani asnjë titull)

Elementi rrënjësor i `_.pug` përdor `main.demo.Lg` , i cili ka përcaktuar stilin në `demo/_.styl` dhe nuk përcakton stilin e vetë `main.demo.Lg`.

Kontejneri i komponentit të ekranit duhet të përafrohet me `main.demo.Lg` dhe nuk duhet të ketë `margin` dhe `padding` mes tyre, sepse vetë `main.demo` ka vendosur tashmë `padding` dhe vendosja e tij bosh do të përsëritet.

`demo/_.styl` Nëse ka vetëm një komponent të ekranit, kontejneri i tij nuk do të ketë një kornizë të jashtme dhe do të vendosë vetëm `max-width` (sepse kontejneri i prezantimit do të shtojë automatikisht një kornizë të jashtme). Nëse ka shumë, kontejneri mund të ndahet nga një kornizë e jashtme.

Mos shkruani `img` në `demo/_.pug`, përdorni `demo/_.styl` për të vendosur imazhin e sfondit

Nëse komponenti ka shumë forma, ju lutemi shfaqini ato sipas renditjes (si ngarkimi, të dhënat boshe, të dhënat, të dështuara, etj.), përkulni paraqitjen vertikale

`demo/_.styl`: `stylus` stili i faqes demo, ju lutemi ndiqni specifikimet e kodit dhe estetikën e dizajnit të [./styl.md](./styl.md)

Mos shkruani `@import '../_.styl'` për të importuar komponentin që do të demonstrohet, ai do të injektohet automatikisht

Ju lutemi importoni `@import '../../Btn/_.styl'` në `demo/_.styl` dhe përdorni `.Btn`

`demo/_.js`: Thirrni skriptin, formati `export default (root) => { ... }`, parametri `root` është hosti (`document` ose elementi rrënjë i kontejnerit të sandbox)

`D.createElement` është e ndaluar, përdorni `newEl` përmendur nga [./js.md](./js.md)

`js` është e ndaluar për përdorim në `c-t` dhe për ndërkombëtarizim `fLang`

Nëse `../_.js` (`../_.js` do të shfaqë vetë komponentin, përbërësit e varur që kërkohen nga demonstrimet e tjera duhet ende të importohen) kërkohet vetëm `import` dhe nuk importohet asnjë përmbajtje specifike, e cila mund të hiqet (korniza do ta injektojë automatikisht)

`pug` Nuk ka nevojë të importoni `js` dhe `styl`, korniza do t'i injektojë ato automatikisht