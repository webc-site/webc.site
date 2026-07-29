Utilitzeu `css` estàndard, no escriviu `css` que comenci per `-webkit-` (el marc l'injectarà automàticament)

Desenvolupeu estils de components amb funcions modernes de `css` com ara `css nesting` , `flex`, etc.

Per al mateix valor, es poden escriure, definir i reutilitzar diversos selectors CSS en un sol lloc, i la funció de `stylus` està desactivada.

La unitat de píxels és `px` i el valor ha de ser un nombre enter.

Seguiu l'estètica del disseny de l'últim Liquid Glass d'Apple

`svg` Col·loqueu la imatge a la carpeta `svg` i utilitzeu-la a `styl` amb un camí relatiu

No utilitzeu ombres exteriors, feu servir ombres interiors més sovint i les ombres interiors no s'han de desplaçar.

No configureu `font-family`

`stylus` Només utilitza les variables més bàsiques i el format de sintaxi de sagnat, sense funcions avançades

Està prohibit utilitzar `@import` per importar altres estils de components (inclosos els components `_.styl` i `demo/_.styl`); Els estils dependents dels components s'importen mitjançant el fitxer JS del component