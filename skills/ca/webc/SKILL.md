---
name: webc
---

Seguiu el procés, feu un pla i desenvolupeu pas a pas per evitar omissions

1. Executeu `./sh/new.js nom del component del tipus de projecte` i creeu el component al directori `src/webc`
   El tipus de projecte pot ser `css` (component d'estil pur), `js` (component de pàgina web)
   Posa en majúscula la primera lletra del nom del component

2. Llegiu les especificacions de codificació per a `.agents/doc/code` i, a continuació, desenvolupeu.

   L'estil del component està escrit en `_.styl`. L'estil utilitzat per a la demostració està escrit en `demo/_.styl`. Està prohibit escriure-ho en `nom del component/_.styl`.

  L'ús de `@import` per importar estils d'altres components està prohibit tant a `_.styl` com a `demo/_.styl` .

  Seguiu els estàndards de codificació i l'estètica del disseny de [./styl.md](./styl.md).

  Els components dependents (i els seus estils) s'importen mitjançant `import "./other components.js"` a `webc/componentname.js`; les dependències per a la demostració s'importen mitjançant `importar "../../other components.js"` a `demo/_.js`.

   Tots els components (inclosos els components d'estil pur) han de tenir un fitxer d'script `nom del component.js`. El `component name.js` dels components d'estil pur només importa el `_.styl` corresponent. Per als components amb lògica JS, seguiu el procés [webc.js.md](./webc.js.md) per desenvolupar-lo.

3. Premeu [demo.md](./demo.md) demostració de desenvolupament del procés

4. Executeu `./test.sh` del directori arrel. Corregiu errors i alarmes, extreu funcions, optimitzeu el codi i eviteu la duplicació i la redundància. Per a les especificacions del codi, consulteu `.agents/doc/code/js.md`

5. Llegiu [dbg.md](./dbg.md) i depureu els components segons el procés

6. Seguiu el procés [i18n.md](./i18n.md) per implementar la internacionalització de components i demostracions i escriure documents

7. Torneu a provar i optimitzeu el codi

8. Obriu un subagent i truqueu a `.agents/skills/js_review/SKILL.md` per revisar i optimitzar el codi.

9. Tornant a depurar