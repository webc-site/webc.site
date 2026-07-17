---
name: webc
---

Seguiu el procés, feu un pla i desenvolupeu pas a pas per evitar omissions

1. Executeu `./sh/new.js nom de component del tipus de projecte` i creeu una carpeta de components al directori `src`
   El tipus de projecte pot ser `css` (component d'estil pur), `js` (component de pàgina web)
   Posa en majúscula la primera lletra del nom del component

2. Llegiu les especificacions de codificació per a `.agents/doc/code` i, a continuació, desenvolupeu.

   A `_.styl`, primer `@import "../component name/_.styl"` per importar dependències. Si us plau, seguiu els estàndards de codificació i l'estètica del disseny de [./styl.md](./styl.md).

   Modifiqueu els estils d'altres components i en comptes d'importar-los directament, feu servir `@import` al principi i desactiveu `extend`.

   L'estil utilitzat per a la demostració està prohibit escrit en `nom del component/_.styl` i escrit en `demo/_.styl`.

   Per al component `js`, desenvolupeu-lo segons el procés [webc.js.md](./webc.js.md) (suprimiu el `nom del component/_.js` per als components d'estil pur)

3. Premeu [demo.md](./demo.md) demostració de desenvolupament del procés

4. Executeu `./test.sh` del directori arrel. Corregiu errors i alarmes, extreu funcions, optimitzeu el codi i eviteu la duplicació i la redundància. Per a les especificacions del codi, consulteu `.agents/doc/code/js.md`

5. Llegiu [dbg.md](./dbg.md) i depureu els components segons el procés

6. Seguiu el procés [i18n.md](./i18n.md) per implementar la internacionalització de components i demostracions i escriure documents

7. Torneu a provar i optimitzeu el codi

8. Obriu un subagent i truqueu a `.agents/skills/js_review/SKILL.md` per revisar i optimitzar el codi.

9. Tornant a depurar