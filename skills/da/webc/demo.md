# Demo

Se `src/BoxX/demo` og udvikle en demo af komponenten i `src/component name/demo/`

`demo/_.pug`, demo-underskabelon

Kun minimalistiske komponenttags er inkluderet, ingen komplet side er påkrævet, og import af stilarter og scripts er forbudt. Rammen vil automatisk injicere (såsom `demo/_.styl`, `demo/_.js`).

Skriv ikke en titel (skriv f.eks. ikke xxx-demo), skriv ikke komponentnavnet, introducer ikke komponenten, skriv kun status for demobrugstilfældet (hvis der ikke er nogen status, skriv ingen titel)

Rodelementet i `_.pug` bruger `main.demo.Lg` , som har defineret stilen i `demo/_.styl` og definerer ikke stilen for `main.demo.Lg` selv.

Beholderen til skærmkomponenten skal være justeret med `main.demo.Lg`, og der bør ikke være nogen `margin` og `padding` mellem dem, fordi `main.demo` selv allerede har indstillet `padding`, og at sætte den tom vil blive gentaget.

`demo/_.styl` Hvis der kun er én visningskomponent, vil dens beholder ikke have en ydre ramme og kun indstille `max-width` (fordi præsentationsbeholderen automatisk tilføjer en ydre ramme). Hvis der er flere, kan beholderen adskilles af en ydre ramme.

Skriv ikke `img` i `demo/_.pug`, brug `demo/_.styl` til at indstille baggrundsbilledet

Hvis komponenten har flere formularer, skal du vise dem i rækkefølge (såsom indlæsning, tomme data, data, mislykkede osv.), fleksibelt lodret layout

`demo/_.styl`: `stylus` stil på demosiden, følg venligst kodespecifikationerne og designæstetikken for [./styl.md](./styl.md)

Skriv ikke `@import '../_.styl'` for at importere den komponent, der skal demonstreres, den vil automatisk blive injiceret

Importer venligst `@import '../../Btn/_.styl'` i `demo/_.styl` og brug `.Btn`

`demo/_.js`: Kald scriptet, format `export default (root) => { ... }`, parameter `root` er værten (`document` eller rodelementet i sandkassebeholderen)

Det er forbudt at bruge `D.createElement`, brug `newEl` nævnt i [./js.md](./js.md)

`js` er forbudt til brug i `c-t` og til internationalisering `fLang`

Hvis `../_.js` (`../_.js` skal vise selve komponenten, skal de afhængige komponenter, der kræves af andre demoer, stadig importeres), kræves kun `import`, og der importeres ikke noget specifikt indhold, som kan udelades (rammeværket vil automatisk indsætte det)

`pug` Det er ikke nødvendigt at importere `js` og `styl` , rammen vil automatisk indsætte dem