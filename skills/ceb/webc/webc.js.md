
  Para sa `js` component, ipatuman ang component gamit ang `Light DOM` sa `src/webc/componentname.js`.

  Gamita ang mga relatibong agianan sa pag-import sa ubang mga component, sama sa: `import "./component name.js"` (Sa JS file sa matag component, import una ang mga dependency, ug dayon import ang katugbang nga `_.styl`, pananglitan `import "./component name/_.styl";`).

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
  Kung nagkarga na ang callback, gamita ang `const xx = newEl('b');xx.className="Ing"` para ipakita ang animation, ug ipaila ang mga dependency pinaagi sa `import "./Ing.js"` sa component nga JS file.