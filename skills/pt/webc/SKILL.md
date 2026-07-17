---
name: webc
---

Acompanhe o processo, faça um plano e desenvolva passo a passo para evitar omissões

1. Execute `./sh/new.js nome do componente do tipo de projeto` e crie uma pasta de componentes no diretório `src`
   O tipo de projeto pode ser `css` (componente de estilo puro), `js` (componente de página da web)
   Coloque a primeira letra do nome do componente em maiúscula

2. Leia as especificações de codificação para `.agents/doc/code` e depois desenvolva.

   Em `_.styl`, primeiro `@import "../component name/_.styl"` para importar dependências. Siga os padrões de codificação e a estética de design de [./styl.md](./styl.md).

   Modifique os estilos de outros componentes e em vez disso importe-os diretamente, use `@import` no início e desative `extend`.

   O estilo usado para demonstração é proibido de ser escrito em `component name/_.styl` e escrito em `demo/_.styl`.

   Para o componente `js`, desenvolva-o de acordo com o processo [webc.js.md](./webc.js.md) (exclua `component name/_.js` para componentes de estilo puro)

3. Pressione [demo.md](./demo.md) demonstração de desenvolvimento de processo

4. Execute `./test.sh` do diretório raiz. Corrija erros e alarmes, extraia funções, otimize código e evite duplicação e redundância. Para especificações de código, consulte `.agents/doc/code/js.md`

5. Leia [dbg.md](./dbg.md) e depure componentes de acordo com o processo

6. Siga o processo [i18n.md](./i18n.md) para implementar a internacionalização de componentes e demonstrações e escrever documentos

7. Teste novamente e otimize o código

8. Abra um subagente e ligue para `.agents/skills/js_review/SKILL.md` para revisar e otimizar o código.

9. Depurando novamente