# Onyesho

Rejelea `src/webc/BoxX/demo` na uandae onyesho la kijenzi katika `src/webc/component name/demo/`

`demo/_.pug`, kiolezo kidogo cha onyesho

Lebo za vijenzi vya kiwango cha chini pekee ndizo zimejumuishwa, hakuna ukurasa kamili unaohitajika, na uagizaji wa mitindo na hati ni marufuku. Mfumo utaingiza kiotomatiki (kama vile `demo/_.styl`, `demo/_.js`).

Usiandike kichwa (kwa mfano, usiandike onyesho la xxx), usiandike jina la sehemu, usiandike sehemu, andika tu hali ya kesi ya matumizi ya onyesho (ikiwa hakuna hali, andika hakuna kichwa)

Kipengele kikuu cha `_.pug` kinatumia `main.demo.Lg` , ambacho kimefafanua mtindo katika `demo/_.styl` na hakifafanui mtindo wa `main.demo.Lg`wenyewe.

Chombo cha kijenzi cha kuonyesha kinapaswa kupangiliwa na `main.demo.Lg`, na kusiwe na `margin` na `padding` kati yao, kwa sababu `main.demo` yenyewe tayari imeweka `padding`, na kuiweka wazi itarudiwa.

`demo/_.styl` Ikiwa kuna kipengele kimoja tu cha kuonyesha, chombo chake hakitakuwa na fremu ya nje, na weka tu `max-width` (kwa sababu chombo cha wasilisho kitaongeza kiotomatiki fremu ya nje). Ikiwa kuna nyingi, chombo kinaweza kutengwa na sura ya nje.

Usiandike `img` katika `demo/_.pug`, tumia `demo/_.styl` kuweka taswira ya usuli.

Ikiwa kijenzi kina fomu nyingi, tafadhali zionyeshe kwa mpangilio (kama vile kupakia, data tupu, data, imeshindwa, n.k.), mpangilio wima wa kunyunyuza.

`demo/_.styl`: `stylus` mtindo wa ukurasa wa onyesho, tafadhali fuata vipimo vya msimbo na umaridadi wa muundo wa [./styl.md](./styl.md)

Usipoandika `@import '../_.styl'` kuleta kijenzi kitakachoonyeshwa, kitadungwa kiotomatiki; hairuhusiwi kutumia `@import` katika `demo/_.styl` kuleta mitindo mingine ya vijenzi. Iwapo onyesho linategemea vipengele vingine (kama vile kitufe `.Btn`), tafadhali leta vijenzi tegemezi kupitia `import "../../Btn.js"` katika `demo/_.js`.

`demo/_.js`: Piga hati, umbizo la `export default (root) => { ... }`, kigezo `root` ni seva pangishi (`document` au kipengee kikuu cha chombo cha kisanduku cha mchanga)

`D.createElement` ni marufuku, tumia `newEl` iliyotajwa na [./js.md](./js.md)

`js` hairuhusiwi kwa matumizi katika `c-t`, na kwa utangazaji wa kimataifa `fLang`

Ikiwa `../component name.js` (`../component name.js` ni kuonyesha kijenzi chenyewe, na vipengele vingine tegemezi vinavyohitajika na onyesho bado vinahitaji kuingizwa), `import` pekee ndiyo inayohitajika, na hakuna maudhui mahususi yanayoletwa, ambayo yanaweza kuachwa (muundo wa onyesho) utaingizwa kiotomatiki.

`pug` Hakuna haja ya kuleta `js` na `styl` , mfumo utaziingiza kiotomatiki