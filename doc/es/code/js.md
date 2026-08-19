# especificación del código JS

## estilo de codificación

- Sencillo, elegante y eficiente, utilizando la sintaxis js más moderna.
- Divida funciones demasiado largas y el diseño de la interfaz debe tener un bajo acoplamiento y una alta cohesión.
- Utilice matrices + bucles/forEach/map más y escriba código menos repetitivo
- No escriba comentarios de funciones en código simple para evitar comentarios excesivos. La lógica compleja y las necesidades especiales se explican en un chino refinado.
- El código repetido se abstrae en funciones para reducir la redundancia. Por ejemplo, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` se puede escribir como `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Declaración de variable: combine varias declaraciones `const` consecutivas en una sola declaración. En lugar de escribirlo en tres líneas, escribe `const a=1, b=2, c=3;`
- Procesamiento asincrónico: use `await`, prohíba el uso de `.then` llamadas en cadena
- No genere automáticamente código de manejo de excepciones, no escriba automáticamente `try...catch` (`try ... catch` se mantiene manualmente, `try catch` existente no debe eliminarse)
- Funciones puras primero: escriba solo funciones puras, nunca clases
- Utilice funciones de flecha `const funcName = () => {}` y no utilice la palabra clave `function` (excepto generadores); Si puede usar .bind para vincular parámetros, evite definir funciones
- Reutilización de código: preste atención a la reutilización, extraiga más funciones pequeñas y evite resueltamente una gran cantidad de estructuras de código similares o copiadas y pegadas.
- Acceso a objetos: priorice el uso de la asignación de desestructuración para extraer los atributos requeridos, evite el uso repetido de puntos internamente para acceder a atributos profundos y anidados, y combine juicios de cadena opcionales repetidos
- No utilice objetos para parámetros de función, no escriba `{a,b,c}`, escriba `a, b, c`; si hay muchos parámetros opcionales, use [[número de elementos de configuración, elementos de configuración], [número de elementos de configuración, elementos de configuración],...] En este paradigma, los elementos de configuración se definen con constantes numéricas
- Para devoluciones de valores múltiples, use la matriz `[a,b,c]` en lugar de `{a,b,c}`. Si hay más de 3 valores de retorno, utilice constantes numéricas para definir el significado posicional.
- No es necesario que una cadena represente el estado; utilice constantes numéricas para definir el estado.
- No se utiliza ninguna plantilla de cadena (``), se usa concatenación de cadenas (+), excepto para la importación (conveniente para el análisis estático de Vite)
- Para bucle, si necesita un número de serie, use `++i` en lugar de `i++`
- Evite `?.` innecesario y prohíba la programación defensiva.
- No es necesario que el nombre de la variable sea plural y termina con `_li` para indicar una lista.

## Convención de nomenclatura

- El naming persigue el minimalismo. Utilice nombres cortos pero significativos, por ejemplo: utilice `rm` en lugar de `remove`, `delete`, `del`. Sin embargo, también debes evitar llegar a los extremos, por ejemplo: no utilices una sola letra `m` en lugar de `map`
- Intente utilizar sólo verbos al nombrar funciones. Si puedes usar una palabra para expresarlo, no uses dos palabras. Los sustantivos se reflejan en los nombres de los archivos. Si necesita agregar un verbo al nombre del archivo, coloque el sustantivo primero y el verbo al final. Por ejemplo: `profileSet.js` en lugar de `setProfile.js`
- Nombre de variable: use estilo subrayado (snake_case), por ejemplo `user_auth_token`; si la variable es una función, use el estilo de nomenclatura camello en minúsculas
- Nombre de la función: use camelCase en minúsculas (camelCase), por ejemplo `userData`
- Parámetros de la función: si es una función de devolución de llamada, asígnele el nombre en minúsculas, como `onChange`
- Las definiciones de constantes a nivel de módulo utilizan el estilo de subrayado en mayúsculas `UPPER_SNAKE_CASE`
- No escriba `get`, prefijos sin sentido, como: escriba `cookieByHeader` en lugar de `getCookie`
- Constantes globales/a nivel de módulo: utilice el estilo de subrayado en mayúsculas (UPPER_SNAKE_CASE), p. `CODE_TO_ID`, `ID_TO_LANG`

## Mecanismo modular

- Importar: importe funciones con precisión a pedido, prohíba la importación directa de todo el módulo (evite `import * as x` o importe objetos grandes)
- Exportar: deshabilita la exportación de objetos. Exporte funciones y variables como unidades, como `export const X=1, abc=()=>{};`. Intente combinarlos con una constante + coma para declarar el contenido exportado. Si un archivo tiene solo una función, use `export default`
- A menos que necesite llamar internamente a la función predeterminada de exportación, evite declarar constantes primero y luego exportarlas al final del archivo.
- Resolución de ruta: al obtener la ruta del directorio actual, se debe utilizar `import.meta.dirname`

## error

- Evite errores de cadena y use const para declarar códigos de error constantes.
- Si necesita devolver información de datos incorrecta, use [código de error, mensaje de error,...] De esta manera, el mensaje de error no es una descripción de texto, sino un valor numérico (como [FILE_OVERSIZE, file_size, max_size])
-

## Intente utilizar API compatibles con el navegador

- Cifrado y descifrado: fuerce el uso de la API Web Crypto nativa
- Datos binarios: cuando trabaje con binarios, intente utilizar `Uint8Array` de manera uniforme