`src/js` 一般的に使用される js スクリプトは次のとおりです。

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D` は `document` の省略形です。
  - `newEl` `dom` 要素を作成します。複数の要素を作成する場合は、 `newLi` を使用してバッチで作成します。
- `import { cE } from "../js/cE.js"` カスタム要素を作成する
- `import { On } from "../js/On.js"` イベントのバインドとバインド解除を実装するために使用されます