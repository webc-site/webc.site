# md/streamRender.js

Markdown 流式渲染

## default(container, source)

将 Markdown 文本流式渲染到指定 DOM 容器中，支持打字机光标效果及自动滚动

参数:
- `container` : 承载渲染内容的 DOM 容器元素
- `source` : ReadableStream 文本数据源

返回值: 

- `cancel` : 停止渲染与数据流读取的函数
- `setStop` : 设置是否暂停自动滚动的函数
  - 参数
    - `val` : 是否暂停的布尔值
