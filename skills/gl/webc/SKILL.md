---
name: webc
---

Siga o proceso, faga un plan e desenvólvese paso a paso para evitar omisións

1. Execute `./sh/new.js nome do compoñente do tipo de proxecto` e cree o compoñente no directorio `src/webc`
   O tipo de proxecto pode ser `css` (compoñente de estilo puro), `js` (compoñente de páxina web)
   Escriba en maiúscula a primeira letra do nome do compoñente

2. Le as especificacións de codificación para `.agents/doc/code` e despois desenvolve.

   O estilo do compoñente está escrito en `_.styl`. O estilo usado para a demostración está escrito en `demo/_.styl`. Está prohibido escribilo en `nome de compoñente/_.styl`.

  Usar `@import` para importar estilos doutros compoñentes está prohibido tanto en `_.styl` como en `demo/_.styl` .

  Siga os estándares de codificación e a estética do deseño de [./styl.md](./styl.md).

  Os compoñentes dependentes (e os seus estilos) impórtanse mediante `import "./other components.js"` en `webc/componentname.js`; as dependencias para a demostración impórtanse mediante `importar "../../other components.js"` en `demo/_.js`.

   Todos os compoñentes (incluídos os compoñentes de estilo puro) deben ter un ficheiro de script `nome de compoñente.js`. O `nome de compoñente.js` dos compoñentes de estilo puro só importa o `_.styl` correspondente. Para os compoñentes con lóxica JS, siga o proceso [webc.js.md](./webc.js.md) para desenvolver.

3. Preme [demo.md](./demo.md) demostración de desenvolvemento do proceso

4. Executar `./test.sh` do directorio raíz. Corrixe erros e alarmas, extrae funcións, optimiza o código e evita a duplicación e redundancia. Para ver as especificacións do código, consulte `.agents/doc/code/js.md`

5. Lea [dbg.md](./dbg.md) e depure os compoñentes segundo o proceso

6. Siga o proceso [i18n.md](./i18n.md) para implementar a internacionalización de compoñentes e demostracións e escriba documentos

7. Proba de novo e optimiza o código

8. Abre un subaxente e chama a `.agents/skills/js_review/SKILL.md` para revisar e optimizar o código.

9. Depurando de novo