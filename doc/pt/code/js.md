# Especificação de código JS

## estilo de codificação

- Simples, elegante e eficiente, utilizando a mais moderna sintaxe js
- Divida funções excessivamente longas e o design da interface deverá ter baixo acoplamento e alta coesão.
- Use arrays + loops/forEach/map mais e escreva código menos repetitivo
- Não escreva comentários de função em código simples para evitar comentários excessivos. Lógica complexa e necessidades especiais são explicadas em chinês refinado.
- O código repetido é abstraído em funções para reduzir a redundância. Por exemplo, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` pode ser escrito como `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Declaração de variável: Combine várias declarações `const` consecutivas em uma instrução. Em vez de escrever em três linhas, escreva `const a=1, b=2, c=3;`
- Processamento assíncrono: use `await`, proíba o uso de `.then` chamadas em cadeia
- Não gere automaticamente o código de tratamento de exceções, não escreva automaticamente `try...catch` (`try ... catch` é mantido manualmente, `try catch` existente não deve ser excluído)
- Funções puras primeiro: escreva apenas funções puras, nunca classes
- Use funções de seta `const funcName = () => {}` e não use a palavra-chave `function` (exceto geradores); se você puder usar .bind para vincular parâmetros, evite definir funções
- Reutilização de código: preste atenção à reutilização, extraia mais funções pequenas e evite resolutamente um grande número de estruturas de código semelhantes ou copiadas e coladas.
- Acesso a objetos: priorize o uso de atribuição de desestruturação para extrair atributos necessários, evite usar repetidamente pontos internamente para acessar atributos profundos e aninhados e mescle julgamentos de cadeia opcionais repetidos
- Não use objetos para parâmetros de função, não escreva `{a,b,c}`, escreva `a, b, c`; se houver muitos parâmetros opcionais, use [[número de itens de configuração, itens de configuração], [número de itens de configuração, itens de configuração],..] Neste paradigma, os itens de configuração são definidos com constantes numéricas
- Para retornos de vários valores, use array `[a,b,c]` em vez de `{a,b,c}`. Se houver mais de 3 valores de retorno, use constantes numéricas para definir o significado posicional.
- Não há necessidade de uma string para representar o estado, use constantes numéricas para definir o estado
- Nenhum modelo de string (``) é usado, a concatenação de string (+) é usada, exceto para importação (conveniente para análise estática do Vite)
- Para loop, se você precisar de um número de série, use `++i` em vez de `i++`
- Evite`?.` desnecessárias e proíba programação defensiva
- O nome da variável não precisa estar no plural e termina com `_li` para indicar uma lista.

## Convenção de nomenclatura

- A nomenclatura segue o minimalismo. Use nomes curtos, mas significativos, por exemplo: use `rm` em vez de `remove`, `delete`, `del`. Porém, você também deve evitar ir a extremos, por exemplo: não use uma única letra `m` em vez de `map`
- Tente usar apenas verbos na nomeação de funções. Se você puder usar uma palavra para expressá-lo, não use duas palavras. Os substantivos são refletidos nos nomes dos arquivos. Se você precisar adicionar um verbo ao nome do arquivo, coloque o substantivo primeiro e o verbo por último. Por exemplo: `profileSet.js` em vez de `setProfile.js`
- Nome da variável: use o estilo sublinhado (snake_case), por exemplo `user_auth_token`; se a variável for uma função, use o estilo de nomenclatura camel case em minúsculas
- Nome da função: Use camelCase minúsculo (camelCase), por exemplo `userData`
- Parâmetros de função: se for uma função de retorno de chamada, nomeie-a em letras minúsculas, como `onChange`
- As definições de constantes em nível de módulo usam estilo de sublinhado maiúsculo `UPPER_SNAKE_CASE`
- Não escreva `get`, prefixos sem sentido, como: escreva `cookieByHeader` em vez de `getCookie`
- Constantes globais/de nível de módulo: use estilo de sublinhado maiúsculo (UPPER_SNAKE_CASE), por exemplo. `CODE_TO_ID`, `ID_TO_LANG`

## Mecanismo modular

- Importação: A importação funciona com precisão sob demanda, proíbe a importação direta de todo o módulo (evite `import * as x` ou importe objetos grandes)
- Exportar: Desative a exportação de objetos. Exporte funções e variáveis ​​como unidades, como `export const X=1, abc=()=>{};`. Tente combiná-los com const + vírgula para declarar o conteúdo exportado. Se um arquivo tiver apenas uma função, use `export default`
- A menos que você precise chamar a função padrão de exportação internamente, evite declarar constantes primeiro e depois exportá-las no final do arquivo.
- Resolução de caminho: Ao obter o caminho do diretório atual, `import.meta.dirname` deve ser usado

## erro

- Evite erros de string e use const para declarar códigos de erro constantes.
- Se você precisar retornar informações de dados erradas, use [código de erro, mensagem de erro,...] Dessa forma, a mensagem de erro não é uma descrição de texto, mas um valor numérico (como [FILE_OVERSIZE, file_size, max_size])
-

## Tente usar APIs compatíveis com navegador

- Criptografia e descriptografia: forçar o uso da API Web Crypto nativa
- Dados binários: ao lidar com binários, tente usar `Uint8Array` uniformemente