# md/streamRender.js

Markdown 串流渲染

## default(container, source)

將 Markdown 文字串流渲染到指定 DOM 容器中，支援打字機遊標效果及自動捲動

參數:
- `container` : 承載渲染內容的 DOM 容器元素
- `source` : ReadableStream 文字資料來源

傳回值:

- `cancel` : 停止渲染與資料流讀取的函數
- `setStop` : 設定是否暫停自動捲動的函數
  - 參數
    - `val` : 是否暫停的布林值