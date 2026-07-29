# Demo

Se `src/webc/BoxX/demo` og utvikle en demo av komponenten i `src/webc/component name/demo/`

`demo/_.pug`, demo-undermal

Bare minimalistiske komponentkoder er inkludert, ingen fullstendig side er nødvendig, og import av stiler og skript er forbudt. Rammeverket vil automatisk injisere (som `demo/_.styl`, `demo/_.js`).

Ikke skriv en tittel (for eksempel ikke skriv xxx-demo), ikke skriv komponentnavnet, ikke introduser komponenten, skriv bare statusen til demobrukssaken (hvis det ikke er noen status, skriv ingen tittel)

Rotelementet til `_.pug` bruker `main.demo.Lg` , som har definert stilen i `demo/_.styl` og definerer ikke stilen til `main.demo.Lg` seg selv.

Beholderen til skjermkomponenten skal være justert med `main.demo.Lg`, og det skal ikke være noen `margin` og `padding` mellom dem, fordi `main.demo` selv allerede har satt `padding`, og å sette den tom vil bli gjentatt.

`demo/_.styl` Hvis det bare er én visningskomponent, vil beholderen ikke ha en ytre ramme, og bare sette `max-width` (fordi presentasjonsbeholderen automatisk vil legge til en ytre ramme). Hvis det er flere, kan beholderen separeres med en ytre ramme.

Ikke skriv `img` i `demo/_.pug`, bruk `demo/_.styl` for å angi bakgrunnsbildet

Hvis komponenten har flere skjemaer, vennligst vis dem i rekkefølge (som lasting, tomme data, data, mislyktes osv.), fleksibel vertikal layout

`demo/_.styl`: `stylus` stilen til demosiden, følg kodespesifikasjonene og designestetikken til [./styl.md](./styl.md)

Hvis du ikke skriver `@import '../_.styl'` for å importere komponenten som skal demonstreres, vil den automatisk injiseres; det er forbudt å bruke `@import` i `demo/_.styl` for å importere andre komponentstiler. Hvis demoen avhenger av andre komponenter (som knapp `.Btn`), vennligst importer de avhengige komponentene gjennom `import "../../Btn.js"` i `demo/_.js`.

`demo/_.js`: Kall skriptet, format `export default (root) => { ... }`, parameter `root` er verten (`document` eller rotelementet til sandkassebeholderen)

`D.createElement` er forbudt, bruk `newEl` nevnt av [./js.md](./js.md)

`js` er forbudt for bruk i `c-t` og for internasjonalisering `fLang`

Hvis `../component name.js` (`../component name.js` skal vise selve komponenten, og andre avhengige komponenter som kreves av demoen fortsatt må importeres), er bare `import` nødvendig, og ikke noe spesifikt innhold importeres, som kan utelates (rammeverket vil automatisk legges inn)

`pug` Du trenger ikke å importere `js` og `styl` , rammeverket vil automatisk injisere dem