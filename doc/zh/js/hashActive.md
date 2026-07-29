# hashActive.js

基于 URL 锚点和视口滚动的导航链接高亮

## default(link_li, cls)

根据页面滚动位置和 URL 锚点变化自动高亮当前可见区域对应的导航链接

参数:
- `link_li` : 导航链接 DOM 元素列表
- `cls` : 激活状态的 CSS 类名，默认 `"A"`

返回值: 取消所有监听的清理函数
