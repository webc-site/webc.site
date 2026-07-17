# 流式渲染 Markdown 文本

- 增量解析並渲染 Markdown
- 配合滾動父元素，內容超出螢幕時自動捲動
- 點擊或向上捲動時暫停自動捲動，向下捲動時恢復
- 自動展示打字狀態指示器

## 使用演示

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // 透過傳回的非同步產生器函數進行串流資料渲染
  el.gen = async function* () {
    yield "# 標題\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      yield "- 第 " + i + " 項\n";
    }
  };
</script>
```

## 屬性

| 屬性名 | 類型 | 說明 |
| :--- | :--- | :--- |
| `gen` | `Function` | 傳回非同步迭代器/生成器的函數，設定後清空內容並重新串流渲染 |

## 樣式

| 類別/標籤 | 說明 |
| :--- | :--- |
| `Md` | 掛載時自動給元件新增的類，設定 Markdown 樣式 |
| `i.T` | 資料輸入過程中，自動在最後新增的打字狀態指示器 |