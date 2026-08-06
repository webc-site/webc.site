---
name: webc
---

Acompanhe o processo, faça um plano e desenvolva passo a passo para evitar omissões

1. Execute `./sh/new.js nome do componente do tipo de projeto` e crie o componente no diretório `src/webc`
   O tipo de projeto pode ser `css` (componente de estilo puro), `js` (componente de página da web)
   Coloque a primeira letra do nome do componente em maiúscula

2. Leia as especificações de codificação para `.agents/doc/code` e depois desenvolva.

   O estilo do componente está escrito em `_.styl`. O estilo usado para demonstração está escrito em `demo/_.styl`. É proibido escrevê-lo em `nome do componente/_.styl`.

  Usar `@import` para importar estilos de outros componentes é proibido tanto em `_.styl` quanto em `demo/_.styl` .

  Siga os padrões de codificação e a estética de design de [./styl.md](./styl.md).

  Os componentes dependentes (e seus estilos) são importados via `import "./other components.js"` em `webc/componentname.js`; dependências para demonstração são importadas via `import "../../other components.js"` em `demo/_.js`.

   Todos os componentes (incluindo componentes de estilo puro) devem ter um arquivo de script `component name.js`. O `nome do componente.js` dos componentes de estilo puro importa apenas o `_.styl` correspondente. Para componentes com lógica JS, siga o processo [webc.js.md](./webc.js.md) de desenvolvimento.

3. Pressione [demo.md](./demo.md) demonstração de desenvolvimento de processo

4. Execute `./test.sh` do diretório raiz. Corrija erros e alarmes, extraia funções, otimize código e evite duplicação e redundância. Para especificações de código, consulte `.agents/doc/code/js.md`

5. Leia [dbg.md](./dbg.md) e depure componentes de acordo com o processo

6. Siga o processo [i18n.md](./i18n.md) para implementar a internacionalização de componentes e demonstrações e escrever documentos

7. Teste novamente e otimize o código

8. Abra um subagente e ligue para `.agents/skills/js_review/SKILL.md` para revisar e otimizar o código.

9. Depurando novamente