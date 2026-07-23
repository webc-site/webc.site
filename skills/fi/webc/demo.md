# Demo

Katso `src/webc/BoxX/demo` ja kehitä komponentin esittely osoitteessa `src/webc/component name/demo/`

`demo/_.pug`, esittelyalamalli

Vain minimalistiset komponenttitunnisteet sisältyvät, kokonaista sivua ei vaadita, ja tyylien ja skriptien tuonti on kielletty. Kehys lisää automaattisesti (kuten `demo/_.styl`, `demo/_.js`).

Älä kirjoita otsikkoa (esimerkiksi älä kirjoita xxx-demoa), älä kirjoita komponentin nimeä, älä esittele komponenttia, kirjoita vain demon käyttötapauksen tila (jos tilaa ei ole, älä kirjoita otsikkoa)

Kohteen `_.pug` juurielementti käyttää `main.demo.Lg` , joka on määrittänyt tyylin kohdassa `demo/_.styl` eikä määrittele itse `main.demo.Lg`:n tyyliä.

Näyttökomponentin säilön tulee olla kohdakkain `main.demo.Lg`:n kanssa, eikä niiden välissä saa olla `margin` ja `padding`, koska `main.demo` itse on jo asettanut `padding` ja sen tyhjentäminen toistetaan.

`demo/_.styl` Jos näyttökomponentteja on vain yksi, sen säilöllä ei ole ulkokehystä, vaan se asetetaan vain `max-width` (koska esityssäilö lisää automaattisesti ulkokehyksen). Jos niitä on useita, säiliö voidaan erottaa ulkokehyksellä.

Älä kirjoita `img` kenttään `demo/_.pug`, käytä `demo/_.styl` taustakuvan asettamiseen

Jos komponentilla on useita lomakkeita, näytä ne järjestyksessä (kuten lataus, tyhjät tiedot, tiedot, epäonnistuneet jne.), joustava pystyasettelu

`demo/_.styl`: `stylus` esittelysivun tyyliin, noudata [./styl.md](./styl.md) koodimäärityksiä ja suunnittelun estetiikkaa.

Jos et kirjoita `@import '../_.styl'` tuodaksesi esitettävän komponentin, se injektoidaan automaattisesti; `@import`:n käyttö `demo/_.styl`:ssa muiden komponenttyylien tuomiseen on kiellettyä. Jos esittely riippuu muista komponenteista (kuten painike `.Btn`), tuo riippuvat komponentit `import "../../Btn.js"` -kohdan `demo/_.js` kautta.

`demo/_.js`: kutsu skriptiä, muoto `export default (root) => { ... }`, parametri `root` on isäntä (`document` tai hiekkalaatikkosäiliön juurielementti)

`D.createElement` on kielletty, käytä `newEl`:n [./js.md](./js.md) mainitsemaa

`js` on kielletty käyttökohteessa `c-t` ja kansainvälistymiseen `fLang`

Jos `../komponentin nimi.js` (`../komponentin nimi.js` näyttää itse komponentin ja muut demon edellyttämät riippuvat komponentit on vielä tuotava), tarvitaan vain `import`, eikä mitään tiettyä sisältöä tuoda, joka voidaan jättää pois (kehys lisää sen automaattisesti)

`pug` Ei tarvitse tuoda `js` ja `styl` , kehys lisää ne automaattisesti