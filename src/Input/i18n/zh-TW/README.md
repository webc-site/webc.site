# 自動切換佔位符狀態的輸入框

- 未輸入時顯示佔位符
- 輸入內容時佔位符平滑縮放並懸浮至上方
- 純 CSS 實現，無 JavaScript 依賴
- 預設帶有毛玻璃背景與懸停過渡

## 使用演示

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">電子郵件信箱</label>
</b>
```

## 結構要求

- 容器：套用 `.Input` 類別的元素，承載輸入框與標籤。
- 輸入框：`input` 元素，必須設定 `placeholder=" "` (包含一個空格的佔位符) 以觸發狀態切換。
- 提示標籤：`label` 元素，緊鄰 `input` 之後。

## 樣式類

- `.Input`：基礎樣式，提供輸入框結構和過渡動畫。
- `.Lg`：高亮/毛玻璃修飾樣式。