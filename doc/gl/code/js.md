# Especificación do código JS

## estilo de codificación

- Simple, elegante e eficiente, utilizando a sintaxe js máis moderna
- Divide funcións demasiado longas e o deseño da interface debe ser de baixo acoplamento e alta cohesión.
- Use arrays + loops/forEach/map máis e escriba código menos repetitivo
- Non escriba comentarios de función en código sinxelo para evitar comentarios excesivos. A lóxica complexa e as necesidades especiais explícanse en chinés refinado.
- O código repetido abstrúese en funcións para reducir a redundancia. Por exemplo, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` pódese escribir como `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Declaración de variables: combine varias declaracións consecutivas `const` nunha única declaración. En lugar de escribilo en tres liñas, escribe `const a=1, b=2, c=3;`
- Procesamento asíncrono: use `await`, prohíba o uso de `.then` chamadas en cadea
- Non xere automaticamente código de manexo de excepcións, non escriba automaticamente `try...catch` (`try ... catch` mantense manualmente, o `try catch` existente non debe eliminarse)
- Primeiro as funcións puras: só escribe funcións puras, nunca clases
- Use funcións de frecha `const funcName = () => {}` e non use a palabra clave `function` (excepto xeradores); se pode usar .bind para ligar parámetros, evite definir funcións
- Reutilización de código: presta atención á reutilización, extrae máis funcións pequenas e evita con decisión un gran número de estruturas de código similares ou copiadas.
- Acceso a obxectos: prioriza o uso da asignación de desestruturación para extraer os atributos necesarios, evita o uso repetido de puntos internamente para acceder a atributos profundos e aniñados e fusiona xuízos de cadea opcionais repetidos
- Non use obxectos para parámetros de función, non escriba `{a,b,c}`, escriba `a, b, c`; se hai moitos parámetros opcionais, use [[número de elementos de configuración, elementos de configuración], [número de elementos de configuración, elementos de configuración],..] Neste paradigma, os elementos de configuración defínense con constantes numéricas
- Para devolucións de varios valores, use a matriz `[a,b,c]` en lugar de `{a,b,c}`. Se hai máis de 3 valores de retorno, use constantes numéricas para definir o significado posicional.
- Non hai necesidade dunha cadea para representar o estado, use constantes numéricas para definir o estado
- Non se utiliza ningún modelo de cadea (``), utilízase a concatenación de cadeas (+), excepto para a importación (conveniente para a análise estática de Vite)
- Para o bucle, se precisas un número de serie, utiliza `++i` en lugar de `i++`
- Evita`?.` innecesarias e prohíbe a programación defensiva
- O nome da variable non precisa ser plural e remata con `_li` para indicar unha lista.

## Convención de nomenclatura

- A denominación persegue o minimalismo. Use nomes curtos pero significativos, por exemplo: use `rm` en lugar de `remove`, `delete`, `del`. Non obstante, tamén debes evitar ir a extremos, por exemplo: non uses unha soa letra `m` en lugar de `map`
- Intente usar só verbos na denominación de funcións. Se pode usar unha palabra para expresalo, non use dúas palabras. Os substantivos reflíctense nos nomes dos ficheiros. Se precisas engadir un verbo ao nome do ficheiro, pon o substantivo primeiro e o verbo por último. Por exemplo: `profileSet.js` en lugar de `setProfile.js`
- Nome da variable: use o estilo de subliñado (snake_case), por exemplo `user_auth_token`; se a variable é unha función, use o estilo de nomeamento en minúsculas
- Nome da función: use minúsculas camelCase (camelCase), por exemplo `userData`
- Parámetros da función: se é unha función de devolución de chamada, nomeaa en minúsculas, como `onChange`
- As definicións de constantes a nivel de módulo usan o estilo de subliñado en maiúscula `UPPER_SNAKE_CASE`
- Non escriba `get`, prefixos sen significado, como: escriba `cookieByHeader` en lugar de `getCookie`
- Constantes globais/de nivel de módulo: use o estilo de subliñado en maiúsculas (UPPER_SNAKE_CASE), por exemplo. `CODE_TO_ID`, `ID_TO_LANG`

## Mecanismo modular

- Importar: importa funcións con precisión baixo demanda, prohíbese a importación directa de todo o módulo (evite `import * as x` ou importe obxectos grandes)
- Exportar: desactiva a exportación de obxectos. Exporta funcións e variables como unidades, como `export const X=1, abc=()=>{};`. Tenta combinalos cunha const + coma para declarar o contido exportado. Se un ficheiro só ten unha función, use `export default`
- A menos que necesites chamar internamente á función predeterminada de exportación, evita declarar constantes primeiro e despois exportalas ao final do ficheiro.
- Resolución da ruta: ao obter a ruta do directorio actual, debe utilizarse `import.meta.dirname`

## erro

- Evite os erros de cadea e use const para declarar códigos de erro constantes.
- Se precisa devolver información de datos incorrecta, use [código de erro, mensaxe de erro,...] Deste xeito, a mensaxe de erro non é unha descrición de texto, senón un valor numérico (como [FILE_OVERSIZE, file_size, max_size])
-

## Tenta utilizar API compatibles co navegador

- Cifrado e descifrado: forza o uso da API Web Crypto nativa
- Datos binarios: cando trates con binarios, intenta usar `Uint8Array` uniformemente