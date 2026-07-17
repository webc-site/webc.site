# Toast.js

吐司弹窗消息提示

## toast(render, timeout)

显示标准提示弹窗

参数:
- `render` : 渲染函数，用于自定义弹窗内容
  - 参数
    - `el` : 弹窗的 DOM 元素
- `timeout` : 自动关闭的延迟秒数，默认 9，为 0 时不自动关闭

返回值: 弹窗的 DOM 元素

## toastErr(render, timeout)

显示错误提示弹窗

参数:
- `render` : 渲染函数，用于自定义弹窗内容
  - 参数
    - `el` : 弹窗的 DOM 元素
- `timeout` : 自动关闭的延迟秒数，默认 9，为 0 时不自动关闭

返回值: 错误弹窗的 DOM 元素
