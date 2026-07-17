# Demo

Verwys na `src/BoxX/demo` en ontwikkel 'n demonstrasie van die komponent in `src/component name/demo/`

`demo/_.pug`, demonstrasie-subsjabloon

Slegs minimalistiese komponentmerkers is ingesluit, geen volledige bladsy word vereis nie, en die invoer van style en skrifte word verbied. Die raamwerk sal outomaties inspuit (soos `demo/_.styl`, `demo/_.js`).

Moenie 'n titel skryf nie (moenie byvoorbeeld xxx-demo skryf nie), moenie die komponentnaam skryf nie, moenie die komponent bekendstel nie, skryf slegs die status van die demonstrasiegebruiksgeval (as daar geen status is nie, skryf geen titel nie)

Die wortelelement van `_.pug` gebruik `main.demo.Lg` , wat die styl in `demo/_.styl` gedefinieer het en nie die styl van `main.demo.Lg` self definieer nie.

Die houer van die vertoonkomponent moet in lyn wees met `main.demo.Lg`, en daar moet geen `margin` en `padding` tussen hulle wees nie, want `main.demo` self het reeds `padding` gestel, en die stel dit leeg sal herhaal word.

`demo/_.styl` As daar net een vertoonkomponent is, sal sy houer nie 'n buitenste raam hê nie, en slegs `max-width` stel (omdat die aanbiedinghouer outomaties 'n buitenste raam sal byvoeg). As daar veelvuldiges is, kan die houer deur 'n buitenste raam geskei word.

Moenie `img` in `demo/_.pug` skryf nie, gebruik `demo/_.styl` om die agtergrondprent te stel

As die komponent veelvuldige vorms het, vertoon dit asseblief in volgorde (soos laai, leë data, data, mislukte, ens.), buig vertikale uitleg

`demo/_.styl`: `stylus` styl van die demonstrasiebladsy, volg asseblief die kodespesifikasies en ontwerp-estetika van [./styl.md](./styl.md)

Moenie `@import '../_.styl'` skryf om die komponent wat gedemonstreer moet word in te voer nie, dit sal outomaties ingespuit word

Voer asseblief `@import '../../Btn/_.styl'` in `demo/_.styl` in en gebruik `.Btn`

`demo/_.js`: Roep die skrip, formaat `export default (root) => { ... }`, parameter `root` is die gasheer (`document` of die wortelelement van die sandboxhouer)

Dit is verbode om `D.createElement` te gebruik, gebruik die `newEl` wat in [./js.md](./js.md) genoem word

`js` is verbode vir gebruik in `c-t`, en vir internasionalisering `fLang`

As `../_.js` (`../_.js` die komponent self moet vertoon, moet die afhanklike komponente wat deur ander demonstrasies vereis word steeds ingevoer word) slegs `import` word vereis, en geen spesifieke inhoud word ingevoer nie, wat weggelaat kan word (die raamwerk sal dit outomaties inspuit)

`pug` Jy hoef nie `js` en `styl` in te voer nie, die raamwerk sal hulle outomaties inspuit