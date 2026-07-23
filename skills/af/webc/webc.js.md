
  Vir die `js`-komponent, implementeer die komponent deur `Light DOM` in `src/webc/componentname.js` te gebruik.

  Gebruik relatiewe paaie om ander komponente in te voer, soos: `invoer "./komponentnaam.js"` (In die JS-lêer van elke komponent, voer eers die afhanklikhede in, en voer dan die ooreenstemmende `_.styl` in, byvoorbeeld `invoer "./komponentnaam/_.styl";`).

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
  Wanneer die terugbel laai, gebruik `const xx = newEl('b');xx.className="Ing"` om die animasie te vertoon, en stel afhanklikhede in deur `import "./Ing.js"` in die komponent JS-lêer.