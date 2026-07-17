---
name: webc
---

Siga o proceso, faga un plan e desenvólvese paso a paso para evitar omisións

1. Execute `./sh/new.js nome de compoñente do tipo de proxecto` e cree un cartafol de compoñentes no directorio `src`
   O tipo de proxecto pode ser `css` (compoñente de estilo puro), `js` (compoñente de páxina web)
   Escriba en maiúscula a primeira letra do nome do compoñente

2. Le as especificacións de codificación para `.agents/doc/code` e despois desenvolve.

   En `_.styl`, primeiro `@import "../component name/_.styl"` para importar dependencias. Siga os estándares de codificación e a estética do deseño de [./styl.md](./styl.md).

   Modifica os estilos doutros compoñentes e impórtaos directamente, utiliza `@import` ao principio e desactiva `extend`.

   Prohíbese que o estilo usado para a demostración se escriba en `nome de compoñente/_.styl` e en `demo/_.styl`.

   Para o compoñente `js`, desenvólveo segundo o proceso [webc.js.md](./webc.js.md) (elimina o `nome do compoñente/_.js` para os compoñentes de estilo puro)

3. Preme [demo.md](./demo.md) demostración de desenvolvemento do proceso

4. Executar `./test.sh` do directorio raíz. Corrixe erros e alarmas, extrae funcións, optimiza o código e evita a duplicación e redundancia. Para ver as especificacións do código, consulte `.agents/doc/code/js.md`

5. Lea [dbg.md](./dbg.md) e depure os compoñentes segundo o proceso

6. Siga o proceso [i18n.md](./i18n.md) para implementar a internacionalización de compoñentes e demostracións e escriba documentos

7. Proba de novo e optimiza o código

8. Abre un subaxente e chama a `.agents/skills/js_review/SKILL.md` para revisar e optimizar o código.

9. Depurando de novo