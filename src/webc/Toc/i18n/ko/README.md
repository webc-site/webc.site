# 디렉터리 탐색 구성 요소

- 수직 플렉스 레이아웃
- 디렉터리 데이터를 전달하는 사전 지원
- 마크다운 텍스트를 자동으로 로드하려면 클릭하세요.
- 로딩 상태 표시 Ing 애니메이션

## 데모 사용

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "구성요소 사용"
};
</script>
```

## 인터페이스

### 속성 및 방법

- `toc.li`: `{ key: title }`와 같은 디렉토리 객체 또는 항목 목록을 설정합니다.
- `toc.mdUrl`: 요청 URL 생성 기능 `(key, lang) => url` 또는 접두사 문자열 설정
- `toc.target`: 대상 콘텐츠 노드(예: `c-md`)를 설정하거나 연결하고 `ing` 대기 및 콘텐츠 채우기를 자동으로 처리합니다.
- `toc.load(key)`: 해당 키 로드를 수동으로 트리거합니다.