# Demo

Se `src/webc/BoxX/demo` och utveckla en demo av komponenten i `src/webc/component name/demo/`

`demo/_.pug`, demoundermall

Endast minimalistiska komponenttaggar ingår, ingen fullständig sida krävs och import av stilar och skript är förbjuden. Ramverket kommer automatiskt att injicera (som `demo/_.styl`, `demo/_.js`).

Skriv inte en titel (skriv till exempel inte xxx demo), skriv inte komponentens namn, introducera inte komponenten, skriv bara statusen för demoanvändningsfallet (om det inte finns någon status, skriv ingen titel)

Rotelementet i `_.pug` använder `main.demo.Lg` , som har definierat stilen i `demo/_.styl` och definierar inte stilen för `main.demo.Lg` själv.

Behållaren för visningskomponenten ska vara i linje med `main.demo.Lg`, och det ska inte finnas några `margin` och `padding` mellan dem, eftersom `main.demo` själv redan har ställt in `padding` och att ställa in den tom kommer att upprepas.

`demo/_.styl` Om det bara finns en visningskomponent kommer dess behållare inte att ha en yttre ram, och bara inställd `max-width` (eftersom presentationsbehållaren automatiskt lägger till en yttre ram). Om det finns flera kan behållaren separeras med en yttre ram.

Skriv inte `img` i `demo/_.pug`, använd `demo/_.styl` för att ställa in bakgrundsbilden

Om komponenten har flera formulär, vänligen visa dem i ordning (som laddning, tom data, data, misslyckad, etc.), flexibel vertikal layout

`demo/_.styl`: `stylus` stil på demosidan, följ kodspecifikationerna och designestetiken för [./styl.md](./styl.md)

Om du inte skriver `@import '../_.styl'` för att importera komponenten som ska demonstreras, kommer den att injiceras automatiskt; det är förbjudet att använda `@import` i `demo/_.styl` för att importera andra komponentstilar. Om demon beror på andra komponenter (som knapp `.Btn`), importera de beroende komponenterna genom `import "../../Btn.js"` i `demo/_.js`.

`demo/_.js`: Anropa skriptet, format `export default (root) => { ... }`, parameter `root` är värden (`document` eller rotelementet för sandlådebehållaren)

`D.createElement` är förbjudet, använd `newEl` som nämns av [./js.md](./js.md)

`js` är förbjudet för användning i `c-t` och för internationalisering `fLang`

Om `../component name.js` (`../component name.js` ska visa själva komponenten, och andra beroende komponenter som krävs av demon fortfarande behöver importeras), krävs bara `import` och inget specifikt innehåll importeras, vilket kan utelämnas (ramverket kommer automatiskt att läggas in)

`pug` Du behöver inte importera `js` och `styl` , ramverket kommer automatiskt att injicera dem