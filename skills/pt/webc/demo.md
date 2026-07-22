# Demonstração

Consulte `src/webc/BoxX/demo` e desenvolva uma demonstração do componente em `src/webc/component name/demo/`

`demo/_.pug`, submodelo de demonstração

Apenas tags de componentes minimalistas são incluídas, nenhuma página completa é necessária e a importação de estilos e scripts é proibida. A estrutura será injetada automaticamente (como `demo/_.styl`, `demo/_.js`).

Não escreva um título (por exemplo, não escreva xxx demo), não escreva o nome do componente, não introduza o componente, apenas escreva o status do caso de uso de demonstração (se não houver status, não escreva nenhum título)

O elemento raiz de `_.pug` usa `main.demo.Lg` , que definiu o estilo em `demo/_.styl` e não define o estilo de `main.demo.Lg` em si.

O contêiner do componente de exibição deve estar alinhado com `main.demo.Lg`, e não deve haver `margin` e `padding` entre eles, porque o próprio `main.demo` já definiu `padding`, e defini-lo em branco será repetido.

`demo/_.styl` Se houver apenas um componente de exibição, seu contêiner não terá um quadro externo, e apenas definirá `max-width` (porque o contêiner de apresentação adicionará automaticamente um quadro externo). Se houver vários, o contêiner poderá ser separado por uma moldura externa.

Não escreva `img` em `demo/_.pug`, use `demo/_.styl` para definir a imagem de fundo

Se o componente tiver vários formulários, exiba-os em ordem (como carregamento, dados vazios, dados, falhados, etc.), layout vertical flexível

`demo/_.styl`: `stylus` estilo da página de demonstração, siga as especificações do código e a estética do design de [./styl.md](./styl.md)

Se você não escrever `@import '../_.styl'` para importar o componente a ser demonstrado, ele será injetado automaticamente; é proibido usar `@import` em `demo/_.styl` para importar outros estilos de componentes. Se a demonstração depender de outros componentes (como botão `.Btn`), importe os componentes dependentes através de `import "../../Btn.js"` em `demo/_.js`.

`demo/_.js`: Chame o script, formato `export default (root) => { ... }`, parâmetro `root` é o host (`document` ou o elemento raiz do contêiner sandbox)

`D.createElement` é proibido, use `newEl` mencionado por [./js.md](./js.md)

`js` é proibido para uso em `c-t` e para internacionalização `fLang`

Se `../component name.js` (`../component name.js` for exibir o componente em si, e outros componentes dependentes exigidos pela demonstração ainda precisarem ser importados), apenas `import` será necessário e nenhum conteúdo específico será importado, o que pode ser omitido (a estrutura irá injetá-lo automaticamente)

`pug` Não há necessidade de importar `js` e `styl` , o framework irá injetá-los automaticamente