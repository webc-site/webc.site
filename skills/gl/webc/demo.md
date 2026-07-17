# Demostración

Consulte `src/BoxX/demo` e desenvolve unha demostración do compoñente en `src/component name/demo/`

`demo/_.pug`, submodelo de demostración

Só se inclúen etiquetas de compoñentes minimalistas, non se require ningunha páxina completa e está prohibida a importación de estilos e scripts. O cadro inxectarase automaticamente (como `demo/_.styl`, `demo/_.js`).

Non escriba un título (por exemplo, non escriba xxx demo), non escriba o nome do compoñente, non introduza o compoñente, só escriba o estado do caso de uso da demostración (se non hai estado, non escriba ningún título)

O elemento raíz de `_.pug` usa `main.demo.Lg` , que definiu o estilo en `demo/_.styl` e non define o estilo de `main.demo.Lg` en si.

O contenedor do compoñente de visualización debe estar aliñado con `main.demo.Lg` e non debe haber `margin` e `padding` entre eles, porque o propio `main.demo` xa estableceu `padding`, e repetirase poñelo en branco.

`demo/_.styl` Se só hai un compoñente de visualización, o seu contenedor non terá un marco exterior e só establecerá `max-width` (porque o contenedor de presentación engadirá automaticamente un marco exterior). Se hai varios, o recipiente pode estar separado por un marco exterior.

Non escriba `img` en `demo/_.pug`, use `demo/_.styl` para configurar a imaxe de fondo

Se o compoñente ten varios formularios, móstraos en orde (como carga, datos baleiros, datos, erros, etc.), flexibilizar o deseño vertical

`demo/_.styl`: `stylus` estilo da páxina de demostración, siga as especificacións do código e a estética do deseño de [./styl.md](./styl.md)

Non escriba `@import '../_.styl'` para importar o compoñente que se vai demostrar, inxectarase automaticamente

Importa `@import '../../Btn/_.styl'` en `demo/_.styl` e utiliza `.Btn`

`demo/_.js`: chamar ao script, formatear `export default (root) => { ... }`, o parámetro `root` é o host (`document` ou o elemento raíz do contedor de proba de probas)

`D.createElement` está prohibido, use `newEl` mencionado por [./js.md](./js.md)

`js` está prohibido para o seu uso en `c-t` e para a internacionalización `fLang`

Se `../_.js` (`../_.js` é para mostrar o propio compoñente, aínda hai que importar os compoñentes dependentes requiridos por outras demostracións) só é necesario `import` e non se importa ningún contido específico, que se pode omitir (o marco inxectaao automaticamente)

`pug` Non é necesario importar `js` e `styl` , o marco inxectaráos automaticamente