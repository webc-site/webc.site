# Demo

Verwys na `src/webc/BoxX/demo` en ontwikkel 'n demonstrasie van die komponent in `src/webc/component name/demo/`

`demo/_.pug`, demonstrasie-subsjabloon

Slegs minimalistiese komponentmerkers is ingesluit, geen volledige bladsy word vereis nie, en die invoer van style en skrifte word verbied. Die raamwerk sal outomaties inspuit (soos `demo/_.styl`, `demo/_.js`).

Moenie 'n titel skryf nie (moenie byvoorbeeld xxx-demo skryf nie), moenie die komponentnaam skryf nie, moenie die komponent bekendstel nie, skryf slegs die status van die demonstrasiegebruiksgeval (as daar geen status is nie, skryf geen titel nie)

Die wortelelement van `_.pug` gebruik `main.demo.Lg` , wat die styl in `demo/_.styl` gedefinieer het en nie die styl van `main.demo.Lg` self definieer nie.

Die houer van die vertoonkomponent moet in lyn wees met `main.demo.Lg`, en daar moet geen `margin` en `padding` tussen hulle wees nie, want `main.demo` self het reeds `padding` gestel, en die stel dit leeg sal herhaal word.

`demo/_.styl` As daar net een vertoonkomponent is, sal sy houer nie 'n buitenste raam hê nie, en slegs `max-width` stel (omdat die aanbiedinghouer outomaties 'n buitenste raam sal byvoeg). As daar veelvuldiges is, kan die houer deur 'n buitenste raam geskei word.

Moenie `img` in `demo/_.pug` skryf nie, gebruik `demo/_.styl` om die agtergrondprent te stel

As die komponent veelvuldige vorms het, vertoon dit asseblief in volgorde (soos laai, leë data, data, mislukte, ens.), buig vertikale uitleg

`demo/_.styl`: `stylus` styl van die demonstrasiebladsy, volg asseblief die kodespesifikasies en ontwerp-estetika van [./styl.md](./styl.md)

As jy nie `@import '../_.styl'` skryf om die komponent wat gedemonstreer moet word in te voer nie, sal dit outomaties ingespuit word; dit is verbode om `@import` in `demo/_.styl` te gebruik om ander komponentstyle in te voer. As die demonstrasie van ander komponente afhang (soos knoppie `.Btn`), voer asseblief die afhanklike komponente in deur `import "../../Btn.js"` in `demo/_.js`.

`demo/_.js`: Roep die skrip, formaat `export default (root) => { ... }`, parameter `root` is die gasheer (`document` of die wortelelement van die sandboxhouer)

Dit is verbode om `D.createElement` te gebruik, gebruik die `newEl` wat in [./js.md](./js.md) genoem word

`js` is verbode vir gebruik in `c-t`, en vir internasionalisering `fLang`

As `../component name.js` (`../component name.js` die komponent self moet vertoon, en ander afhanklike komponente wat deur die demo vereis word, moet steeds ingevoer word), word slegs `import` vereis, en geen spesifieke inhoud word ingevoer nie, wat dit weggelaat kan word (die raamwerk sal outomaties ingevoer word)

`pug` Jy hoef nie `js` en `styl` in te voer nie, die raamwerk sal hulle outomaties inspuit