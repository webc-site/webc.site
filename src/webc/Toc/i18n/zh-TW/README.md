# 目錄導航元件

- 垂直 Flex 版面
- 支援字典傳入目錄數據
- 點擊自動加載 Markdown 文本
- 載入狀態顯示 Ing 動畫

## 使用演示

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "使用元件"
};
</script>
```

## 介面

### 屬性與方法

- `toc.li`: 設定目錄物件或條目列表，例如 `{ key: title }`
- `toc.mdUrl`: 設定請求 URL 產生函數 `(key, lang) => url` 或前綴字串
- `toc.target`: 設定或關聯目標內容節點（如 `c-md`），自動處理 `ing` 等待與內容填充
- `toc.load(key)`: 手動觸發對應 key 的加載