# c-t.js

HTML 國際化

自訂了標籤 `<c-t>key</c-t>` ，`key` 為語言包的鍵。

## cTranSet(el, genUrl)

為 `c-t` 設定文字。

參數:
- `el` : 根元素，全域可以傳入 `document`
- `genUrl` : 取得語言包字典的函數
  - 參數
    - `code` : 語文代碼
  - 傳回值 : 語言包字典對象，或解析為該對象的 Promise