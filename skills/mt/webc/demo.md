# Demo

Irreferi għal `src/BoxX/demo` u żviluppa demo tal-komponent f'`src/isem tal-komponent/demo/`

`demo/_.pug`, sottotemplate demo

Tikketti tal-komponenti minimalisti biss huma inklużi, l-ebda paġna kompluta mhi meħtieġa, u l-importazzjoni ta 'stili u skripts hija pprojbita. Il-qafas awtomatikament jinjetta (bħal `demo/_.styl`, `demo/_.js`).

Tiktebx titolu (pereżempju, tiktebx xxx demo), tiktebx l-isem tal-komponent, tintroduċix il-komponent, ikteb biss l-istatus tal-każ tal-użu demo (jekk ma jkunx hemm status, ikteb l-ebda titolu)

L-element għerq ta' `_.pug` juża `main.demo.Lg` , li ddefinixxa l-istil f'`demo/_.styl` u ma jiddefinixxix l-istil ta' `main.demo.Lg` innifsu.

Il-kontenitur tal-komponent tal-wiri għandu jkun allinjat ma '`main.demo.Lg`, u m'għandux ikun hemm `margin` u `padding` bejniethom, minħabba li `main.demo` innifsu diġà stabbilixxa `padding`, u l-issettjar tiegħu vojt se jiġi ripetut.

`demo/_.styl` Jekk ikun hemm komponent tal-wiri wieħed biss, il-kontenitur tiegħu mhux se jkollu qafas ta 'barra, u ssettja biss `max-width` (għax il-kontenitur tal-preżentazzjoni awtomatikament iżid qafas ta' barra). Jekk ikun hemm bosta, il-kontenitur jista 'jiġi separat b'qafas ta' barra.

Tiktebx `img` fi `demo/_.pug`, uża `demo/_.styl` biex tissettja l-immaġni tal-isfond

Jekk il-komponent għandu forom multipli, jekk jogħġbok urihom f'ordni (bħal tagħbija, dejta vojta, dejta, falla, eċċ.), flex vertikali tqassim

`demo/_.styl`: `stylus` stil tal-paġna demo, jekk jogħġbok segwi l-ispeċifikazzjonijiet tal-kodiċi u l-estetika tad-disinn ta' [./styl.md](./styl.md)

Tiktebx `@import '../_.styl'` biex timporta l-komponent li jrid jintwera, se jiġi injettat awtomatikament

Jekk jogħġbok importa `@import '../../Btn/_.styl'` fi `demo/_.styl` u uża `.Btn`

`demo/_.js`: Sejħa l-iskript, format `export default (root) => { ... }`, parametru `root` huwa l-ospitant (`document` jew l-element għerq tal-kontenitur sandbox)

`D.createElement` huwa pprojbit, uża `newEl` imsemmi minn [./js.md](./js.md)

`js` huwa pprojbit għall-użu fi `c-t`, u għall-internazzjonalizzazzjoni `fLang`

Jekk `../_.js` (`../_.js` għandu juri l-komponent innifsu, il-komponenti dipendenti meħtieġa minn demos oħra għad iridu jiġu importati) `import` biss huwa meħtieġ, u l-ebda kontenut speċifiku ma jiġi importat, li jista' jitħalla barra (il-qafas awtomatikament jinjettah)

`pug` M'hemmx għalfejn timporta `js` u `styl` , il-qafas awtomatikament jinjettahom