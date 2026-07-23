`src/js` 常用 js 腳本如下

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` 是 `document` 的縮寫
  - `newEl` 建立 `dom` 元素。如創建多個元素，用 `newLi` 批量創建
- `import { cE } from "../js/dom.js"` 建立 `c-` 開頭自訂元素
- `import { On } from "../js/On.js"` 用於實現事件綁定和解綁
- `import { fTxt } from "../js/fetch.js"` 取得文本