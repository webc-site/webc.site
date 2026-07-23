# 目录导航组件

- 垂直 Flex 布局
- 支持字典传入目录数据
- 点击自动加载 Markdown 文本
- 加载状态显示 Ing 动画

## 使用演示

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "使用组件"
};
</script>
```

## 接口

### 属性与方法

- `toc.li`: 设置目录对象或条目列表，例如 `{ key: title }`
- `toc.mdUrl`: 设置请求 URL 生成函数 `(key, lang) => url` 或前缀字符串
- `toc.target`: 设置或关联目标内容节点（如 `c-md`），自动处理 `ing` 等待与内容填充
- `toc.load(key)`: 手动触发对应 key 的加载
