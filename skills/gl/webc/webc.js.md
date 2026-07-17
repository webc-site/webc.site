
  Para o compoñente `js`, use `Light DOM` para implementar o compoñente en `src/component name/_.js`.

  Usa camiños relativos para importar outros compoñentes, como: `importar "../component name/_.js"` (`js` non importa `styl`, o cadro inxectaraao automaticamente).

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
  Mentres se carga a devolución de chamada, mostra a animación con `const xx = newEl('b');xx.className="Ing"` e `@import "../Ing/_.styl"` en `_.styl`