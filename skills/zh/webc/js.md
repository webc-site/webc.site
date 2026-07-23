`src/js` 常用 js 脚本如下

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` 是 `document` 的缩写
  - `newEl` 创建 `dom` 元素。如创建多个元素，用 `newLi` 批量创建
- `import { cE } from "../js/dom.js"` 创建 `c-` 开头自定义元素
- `import { On } from "../js/On.js"` 用于实现事件绑定和解绑
- `import { fTxt } from "../js/fetch.js"` 获取文本