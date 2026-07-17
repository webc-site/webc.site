# Demo

Žr. `src/BoxX/demo` ir sukurkite komponento demonstracinę versiją `src/component name/demo/`

`demo/_.pug`, demonstracinis subšablonas

Įtraukiamos tik minimalistinės komponentų žymos, nereikia viso puslapio, o stilių ir scenarijų importas draudžiamas. Sistema bus automatiškai įterpiama (pvz., `demo/_.styl`, `demo/_.js`).

Nerašykite pavadinimo (pvz., nerašykite xxx demo), nerašykite komponento pavadinimo, nepristatykite komponento, rašykite tik demonstracinio naudojimo atvejo būseną (jei statuso nėra, nerašykite pavadinimo)

Pagrindinis `_.pug` elementas naudoja `main.demo.Lg` , kuris apibrėžė stilių `demo/_.styl` ir neapibrėžia paties `main.demo.Lg` stiliaus.

Ekrano komponento konteineris turi būti sulygiuotas su `main.demo.Lg`, o tarp jų neturėtų būti `margin` ir `padding`, nes `main.demo` pati jau nustatė `padding`, o jo nustatymas tuščias bus kartojamas.

`demo/_.styl` Jei yra tik vienas rodymo komponentas, jo konteineris neturės išorinio rėmelio ir bus nustatytas tik `max-width` (nes pateikties konteineris automatiškai pridės išorinį rėmelį). Jei yra keli, konteinerį galima atskirti išoriniu rėmu.

Nerašykite `img` į `demo/_.pug`, naudokite `demo/_.styl` fono paveikslėliui nustatyti

Jei komponentas turi kelias formas, parodykite jas eilės tvarka (pvz., įkeliami, tušti duomenys, duomenys, nepavyko ir pan.), lankstus vertikalus išdėstymas

`demo/_.styl`: `stylus` demonstracinio puslapio stilių, vadovaukitės [./styl.md](./styl.md) kodo specifikacijomis ir dizaino estetika

Nerašykite `@import '../_.styl'`, kad importuotumėte demonstruojamą komponentą, jis bus automatiškai įšvirkščiamas

Importuokite `@import '../../Btn/_.styl'` į `demo/_.styl` ir naudokite `.Btn`

`demo/_.js`: iškvieskite scenarijų, formatas `export default (root) => { ... }`, parametras `root` yra priegloba (`document` arba smėlio dėžės konteinerio šakninis elementas)

`D.createElement` draudžiama, naudokite `newEl`, paminėtą [./js.md](./js.md)

`js` draudžiama naudoti `c-t` ir internacionalizuoti `fLang`

Jei `../_.js` (`../_.js` turi rodyti patį komponentą, vis tiek reikia importuoti priklausomus komponentus, reikalingus kitoms demonstracinėms versijoms), reikia tik `import` ir neimportuojamas joks konkretus turinys, kurio galima praleisti (sistema jį automatiškai įterps)

`pug` Nereikia importuoti `js` ir `styl` , sistema juos automatiškai įves