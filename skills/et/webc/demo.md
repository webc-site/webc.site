# Demo

Vaadake `src/BoxX/demo` ja töötage välja komponendi demo jaotises `src/component name/demo/`

`demo/_.pug`, demo alammall

Kaasatud on ainult minimalistlikud komponendisildid, täielikku lehte pole vaja ning stiilide ja skriptide importimine on keelatud. Raamistik sisestab automaatselt (nt `demo/_.styl`, `demo/_.js`).

Ärge kirjutage pealkirja (näiteks ärge kirjutage xxx demo), ärge kirjutage komponendi nime, ärge tutvustage komponenti, kirjutage ainult demo kasutusjuhtumi olek (kui olekut pole, ärge kirjutage pealkirja)

`_.pug` juurelement kasutab `main.demo.Lg` , mis on defineerinud stiilis `demo/_.styl` ja ei defineeri ise `main.demo.Lg` stiili.

Kuvakomponendi konteiner peaks olema joondatud märgiga `main.demo.Lg` ning nende vahel ei tohiks olla `margin` ja `padding`, kuna `main.demo` ise on juba `padding` määranud ja tühjaks seadmist korratakse.

`demo/_.styl` Kui kuvamise komponente on ainult üks, ei ole selle konteineril välimist raami ja see on määratud ainult `max-width` (kuna esitluskonteiner lisab automaatselt välimise raami). Kui neid on mitu, saab konteineri eraldada välisraamiga.

Ärge kirjutage `img` lahtrisse `demo/_.pug`, kasutage taustapildi määramiseks `demo/_.styl`

Kui komponendil on mitu vormi, kuvage need järjekorras (nt laadimine, tühjad andmed, andmed, ebaõnnestus jne), paindlik vertikaalpaigutus

`demo/_.styl`: `stylus` demolehe stiili, järgige faili [./styl.md](./styl.md) koodi spetsifikatsioone ja kujundusesteetikat.

Demonstreeritava komponendi importimiseks ärge kirjutage `@import '../_.styl'`, see süstitakse automaatselt

Palun importige `@import '../../Btn/_.styl'` kausta `demo/_.styl` ja kasutage `.Btn`

`demo/_.js`: skripti kutsumine, vorming `export default (root) => { ... }`, parameeter `root` on host (`document` või liivakasti konteineri juurelement)

`D.createElement` on keelatud, kasutage `newEl`, mida mainis [./js.md](./js.md)

`js` on keelatud kasutada domeenis `c-t` ja rahvusvahelistumiseks `fLang`

Kui `../_.js` (`../_.js` kuvab komponenti ennast, tuleb teiste demode jaoks vajalikud sõltuvad komponendid ikkagi importida), on vaja ainult `import` ja konkreetset sisu ei impordita, mille saab ära jätta (raamistik sisestab selle automaatselt)

`pug` Pole vaja importida `js` ja `styl` , raamistik sisestab need automaatselt