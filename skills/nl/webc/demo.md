# Demo

Raadpleeg `src/BoxX/demo` en ontwikkel een demo van de component in `src/component name/demo/`

`demo/_.pug`, demo-subsjabloon

Er zijn alleen minimalistische componenttags opgenomen, er is geen volledige pagina vereist en het importeren van stijlen en scripts is verboden. Het raamwerk zal automatisch injecteren (zoals `demo/_.styl`, `demo/_.js`).

Schrijf geen titel (schrijf bijvoorbeeld niet xxx demo), schrijf niet de naam van de component, introduceer de component niet, schrijf alleen de status van de demo-use case (als er geen status is, schrijf dan geen titel)

Het hoofdelement van `_.pug` gebruikt `main.demo.Lg` , dat de stijl in `demo/_.styl` heeft gedefinieerd en niet de stijl van `main.demo.Lg` zelf.

De container van de weergavecomponent moet worden uitgelijnd met `main.demo.Lg`, en er mogen geen `margin` en `padding` tussen zitten, omdat `main.demo` zelf al `padding` heeft ingesteld, en het leeg instellen ervan zal worden herhaald.

`demo/_.styl` Als er slechts één weergavecomponent is, zal de container ervan geen buitenframe hebben en alleen `max-width` instellen (omdat de presentatiecontainer automatisch een buitenframe toevoegt). Als er meerdere zijn, kan de container gescheiden worden door een buitenframe.

Schrijf niet `img` in `demo/_.pug`, gebruik `demo/_.styl` om de achtergrondafbeelding in te stellen

Als de component meerdere formulieren heeft, geef deze dan in volgorde weer (zoals laden, lege gegevens, gegevens, mislukt, enz.), flexibele verticale lay-out

`demo/_.styl`: `stylus` stijl van de demopagina. Volg de codespecificaties en ontwerpesthetiek van [./styl.md](./styl.md)

Schrijf niet `@import '../_.styl'` om de te demonstreren component te importeren; deze wordt automatisch geïnjecteerd

Importeer `@import '../../Btn/_.styl'` in `demo/_.styl` en gebruik `.Btn`

`demo/_.js`: Roep het script aan, formatteer `export default (root) => { ... }`, parameter `root` is de host (`document` of het hoofdelement van de sandboxcontainer)

`D.createElement` is verboden, gebruik `newEl` vermeld door [./js.md](./js.md)

`js` is verboden voor gebruik in `c-t` en voor internationalisering `fLang`

Als `../_.js` (`../_.js` de component zelf moet weergeven, moeten de afhankelijke componenten die vereist zijn voor andere demo's nog steeds worden geïmporteerd) is alleen `import` vereist en wordt er geen specifieke inhoud geïmporteerd, die kan worden weggelaten (het raamwerk zal deze automatisch injecteren)

`pug` Het is niet nodig om `js` en `styl` te importeren, het framework zal ze automatisch injecteren