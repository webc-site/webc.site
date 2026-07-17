# c-t.js

HTML 国际化

自定义了标签 `<c-t>key</c-t>` ，`key` 为语言包的键。

## cTranSet(el, genUrl)

为 `c-t` 设置文本。

参数:
- `el` : 根元素，全局可以传入 `document`
- `genUrl` : 获取语言包字典的函数
  - 参数
    - `code` : 语言代码
  - 返回值 : 语言包字典对象，或解析为该对象的 Promise
