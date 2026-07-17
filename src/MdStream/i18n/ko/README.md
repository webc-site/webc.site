# Markdown 텍스트의 스트리밍 렌더링

- Markdown을 점진적으로 구문 분석하고 렌더링합니다.
- 콘텐츠가 화면을 초과하면 자동으로 스크롤되도록 스크롤되는 상위 요소와 협력합니다.
- 클릭하거나 위로 스크롤할 때 자동 스크롤을 일시 중지하고, 아래로 스크롤할 때 다시 시작
- 입력 상태 표시기를 자동으로 표시합니다.

## 데모 사용

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // 반환된 비동기 생성기 함수를 통해 스트리밍 데이터 렌더링
  el.gen = async function* () {
    "# 제목\n"을 산출합니다;
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      yield "- 제 " + i + " 항\n";
    }
  };
</script>
```

## 재산

| 속성 이름 | 유형 | 설명하다 |
| :--- | :--- | :--- |
| `gen` | `Function` | 비동기 반복자/생성자를 반환하고 콘텐츠를 지우고 설정 후 다시 렌더링하는 함수 |

## 스타일

| 클래스/태그 | 설명하다 |
| :--- | :--- |
| `Md` | 마운트 시 컴포넌트에 자동으로 추가되는 클래스, 마크다운 스타일 설정 |
| `i.T` | 데이터 입력 중 마지막에 입력 상태 표시가 자동으로 추가됨 |