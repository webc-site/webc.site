# Demo

Sumangguni sa `src/BoxX/demo` at bumuo ng demo ng component sa `src/component name/demo/`

`demo/_.pug`, demo subtemplate

Mga minimalist na component tag lang ang kasama, walang kumpletong page ang kailangan, at ipinagbabawal ang pag-import ng mga istilo at script. Awtomatikong mag-i-inject ang framework (gaya ng `demo/_.styl`, `demo/_.js`).

Huwag magsulat ng pamagat (halimbawa, huwag sumulat ng xxx demo), huwag isulat ang pangalan ng bahagi, huwag ipakilala ang bahagi, isulat lamang ang katayuan ng demo use case (kung walang status, isulat ang walang pamagat)

Ang root element ng `_.pug` ay gumagamit ng `main.demo.Lg` , na tinukoy ang istilo sa `demo/_.styl` at hindi tumutukoy sa istilo ng `main.demo.Lg` mismo.

Ang lalagyan ng bahagi ng display ay dapat na nakahanay sa `main.demo.Lg`, at dapat na walang `margin` at `padding` sa pagitan ng mga ito, dahil ang `main.demo` mismo ay nagtakda na ng `padding`, at ang pagtatakda dito ay uulitin.

`demo/_.styl` Kung mayroon lamang isang bahagi ng display, ang lalagyan nito ay hindi magkakaroon ng panlabas na frame, at itatakda lamang ang `max-width` (dahil ang lalagyan ng pagtatanghal ay awtomatikong magdaragdag ng isang panlabas na frame). Kung mayroong marami, ang lalagyan ay maaaring paghiwalayin ng isang panlabas na frame.

Huwag isulat ang `img` sa `demo/_.pug`, gamitin ang `demo/_.styl` para itakda ang larawan sa background

Kung ang bahagi ay may maraming mga form, mangyaring ipakita ang mga ito sa pagkakasunud-sunod (tulad ng pag-load, walang laman na data, data, nabigo, atbp.), ibaluktot ang patayong layout

`demo/_.styl`: `stylus` estilo ng pahina ng demo, mangyaring sundin ang mga detalye ng code at aesthetics ng disenyo ng [./styl.md](./styl.md)

Huwag magsulat ng `@import '../_.styl'` para i-import ang component na ipapakita, awtomatiko itong mai-inject

Paki-import ang `@import '../../Btn/_.styl'` sa `demo/_.styl` at gamitin ang `.Btn`

`demo/_.js`: Tawagan ang script, format na `export default (root) => { ... }`, parameter `root` ang host (`document` o ang root element ng sandbox container)

Ipinagbabawal ang `D.createElement`, gamitin ang `newEl` na binanggit ni [./js.md](./js.md)

Ang `js` ay ipinagbabawal para sa paggamit sa `c-t`, at para sa internasyonalisasyon `fLang`

Kung ang `../_.js` (`../_.js` ay ipapakita ang mismong bahagi, ang mga umaasang sangkap na kinakailangan ng ibang mga demo ay kailangan pa ring i-import) `import` lang ang kailangan, at walang partikular na nilalaman ang na-import, na maaaring tanggalin (awtomatikong i-inject ito ng framework)

`pug` Hindi na kailangang mag-import ng `js` at `styl` , awtomatikong ii-inject ng framework ang mga ito