# Demo

Vísaðu til `src/webc/BoxX/demo` og þróaðu kynningu á íhlutnum í `src/webc/component name/demo/`

`demo/_.pug`, kynningarundirsniðmát

Aðeins lágmarks íhlutamerki eru innifalin, ekki er þörf á fullri síðu og innflutningur á stílum og skriftum er bannaður. Ramminn mun sjálfkrafa sprauta (svo sem `demo/_.styl`, `demo/_.js`).

Ekki skrifa titil (til dæmis, ekki skrifa xxx kynningu), ekki skrifa nafn íhluta, ekki kynna íhlutinn, skrifaðu aðeins stöðu kynningartilviksins (ef það er engin staða, skrifaðu engan titil)

Rótþáttur `_.pug` notar `main.demo.Lg` , sem hefur skilgreint stílinn í `demo/_.styl` og skilgreinir ekki stíl `main.demo.Lg` sjálfs.

Ílát skjáhlutans ætti að vera í takt við `main.demo.Lg` og það ætti ekki að vera `margin` og `padding` á milli þeirra, vegna þess að `main.demo` sjálft hefur þegar stillt `padding` og að setja það autt verður endurtekið.

`demo/_.styl` Ef það er aðeins einn skjáhluti mun ílát hans ekki hafa ytri ramma og aðeins stillt á `max-width` (vegna þess að kynningarílátið bætir sjálfkrafa við ytri ramma). Ef þær eru margar er hægt að aðskilja ílátið með ytri ramma.

Ekki skrifa `img` í `demo/_.pug`, notaðu `demo/_.styl` til að stilla bakgrunnsmyndina

Ef íhluturinn hefur mörg eyðublöð, vinsamlegast sýndu þau í röð (svo sem hleðsla, tóm gögn, gögn, mistókst osfrv.), sveigja lóðrétt skipulag

`demo/_.styl`: `stylus` stíll kynningarsíðunnar, vinsamlegast fylgdu kóðaforskriftum og hönnunarfagurfræði [./styl.md](./styl.md)

Ef þú skrifar ekki `@import '../_.styl'` til að flytja inn íhlutinn sem á að sýna verður hann sjálfkrafa sprautaður; það er bannað að nota `@import` í `demo/_.styl` til að flytja inn aðra íhlutastíla. Ef kynningin er háð öðrum íhlutum (svo sem hnappinn `.Btn`), vinsamlegast flytjið óháða íhlutina inn í gegnum `import "../../Btn.js"` í `demo/_.js`.

`demo/_.js`: Hringdu í handritið, sniðið `export default (root) => { ... }`, færibreytan `root` er hýsilinn (`document` eða rótarþáttur sandkassaílátsins)

`D.createElement` er bönnuð, notaðu `newEl` nefnt af [./js.md](./js.md)

`js` er bannað að nota í `c-t` og fyrir alþjóðavæðingu `fLang`

Ef `../component name.js` (`../component name.js` á að sýna íhlutinn sjálfan, og enn þarf að flytja inn aðra óháða íhluti sem krafist er í kynningu), er aðeins `import` krafist og ekkert sérstakt efni er flutt inn, sem hægt er að sleppa því (ramminn mun sjálfkrafa setja inn)

`pug` Engin þörf á að flytja inn `js` og `styl` , ramminn mun sjálfkrafa dæla þeim inn