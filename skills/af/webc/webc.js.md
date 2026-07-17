
  Vir die `js` komponent, gebruik `Light DOM` om die komponent in `src/component name/_.js` te implementeer.

  Gebruik relatiewe paaie om ander komponente in te voer, soos: `invoer "../komponentnaam/_.js"` (`js` voer nie `styl` in nie, die raamwerk sal dit outomaties inspuit).

  `this` Definieer slegs die inheemse terugbelfunksie van die webkomponent, skryf die ander as onafhanklike funksies, gee `this` en die vereiste parameters in.

  Benewens die ekstern blootgestelde koppelvlakke, om boomskud-optimalisering en kode-kompressie te vergemaklik, is dit verbode om persoonlike private eienskappe op `this` te bind (gebruik `this.$` vir aflaaifunksies), en hoë-orde funksies kan gebruik word om sluitings terug te gee om tussenveranderlikes te hou.

  Moenie `constructor` skryf nie, die kenmerk word in `connectedCallback` verkry.


  Verwys na [./js.md](./js.md) om die publieke funksies onder `src/js/` te hergebruik

  Vir houers, gebruik `slot` in plaas van eienskappe.
  As jy data moet laai, stel die laai-koppelvlak bloot aan die boonste laag in die vorm van 'n asynchrone terugbelfunksie, en gebruik opmerkings om die formaat van die terugkeerwaarde aan te dui.
  Komponente moet geheuelekkasies vermy. `disconnectedCallback` voeg deïnstalleringsgebeurtenisse saam in een funksie `this.$` en moenie veelvuldige verwyderfunksies skryf nie.
  Die koppelvlak-terugkeerwaarde kan 'n enkele waarde, 'n skikking of 'n skikking van skikkings wees, nie 'n voorwerp nie.
  As die komponent veelvuldige toestande het, gebruik multi-lyn opmerkings om die dataformaat van elke toestand duidelik te beskryf. (Moenie elke reël opmerkings met `*` voorafgaan nie)
  Toestandskakeling, deur gebruik te maak van numeriese konstantes (gedefinieer as `const.js`).
  Terwyl die terugbel laai, wys animasie met `const xx = newEl('b');xx.className="Ing"` en `@import "../Ing/_.styl"` in `_.styl`