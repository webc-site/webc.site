# dom.js

文檔變數簡寫和快捷函數

## D

`document` 物件的快速引用

## B

`document.body` 物件的快速引用

## css(txt, root)

## newEl

建立 DOM 元素

參數:
- `tagName` : 元素標籤名

傳回值: 新建立的 DOM 元素

## newLi(...tag_li)

批量創建多個 DOM 元素

參數:
- `tag_li` : 標籤名列表

傳回值:
- 包含所有新建立 DOM 元素的數組

## cE(name, cls)

註冊 Web Components 自訂元素

參數:
- `name` : 自訂元素名稱，將自動新增 `c-` 前綴
- `cls` : 自訂元素的類