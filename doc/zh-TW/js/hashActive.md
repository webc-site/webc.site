# hashActive.js

基於 URL 錨點和視窗滾動的導航連結高亮

## default(link_li, cls)

根據頁面滾動位置和 URL 錨點變化自動高亮當前可見區域對應的導航鏈接

參數:
- `link_li` : 導航連結 DOM 元素列表
- `cls` : 啟動狀態的 CSS 類別名，預設 `"A"`

傳回值: 取消所有監聽的清理函數