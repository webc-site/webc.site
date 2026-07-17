# dom.js

文档变量简写和快捷函数

## D

`document` 对象的快捷引用

## B

`document.body` 对象的快捷引用

## newEl

创建 DOM 元素

参数:
- `tagName` : 元素标签名

返回值: 新创建的 DOM 元素

## newLi(...tag_li)

批量创建多个 DOM 元素

参数:
- `tag_li` : 标签名列表

返回值:
- 包含所有新创建 DOM 元素的数组

## cE(name, cls)

注册 Web Components 自定义元素

参数:
- `name` : 自定义元素名称，将自动添加 `c-` 前缀
- `cls` : 自定义元素的类
