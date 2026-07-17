# 自动切换占位符状态的输入框

- 未输入时显示占位符
- 输入内容时占位符平滑缩放并悬浮至上方
- 纯 CSS 实现，无 JavaScript 依赖

## 使用演示

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">电子邮箱</label>
</b>
```

## 结构要求

- 容器：应用 `.Input` 类的元素，承载输入框与标签。
- 输入框：`input` 元素，必须设置 `placeholder=" "` (包含一个空格的占位符) 以触发状态切换。
- 提示标签：`label` 元素，紧邻 `input` 之后。

## 样式类

- `.Input`：基础样式，提供输入框结构和过渡动画。
- `.Lg`：高亮/毛玻璃修饰样式。