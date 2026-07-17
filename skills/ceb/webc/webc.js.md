
  Para sa `js` component, gamita ang `Light DOM` para ipatuman ang component sa `src/component name/_.js`.

  Gamita ang mga relatibong agianan sa pag-import sa ubang mga sangkap, sama sa: `import "../component name/_.js"` (`js` wala mag-import `styl`, ang framework awtomatik nga mag-inject niini).

  `this` Ipasabot lang ang lumad nga callback function sa web component, isulat ang uban isip independent functions, ipasa ang `this` ug ang gikinahanglan nga mga parameter.

  Dugang pa sa externally exposed nga mga interface, aron mapadali ang tree-shaking optimization ug code compression, gidid-an ang pagbugkos sa custom private attributes sa `this` (gamit ang `this.$` para sa mga function sa pagdiskarga), ug ang high-order functions mahimong gamiton sa pagbalik sa mga closures aron sa paghupot sa intermediate variables.

  Ayaw pagsulat `constructor`, ang attribute makuha sa `connectedCallback`.


  Tan-awa ang [./js.md](./js.md) aron magamit pag-usab ang publikong mga gimbuhaton ubos sa `src/js/`

  Para sa mga sudlanan, gamita ang `slot` imbes nga mga attribute.
  Kung kinahanglan nimo nga i-load ang data, ibutyag ang loading interface sa ibabaw nga layer sa porma sa usa ka asynchronous callback function, ug gamita ang mga komentaryo aron ipakita ang format sa pagbalik nga kantidad.
  Ang mga sangkap kinahanglan nga maglikay sa mga pagtulo sa memorya. `disconnectedCallback` iusa ang uninstall nga mga panghitabo ngadto sa usa ka function `this.$` ug ayaw pagsulat og daghang uninstall functions.
  Ang interface return value mahimong usa ka value, array, o array sa arrays, dili butang.
  Kung ang component adunay daghang estado, gamita ang multi-line nga mga komentaryo aron klarong ihulagway ang format sa datos sa matag estado. (Ayaw pag-una sa matag linya sa mga komento gamit ang `*`)
  Pagbalhin sa estado, gamit ang numeric constants (gipasabot sa `const.js`).
  Samtang nagkarga ang callback, ipakita ang animation nga adunay `const xx = newEl('b');xx.className="Ing"` ug `@import "../Ing/_.styl"` sa `_.styl`