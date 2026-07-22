
  Para o componente `js`, implemente o componente usando `Light DOM` em `src/webc/componentname.js`.

  Use caminhos relativos para importar outros componentes, como: `import "./component name.js"` (No arquivo JS de cada componente, o `_.styl` correspondente deve ser importado no início, como `import "./component name/_.styl";`).

  `this` Defina apenas a função de callback nativa do componente web, escreva as demais como funções independentes, passe `this` e os parâmetros necessários.

  Além das interfaces expostas externamente, para facilitar a otimização de trepidação e compactação de código, é proibido vincular atributos privados personalizados em `this` (use `this.$` para funções de descarregamento), e funções de ordem superior podem ser usadas para retornar fechamentos para manter variáveis ​​intermediárias.

  Não escreva `constructor`, o atributo é obtido em `connectedCallback`.


  Consulte [./js.md](./js.md) para reutilizar as funções públicas em `src/js/`

  Para contêineres, use `slot` em vez de atributos.
  Se você precisar carregar dados, exponha a interface de carregamento à camada superior na forma de uma função de retorno de chamada assíncrona e use comentários para indicar o formato do valor de retorno.
  Os componentes devem evitar vazamentos de memória. `disconnectedCallback` mescle eventos de desinstalação em uma função `this.$` e não grave múltiplas funções de desinstalação.
  O valor de retorno da interface pode ser um valor único, uma matriz ou uma matriz de matrizes, não um objeto.
  Se o componente tiver vários estados, use comentários de várias linhas para descrever claramente o formato dos dados de cada estado. (Não preceda cada linha de comentários com `*`)
  Troca de estado, usando constantes numéricas (definidas para `const.js`).
  Quando o retorno de chamada estiver sendo carregado, use `const xx = newEl('b');xx.className="Ing"` para exibir a animação e introduza dependências por meio de `import "./Ing.js"` no arquivo JS do componente.