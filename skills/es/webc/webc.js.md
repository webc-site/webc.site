
  Para el componente `js`, implemente el componente usando `Light DOM` en `src/webc/componentname.js`.

  Utilice rutas relativas para importar otros componentes, como: `import "./component name.js"` (en el archivo JS de cada componente, se debe importar el `_.styl` correspondiente al principio, como `import "./component name/_.styl";`).

  `this` Defina solo la función de devolución de llamada nativa del componente web, escriba las demás como funciones independientes, pase `this` y los parámetros requeridos.

  Además de las interfaces expuestas externamente, para facilitar la optimización de la vibración de árboles y la compresión de código, está prohibido vincular atributos privados personalizados en `this` (use `this.$` para descargar funciones), y se pueden usar funciones de orden superior para devolver cierres para contener variables intermedias.

  No escribas `constructor`, el atributo se obtiene en `connectedCallback`.


  Consulte [./js.md](./js.md) para reutilizar las funciones públicas en `src/js/`

  Para contenedores, utilice `slot` en lugar de atributos.
  Si necesita cargar datos, exponga la interfaz de carga a la capa superior en forma de una función de devolución de llamada asincrónica y use comentarios para indicar el formato del valor de retorno.
  Los componentes deben evitar pérdidas de memoria. `disconnectedCallback` fusiona eventos de desinstalación en una función `this.$` y no escribe varias funciones de desinstalación.
  El valor de retorno de la interfaz puede ser un valor único, una matriz o una matriz de matrices, no un objeto.
  Si el componente tiene varios estados, utilice comentarios de varias líneas para describir claramente el formato de datos de cada estado. (No preceda cada línea de comentarios con `*`)
  Cambio de estado, utilizando constantes numéricas (definidas como `const.js`).
  Cuando se esté cargando la devolución de llamada, use `const xx = newEl('b');xx.className="Ing"` para mostrar la animación e introduzca dependencias a través de `import "./Ing.js"` en el archivo JS del componente.