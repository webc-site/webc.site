`src/js` 일반적으로 사용되는 js 스크립트는 다음과 같습니다

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D`은 `document`의 약어입니다.
  - `newEl`은 `dom` 요소를 생성합니다. 여러 요소를 생성하려면 `newLi`를 사용하여 일괄 생성하세요.
- `import { cE } from "../js/dom.js"` `c-`로 시작하는 맞춤 요소 만들기
- `import { On } from "../js/On.js"` 이벤트 바인딩 및 바인딩 해제를 구현하는 데 사용됩니다.
- `import { fTxt } from "../js/fetch.js"` 문자 받기