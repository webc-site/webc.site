# md/streamRender.js

마크다운 스트리밍 렌더링

## default(container, source)

Markdown 텍스트를 지정된 DOM 컨테이너로 스트리밍 렌더링하여 타자기 커서 효과 및 자동 스크롤을 지원합니다.

매개변수:
- `container` : 렌더링된 콘텐츠를 호스팅하는 DOM 컨테이너 요소
- `source` : ReadableStream 텍스트 데이터 소스

반환 값:

- `cancel` : 렌더링 및 데이터 스트림 읽기를 중지하는 기능
- `setStop` : 자동 스크롤 일시정지 여부를 설정하는 기능
  - 매개변수
    - `val` : 일시중지 여부에 대한 불리언 값