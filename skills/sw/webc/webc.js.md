
  Kwa `js` kipengele, tumia `Light DOM` kutekeleza kijenzi katika `src/component name/_.js`.

  Tumia njia linganishi kuleta vipengele vingine, kama vile: `kuagiza "../component name/_.js"` (`js` haileti `styl`, mfumo utaiingiza kiotomatiki).

  `this` Bainisha tu chaguo la kukokotoa la urejeshaji simu asilia la kijenzi cha wavuti, andika vingine kama vitendaji huru, pitisha katika `this` na vigezo vinavyohitajika.

  Kando na violesura vinavyoonekana kwa nje, ili kuwezesha uboreshaji wa mtikisiko wa miti na kubana kwa msimbo, hairuhusiwi kuunganisha sifa maalum za kibinafsi kwenye `this` (tumia `this.$` kwa upakuaji wa vitendaji), na vitendaji vya mpangilio wa juu vinaweza kutumika kurejesha kufungwa ili kushikilia vigeuzo vya kati.

  Usiandike `constructor`, sifa hupatikana katika `connectedCallback`.


  Rejelea [./js.md](./js.md) ili kutumia tena vitendaji vya umma chini ya `src/js/`

  Kwa vyombo, tumia `slot` badala ya sifa.
  Iwapo unahitaji kupakia data, onyesha kiolesura cha upakiaji kwenye safu ya juu katika mfumo wa kitendakazi cha kurudi nyuma kisicholingana, na utumie maoni kuonyesha umbizo la thamani ya kurejesha.
  Vipengele lazima viepuke uvujaji wa kumbukumbu. `disconnectedCallback` unganisha matukio ya kusanidua katika chaguo moja la kukokotoa `this.$` na usiandike vitendaji vingi vya kufuta.
  Thamani ya kurejesha kiolesura inaweza kuwa thamani moja, mkusanyiko, au safu ya mkusanyiko, si kitu.
  Ikiwa kijenzi kina majimbo mengi, tumia maoni ya mistari mingi kuelezea kwa uwazi muundo wa data wa kila jimbo. (Usitangulie kila mstari wa maoni kwa `*`)
  Kubadilisha hali, kwa kutumia viunga vya nambari (vilivyofafanuliwa kwa `const.js`).
  Wakati simu inapakia, onyesha uhuishaji na `const xx = newEl('b');xx.className="Ing"` na `@import "../Ing/_.styl"` katika `_.styl`