# Demo

Referéiert op `src/webc/BoxX/demo` an entwéckelt eng Demo vun der Komponent an `src/webc/component name/demo/`

`demo/_.pug`, Demo-Subtemplate

Nëmme minimalistesch Komponenttags si mat abegraff, keng komplett Säit ass erfuerderlech, an den Import vu Stiler a Skripte ass verbueden. De Kader gëtt automatesch injizéiert (wéi `demo/_.styl`, `demo/_.js`).

Schreift keen Titel (zum Beispill, schreiwt keng xxx Demo), schreiwt den Numm vum Komponent net, stellt d'Komponent net aféieren, schreift nëmmen de Status vum Demo Benotzungsfall (wann et kee Status ass, schreift keen Titel)

De Root-Element vun `_.pug` benotzt `main.demo.Lg` , wat de Stil an `demo/_.styl` definéiert huet an net de Stil vun `main.demo.Lg` selwer definéiert.

De Container vun der Affichagekomponent soll mat `main.demo.Lg` ausgeriicht sinn, an et däerf keng `margin` an `padding` tëscht hinnen sinn, well `main.demo` selwer schonn `padding` gesat huet, an et eidel ze setzen gëtt widderholl.

`demo/_.styl` Wann et nëmmen een Affichage-Komponent gëtt, huet säi Container keen baussenzege Frame, an nëmmen `max-width` gesat (well de Presentatiounsbehälter automatesch en baussenzege Frame bäidréit). Wann et méi sinn, kann de Container vun engem baussenzege Frame getrennt ginn.

Schreift net `img` an `demo/_.pug`, benotzt `demo/_.styl` fir den Hannergrondbild ze setzen

Wann de Komponent e puer Formen huet, gitt se w.e.g. an Uerdnung (wéi Luede, eidel Donnéeën, Daten, gescheitert, etc.), flex vertikale Layout

`demo/_.styl`: `stylus` Stil vun der Demo Säit, befollegt w.e.g. de Code Spezifikatioune an Design Ästhetik vun [./styl.md](./styl.md)

Wann Dir net `@import '../_.styl'` schreift fir de Komponent ze importéieren deen ze demonstréieren, gëtt se automatesch injizéiert; et ass verbueden `@import` an `demo/_.styl` ze benotzen fir aner Komponentstiler z'importéieren. Wann d'Demo vun anere Komponenten hänkt (wéi Knäppchen `.Btn`), importéiert w.e.g. déi ofhängeg Komponenten duerch `import "../../Btn.js"` an `demo/_.js`.

`demo/_.js`: Rufft de Skript un, Format `export default (root) => { ... }`, Parameter `root` ass den Host (`document` oder de Root-Element vum Sandkëschtcontainer)

`D.createElement` ass verbueden, benotzt `newEl` ernimmt vun [./js.md](./js.md)

`js` ass verbueden ze benotzen an `c-t` a fir Internationaliséierung `fLang`

Wann `../component name.js` (`../component name.js` de Komponente selwer soll weisen, an aner ofhängeg Komponenten, déi vun der Demo erfuerderlech sinn, mussen nach importéiert ginn), ass nëmmen `import` erfuerderlech, a kee spezifeschen Inhalt gëtt importéiert, dee kann ausgelooss ginn (de Kader gëtt automatesch agefouert)

`pug` Net néideg `js` an `styl` z'importéieren, de Kader wäert se automatesch injizéieren