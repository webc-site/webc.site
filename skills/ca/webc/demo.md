# Demostració

Consulteu `src/webc/BoxX/demo` i desenvolupeu una demostració del component a `src/webc/component name/demo/`

`demo/_.pug`, subplantilla de demostració

Només s'inclouen etiquetes de components minimalistes, no es requereix cap pàgina completa i es prohibeix la importació d'estils i scripts. El marc s'injectarà automàticament (com ara `demo/_.styl`, `demo/_.js`).

No escriviu un títol (per exemple, no escriviu xxx demo), no escriviu el nom del component, no introduïu el component, només escriviu l'estat del cas d'ús de la demostració (si no hi ha estat, no escriviu cap títol)

L'element arrel de `_.pug` utilitza `main.demo.Lg` , que ha definit l'estil a `demo/_.styl` i no defineix l'estil de `main.demo.Lg` en si.

El contenidor del component de visualització s'ha d'alinear amb `main.demo.Lg` i no hi hauria d'haver `margin` i `padding` entre ells, perquè el mateix `main.demo` ja ha establert `padding` i es repetirà establir-lo en blanc.

`demo/_.styl` Si només hi ha un component de visualització, el seu contenidor no tindrà un marc exterior i només establirà `max-width` (perquè el contenidor de presentació afegirà automàticament un marc exterior). Si n'hi ha diversos, el contenidor es pot separar per un marc exterior.

No escriviu `img` a `demo/_.pug`, feu servir `demo/_.styl` per establir la imatge de fons

Si el component té diversos formularis, si us plau, visualitzeu-los en ordre (com ara càrrega, dades buides, dades, errors, etc.), flexible el disseny vertical

`demo/_.styl`: `stylus` estil de la pàgina de demostració, seguiu les especificacions del codi i l'estètica del disseny de [./styl.md](./styl.md)

Si no escriviu `@import '../_.styl'` per importar el component que es vol demostrar, s'injectarà automàticament; està prohibit utilitzar `@import` a `demo/_.styl` per importar altres estils de components. Si la demostració depèn d'altres components (com ara el botó `.Btn`), importeu els components dependents mitjançant `import "../../Btn.js"` a `demo/_.js`.

`demo/_.js`: crida a l'script, format `export default (root) => { ... }`, el paràmetre `root` és l'amfitrió (`document` o l'element arrel del contenidor de la zona de proves)

`D.createElement` està prohibit, utilitzeu `newEl` esmentat per [./js.md](./js.md)

`js` està prohibit per al seu ús a `c-t` i per a la internacionalització `fLang`

Si `../component name.js` (`../component name.js` ha de mostrar el component en si, i encara cal importar altres components dependents requerits per la demostració), només cal `import` i no s'importa cap contingut específic, que es pot ometre (el marc l'injectarà automàticament)

`pug` No cal importar `js` i `styl` , el marc els injectarà automàticament