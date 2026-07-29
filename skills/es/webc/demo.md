# Manifestación

Consulte `src/webc/BoxX/demo` y desarrolle una demostración del componente en `src/webc/component name/demo/`

`demo/_.pug`, subplantilla de demostración

Sólo se incluyen etiquetas de componentes minimalistas, no se requiere una página completa y está prohibida la importación de estilos y scripts. El marco se inyectará automáticamente (como `demo/_.styl`, `demo/_.js`).

No escriba un título (por ejemplo, no escriba xxx demo), no escriba el nombre del componente, no presente el componente, solo escriba el estado del caso de uso de demostración (si no hay estado, no escriba ningún título)

El elemento raíz de `_.pug` usa `main.demo.Lg`, que ha definido el estilo en `demo/_.styl` y no define el estilo de `main.demo.Lg` en sí.

El contenedor del componente de visualización debe estar alineado con `main.demo.Lg`, y no debe haber `margin` y `padding` entre ellos, porque `main.demo` ya ha configurado `padding`, y se repetirá la configuración en blanco.

`demo/_.styl` Si solo hay un componente de visualización, su contenedor no tendrá un marco exterior y solo establecerá `max-width` (porque el contenedor de presentación agregará automáticamente un marco exterior). Si hay varios, el contenedor se puede separar mediante un marco exterior.

No escriba `img` en `demo/_.pug`, use `demo/_.styl` para configurar la imagen de fondo

Si el componente tiene varios formularios, muéstrelos en orden (como carga, datos vacíos, datos, fallidos, etc.), flexione el diseño vertical

`demo/_.styl`: `stylus` estilo de la página de demostración, siga las especificaciones del código y la estética del diseño de [./styl.md](./styl.md)

Si no escribe `@import '../_.styl'` para importar el componente que se va a demostrar, se inyectará automáticamente; está prohibido utilizar `@import` en `demo/_.styl` para importar otros estilos de componentes. Si la demostración depende de otros componentes (como el botón `.Btn`), importe los componentes dependientes a través de `import "../../Btn.js"` en `demo/_.js`.

`demo/_.js`: llame al script, formatee `export default (root) => { ... }`, el parámetro `root` es el host (`document` o el elemento raíz del contenedor sandbox)

`D.createElement` está prohibido, use `newEl` mencionado por [./js.md](./js.md)

`js` está prohibido para su uso en `c-t` y para la internacionalización `fLang`

Si `../component name.js` (`../component name.js` va a mostrar el componente en sí y aún es necesario importar otros componentes dependientes requeridos por la demostración), solo se requiere `import` y no se importa ningún contenido específico, que se puede omitir (el marco lo inyectará automáticamente)

`pug` No es necesario importar `js` y `styl`, el marco los inyectará automáticamente