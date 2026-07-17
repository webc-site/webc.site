# c-t.js

HTML 국제화

`<c-t>key</c-t>` 태그는 사용자 정의되었으며 `key`는 언어 팩의 키입니다.

## cTranSet(el, genUrl)

`c-t`에 대한 텍스트를 설정합니다.

매개변수:
- `el` : 루트 요소, 전역은 `document`에 전달될 수 있습니다.
- `genUrl` : 언어팩 사전을 구하는 함수
  - 매개변수
    - `code` : 언어 코드
  - 반환 값: 언어 팩 사전 개체 또는 이 개체를 해결하는 Promise