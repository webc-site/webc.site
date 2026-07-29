# Demo

Refer to `src/webc/BoxX/demo` and develop a demo of the component in `src/webc/component name/demo/`

`demo/_.pug`, demo subtemplate

Only minimalist component tags are included, no complete page is required, and the import of styles and scripts is prohibited. The framework will automatically inject (such as `demo/_.styl`, `demo/_.js`).

Do not write a title (for example, do not write xxx demo), do not write the component name, do not introduce the component, only write the status of the demo use case (if there is no status, write no title)

The root element of `_.pug` uses `main.demo.Lg` , which has defined the style in `demo/_.styl` and does not define the style of `main.demo.Lg` itself.

The container of the display component should be aligned with `main.demo.Lg`, and there should be no `margin` and `padding` between them, because `main.demo` itself has already set `padding`, and setting it blank will be repeated.

`demo/_.styl` If there is only one display component, its container will not have an outer frame, and only set `max-width` (because the presentation container will automatically add an outer frame). If there are multiple ones, the container can be separated by an outer frame.

Do not write `img` in `demo/_.pug`, use `demo/_.styl` to set the background image

If the component has multiple forms, please display them in order (such as loading, empty data, data, failed, etc.), flex vertical layout

`demo/_.styl`: `stylus` style of the demo page, please follow the code specifications and design aesthetics of [./styl.md](./styl.md)

If you do not write `@import '../_.styl'` to import the component to be demonstrated, it will be automatically injected; it is prohibited to use `@import` in `demo/_.styl` to import other component styles. If the demo depends on other components (such as button `.Btn`), please import the dependent components through `import "../../Btn.js"` in `demo/_.js`.

`demo/_.js`: Call the script, format `export default (root) => { ... }`, parameter `root` is the host (`document` or the root element of the sandbox container)

`D.createElement` is prohibited, use `newEl` mentioned by [./js.md](./js.md)

`js` is prohibited for use in `c-t`, and for internationalization `fLang`

If `../component name.js` (`../component name.js` is to display the component itself, and other dependent components required by the demo still need to be imported), only `import` is required, and no specific content is imported, which can be omitted (the framework will automatically inject it)

`pug` No need to import `js` and `styl` , the framework will automatically inject them