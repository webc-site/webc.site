# 演示

参考 `src/webc/BoxX/demo` ，在 `src/webc/组件名/demo/` 开发组件的演示

`demo/_.pug`，演示子模板

仅含极简组件标签，无需完整的页面，禁含样式、脚本的导入。框架会自动注入（比如 `demo/_.styl`、`demo/_.js`）。

不写标题（比如，不写 xxx 演示），不写组件名称，不介绍组件，只写演示用例的状态（如无状态，什么标题都不写）

`_.pug` 的根元素用 `main.demo.Lg` ，它已在 `demo/_.styl` 中定义了样式，不定义 `main.demo.Lg` 本身的样式。

展示组件的容器与 `main.demo.Lg` 要贴合，之间不要有 `margin` 和 `padding`，因为 `main.demo` 本身已经设置了 `padding`，再设置空白就重复了。

`demo/_.styl` 如果展示组件只有一个，它的容器不加外框，只设置 `max-width`（因为演示容器会自动加外框），如果有多个，容器可加外框区隔

不在 `demo/_.pug` 中写 `img`，用 `demo/_.styl` 设置背景图

如组件有多重形态，请依次展示(如加载中、空数据、有数据、失败等)，flex 垂直布局

`demo/_.styl`: 演示页面的 `stylus` 样式，请遵循 [./styl.md](./styl.md) 的代码规范和设计美学

不写 `@import '../_.styl'` 导入待演示组件本身，会自动注入；禁止在 `demo/_.styl` 中使用 `@import` 导入其他组件样式。如 demo 依赖其他组件（如按钮 `.Btn`），请在 `demo/_.js` 中通过 `import "../../Btn.js"` 导入依赖组件。

`demo/_.js`: 调用脚本，格式 `export default (root) => { ... }`，参数 `root` 为宿主 （`document` 或沙盒容器的根元素）

禁止用 `D.createElement`，用 [./js.md](./js.md) 提到的 `newEl`

`js` 中禁止用 `c-t`,国际化为用 `fLang`

若 `../组件名.js` (`../组件名.js` 是展示组件自身 ，其他demo 需要的依赖组件还是要导入) 仅需 `import` ，不导入具体内容，可省略（框架会自动注入）

`pug` 不需要导入 `js` 和 `styl` ，框架会自动注入