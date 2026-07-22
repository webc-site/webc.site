
  Para o compoñente `js`, implementa o compoñente mediante `Light DOM` en `src/webc/componentname.js`.

  Use rutas relativas para importar outros compoñentes, como: `import "./component name.js"` (No ficheiro JS de cada compoñente, debe importarse o `_.styl` correspondente ao principio, como `import "./component name/_.styl";`).

  `this` Defina só a función de devolución de chamada nativa do compoñente web, escriba as outras como funcións independentes, pase `this` e os parámetros necesarios.

  Ademais das interfaces expostas externamente, para facilitar a optimización da árbore e a compresión de código, está prohibido vincular atributos privados personalizados en `this` (use `this.$` para descargar funcións) e pódense usar funcións de orde superior para devolver peches para manter variables intermedias.

  Non escriba `constructor`, o atributo obtense en `connectedCallback`.


  Consulte [./js.md](./js.md) para reutilizar as funcións públicas en `src/js/`

  Para os contedores, utiliza `slot` en lugar de atributos.
  Se precisa cargar datos, expoña a interface de carga á capa superior en forma dunha función de devolución de chamada asíncrona e use comentarios para indicar o formato do valor de retorno.
  Os compoñentes deben evitar fugas de memoria. `disconnectedCallback` combine eventos de desinstalación nunha soa función `this.$` e non escriba varias funcións de desinstalación.
  O valor de retorno da interface pode ser un único valor, unha matriz ou unha matriz de matrices, non un obxecto.
  Se o compoñente ten varios estados, use comentarios de varias liñas para describir claramente o formato de datos de cada estado. (Non antepase cada liña de comentarios con `*`)
  Cambio de estado mediante constantes numéricas (definidas como `const.js`).
  Cando se cargue a devolución de chamada, use `const xx = newEl('b');xx.className="Ing"` para mostrar a animación e introduza dependencias a través de `import "./Ing.js"` no ficheiro JS do compoñente.