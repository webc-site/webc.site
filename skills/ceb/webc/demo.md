# Demo

Tan-awa ang `src/BoxX/demo` ug paghimo og demo sa component sa `src/component name/demo/`

`demo/_.pug`, demo subtemplate

Ang mga minimalist nga tag sa sangkap ra ang gilakip, wala’y kompleto nga panid nga gikinahanglan, ug gidili ang pag-import sa mga istilo ug script. Ang balangkas awtomatik nga mag-inject (sama sa `demo/_.styl`, `demo/_.js`).

Ayaw pagsulat ug titulo (pananglitan, ayaw isulat ang xxx demo), ayaw isulat ang ngalan sa sangkap, ayaw ipaila ang sangkap, isulat lang ang kahimtang sa kaso sa paggamit sa demo (kung wala’y status, wala isulat nga titulo)

Ang gamut nga elemento sa `_.pug` naggamit `main.demo.Lg` , nga naghubit sa estilo sa `demo/_.styl` ug wala magpasabot sa estilo sa `main.demo.Lg` mismo.

Ang sudlanan sa display component kinahanglang ipahiangay sa `main.demo.Lg`, ug walay `margin` ug `padding` tali kanila, tungod kay ang `main.demo` mismo nakabutang na `padding`, ug ang pagbutang niini nga blangko masubli.

`demo/_.styl` Kon adunay usa lamang ka display component, ang sudlanan niini walay gawas nga bayanan, ug ibutang lamang ang `max-width` (tungod kay ang sudlanan sa presentasyon awtomatik nga magdugang ug gawas nga bayanan). Kung adunay daghan, ang sudlanan mahimong mabulag sa usa ka gawas nga bayanan.

Ayaw isulat ang `img` sa `demo/_.pug`, gamita ang `demo/_.styl` aron mabutang ang background nga imahe

Kung ang component adunay daghang mga porma, palihug ipakita kini sa han-ay (sama sa pagkarga, walay sulod nga datos, data, napakyas, ug uban pa), flex vertical layout

`demo/_.styl`: `stylus` estilo sa demo page, palihug sunda ang code specifications ug design aesthetics sa [./styl.md](./styl.md)

Ayaw pagsulat `@import '../_.styl'` aron ma-import ang sangkap nga ipakita, kini awtomatiko nga ma-inject

Palihug import `@import '../../Btn/_.styl'` sa `demo/_.styl` ug gamita ang `.Btn`

`demo/_.js`: Tawga ang script, format `export default (root) => { ... }`, parameter `root` mao ang host (`document` o ang gamut nga elemento sa sandbox container)

`D.createElement` gidili, gamita ang `newEl` nga gihisgotan ni [./js.md](./js.md)

Ang `js` gidili alang sa paggamit sa `c-t`, ug alang sa internasyonalisasyon `fLang`

Kung ang `../_.js` (`../_.js` mao ang magpakita mismo sa component, ang nagsalig nga mga component nga gikinahanglan sa ubang mga demo kinahanglan pa nga i-import) `import` lang ang gikinahanglan, ug walay espesipikong sulod ang gi-import, nga mahimong tangtangon (awtomatikong i-inject kini sa framework)

`pug` Dili kinahanglan nga i-import ang `js` ug `styl` , ang framework awtomatik nga mag-inject niini