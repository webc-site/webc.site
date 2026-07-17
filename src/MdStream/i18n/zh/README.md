# 流式渲染 Markdown 文本

- 增量解析并渲染 Markdown
- 配合滚动父元素，内容超出屏幕时自动滚动
- 点击或向上滚动时暂停自动滚动，向下滚动时恢复
- 自动展示打字状态指示器

## 使用演示

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // 通过返回的异步生成器函数进行流式数据渲染
  el.gen = async function* () {
    yield "# 标题\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      yield "- 第 " + i + " 项\n";
    }
  };
</script>
```

## 属性

| 属性名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `gen` | `Function` | 返回异步迭代器/生成器的函数，设置后清空内容并重新流式渲染 |

## 样式

| 类/标签 | 说明 |
| :--- | :--- |
| `Md` | 挂载时自动给组件添加的类，设置 Markdown 样式 |
| `i.T` | 数据输入过程中，自动在末尾添加的打字状态指示器 |