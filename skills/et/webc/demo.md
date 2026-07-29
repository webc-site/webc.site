# Demo

Vaadake `src/webc/BoxX/demo` ja arendage komponendi demo aadressil `src/webc/component name/demo/`

`demo/_.pug`, demo alammall

Kaasatud on ainult minimalistlikud komponendisildid, täielikku lehte pole vaja ning stiilide ja skriptide importimine on keelatud. Raamistik sisestab automaatselt (nt `demo/_.styl`, `demo/_.js`).

Ärge kirjutage pealkirja (näiteks ärge kirjutage xxx demo), ärge kirjutage komponendi nime, ärge tutvustage komponenti, kirjutage ainult demo kasutusjuhtumi olek (kui olekut pole, ärge kirjutage pealkirja)

`_.pug` juurelement kasutab `main.demo.Lg` , mis on defineerinud stiilis `demo/_.styl` ja ei defineeri ise `main.demo.Lg` stiili.

Kuvakomponendi konteiner peaks olema joondatud märgiga `main.demo.Lg` ning nende vahel ei tohiks olla `margin` ja `padding`, kuna `main.demo` ise on juba `padding` määranud ja tühjaks seadmist korratakse.

`demo/_.styl` Kui kuvamise komponente on ainult üks, ei ole selle konteineril välimist raami ja see on määratud ainult `max-width` (kuna esitluskonteiner lisab automaatselt välimise raami). Kui neid on mitu, saab konteineri eraldada välisraamiga.

Ärge kirjutage `img` lahtrisse `demo/_.pug`, kasutage taustapildi määramiseks `demo/_.styl`

Kui komponendil on mitu vormi, kuvage need järjekorras (nt laadimine, tühjad andmed, andmed, ebaõnnestus jne), paindlik vertikaalpaigutus

`demo/_.styl`: `stylus` demolehe stiili, järgige faili [./styl.md](./styl.md) koodi spetsifikatsioone ja kujundusesteetikat.

Kui te ei kirjuta demonstreeritava komponendi importimiseks `@import '../_.styl'`, sisestatakse see automaatselt; teiste komponentstiilide importimiseks on keelatud kasutada `@import` in `demo/_.styl`. Kui demo sõltub muudest komponentidest (nt nupp `.Btn`), importige sõltuvad komponendid `demo/_.js`-s oleva `import "../../Btn.js"` kaudu.

`demo/_.js`: skripti kutsumine, vorming `export default (root) => { ... }`, parameeter `root` on host (`document` või liivakasti konteineri juurelement)

`D.createElement` on keelatud, kasutage `newEl`, mida mainis [./js.md](./js.md)

`js` on keelatud kasutada domeenis `c-t` ja rahvusvahelistumiseks `fLang`

Kui `../component name.js` (`../komponendi nimi.js` peab kuvama komponenti ennast ja muud demo jaoks vajalikud sõltuvad komponendid tuleb ikkagi importida), on vaja ainult `import` ja konkreetset sisu ei impordita, mille saab ära jätta (raamistik sisestab selle automaatselt)

`pug` Pole vaja importida `js` ja `styl` , raamistik sisestab need automaatselt