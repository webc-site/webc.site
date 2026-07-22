# Demo

Irreferi għal `src/webc/BoxX/demo` u żviluppa demo tal-komponent f'`src/webc/component name/demo/`

`demo/_.pug`, sottotemplate demo

Tikketti tal-komponenti minimalisti biss huma inklużi, l-ebda paġna kompluta mhi meħtieġa, u l-importazzjoni ta 'stili u skripts hija pprojbita. Il-qafas awtomatikament jinjetta (bħal `demo/_.styl`, `demo/_.js`).

Tiktebx titolu (pereżempju, tiktebx xxx demo), tiktebx l-isem tal-komponent, tintroduċix il-komponent, ikteb biss l-istatus tal-każ tal-użu demo (jekk ma jkunx hemm status, ikteb l-ebda titolu)

L-element għerq ta' `_.pug` juża `main.demo.Lg` , li ddefinixxa l-istil f'`demo/_.styl` u ma jiddefinixxix l-istil ta' `main.demo.Lg` innifsu.

Il-kontenitur tal-komponent tal-wiri għandu jkun allinjat ma '`main.demo.Lg`, u m'għandux ikun hemm `margin` u `padding` bejniethom, minħabba li `main.demo` innifsu diġà stabbilixxa `padding`, u l-issettjar tiegħu vojt se jiġi ripetut.

`demo/_.styl` Jekk ikun hemm komponent tal-wiri wieħed biss, il-kontenitur tiegħu mhux se jkollu qafas ta 'barra, u ssettja biss `max-width` (għax il-kontenitur tal-preżentazzjoni awtomatikament iżid qafas ta' barra). Jekk ikun hemm bosta, il-kontenitur jista 'jiġi separat b'qafas ta' barra.

Tiktebx `img` fi `demo/_.pug`, uża `demo/_.styl` biex tissettja l-immaġni tal-isfond

Jekk il-komponent għandu forom multipli, jekk jogħġbok urihom f'ordni (bħal tagħbija, dejta vojta, dejta, falla, eċċ.), flex vertikali tqassim

`demo/_.styl`: `stylus` stil tal-paġna demo, jekk jogħġbok segwi l-ispeċifikazzjonijiet tal-kodiċi u l-estetika tad-disinn ta' [./styl.md](./styl.md)

Jekk ma tiktebx `@import '../_.styl'` biex timporta l-komponent li jrid jintwera, jiġi injettat awtomatikament; huwa pprojbit li tuża `@import` fi `demo/_.styl` biex timporta stili oħra ta' komponenti. Jekk id-demo tiddependi fuq komponenti oħra (bħal buttuna `.Btn`), jekk jogħġbok importa l-komponenti dipendenti permezz ta '`import "../../Btn.js"` f'`demo/_.js`.

`demo/_.js`: Sejħa l-iskript, format `export default (root) => { ... }`, parametru `root` huwa l-ospitant (`document` jew l-element għerq tal-kontenitur sandbox)

`D.createElement` huwa pprojbit, uża `newEl` imsemmi minn [./js.md](./js.md)

`js` huwa pprojbit għall-użu fi `c-t`, u għall-internazzjonalizzazzjoni `fLang`

Jekk `../component name.js` (`../component name.js` għandu juri l-komponent innifsu, u komponenti dipendenti oħra meħtieġa mid-demo għad iridu jiġu importati), huwa meħtieġ biss `import`, u l-ebda kontenut speċifiku ma jiġi importat, li jista’ jitħalla barra (il-qafas jinjettah awtomatikament)

`pug` M'hemmx għalfejn timporta `js` u `styl` , il-qafas awtomatikament jinjettahom