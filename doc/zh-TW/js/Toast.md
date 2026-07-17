# Toast.js

吐司彈出式訊息提示

## toast(render, timeout)

顯示標準提示彈窗

參數:
- `render` : 渲染函數，用於自訂彈窗內容
  - 參數
    - `el` : 彈跳窗的 DOM 元素
- `timeout` : 自動關閉的延遲秒數，預設 9，為 0 時不自動關閉

傳回值: 彈跳窗的 DOM 元素

## toastErr(render, timeout)

顯示錯誤提示彈跳窗

參數:
- `render` : 渲染函數，用於自訂彈窗內容
  - 參數
    - `el` : 彈跳窗的 DOM 元素
- `timeout` : 自動關閉的延遲秒數，預設 9，為 0 時不自動關閉

傳回值: 錯誤彈跳窗的 DOM 元素