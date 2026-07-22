
  Para sa `js` component, ipatupad ang component gamit ang `Light DOM` sa `src/webc/componentname.js`.

  Gumamit ng mga kaugnay na landas upang mag-import ng iba pang mga bahagi, gaya ng: `import "./component name.js"` (Sa JS file ng bawat component, ang katumbas na `_.styl` ay dapat ma-import sa simula, gaya ng `import "./component name/_.styl";`).

  `this` Tukuyin lang ang native callback function ng web component, isulat ang iba bilang independent function, ipasok ang `this` at ang mga kinakailangang parameter.

  Bilang karagdagan sa mga panlabas na nakalantad na interface, upang mapadali ang pag-optimize ng tree-shaking at compression ng code, ipinagbabawal na i-bind ang mga custom na pribadong attribute sa `this` (gamitin ang `this.$` para sa mga function ng pag-unload), at maaaring gamitin ang mga high-order na function para ibalik ang mga pagsasara upang magkaroon ng mga intermediate na variable.

  Huwag isulat ang `constructor`, nakuha ang attribute sa `connectedCallback`.


  Sumangguni sa [./js.md](./js.md) para muling gamitin ang mga pampublikong function sa ilalim ng `src/js/`

  Para sa mga container, gamitin ang `slot` sa halip na mga attribute.
  Kung kailangan mong mag-load ng data, ilantad ang interface ng paglo-load sa itaas na layer sa anyo ng isang asynchronous na function ng callback, at gumamit ng mga komento upang isaad ang format ng return value.
  Dapat iwasan ng mga bahagi ang memory leaks. `disconnectedCallback` pagsamahin ang mga kaganapan sa pag-uninstall sa isang function `this.$` at huwag magsulat ng maramihang mga function sa pag-uninstall.
  Ang halaga ng pagbabalik ng interface ay maaaring isang halaga, isang array, o isang hanay ng mga array, hindi isang bagay.
  Kung ang bahagi ay may maraming estado, gumamit ng maraming linyang komento upang malinaw na ilarawan ang format ng data ng bawat estado. (Huwag unahan ang bawat linya ng mga komento ng `*`)
  Paglipat ng estado, gamit ang mga numeric constant (tinukoy sa `const.js`).
  Kapag naglo-load ang callback, gamitin ang `const xx = newEl('b');xx.className="Ing"` upang ipakita ang animation, at ipakilala ang mga dependency sa pamamagitan ng `import "./Ing.js"` sa component na JS file.