# WebC.site

## 这是什么？

### 这是原生网页组件库

基于[web components](https://developer.mozilla.org/docs/Web/API/Web_components) 开发，运行时无关，适用于所有框架。

尺寸极致优化（是同类流行库的十分之一）。

支持 75 种语言。可以直接导入 js 和 css 在线使用，亦可按需添加组件到你的项目，二次开发。

### 这是组件库开发框架

这是静态博客版的[storybook](https://storybook.js.org)。

构建组件库，能提高公司内部开发效率，更能建立技术圈的品牌形象。

基于[webc.site](https://github.com/webc-site/webc.site)，团队可轻松创建自己的组件库，发布到[github page](https://pages.github.com) 、[cloudflare page](https://pages.cloudflare.com) 等。发布后的组件能在 [codepen.io](https://codepen.io) 、 [jsfiddle](https://jsfiddle.net) 上在线调试。

同时，内置的翻译框架，快速实现组件、文档的国际化，让您的产品受众不再被语言束缚。

### 这是面向人工智能时代的前端开发新范式

框架内置 `.agents/skills`， 让人工智能按最佳实践，帮您一键开发新组件。

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

让前端代码，从氛围编程不可持续的屎山，变为可长期维护、迭代演进的标准件。

针对人工智能辅助开发的特点，我们提出设计了前端开发新范式：

1. **一切都是网页组件**
2. **组件要独立于后端数据链路，数据接口暴露为回调函数**

如此，人工智能就可以在演示页面，生成假数据，展示组件的不同状态。

组件开发和数据接口分离，再配合 [webc.site 组件框架](https://github.com/webc-site/webc.site) 另一个重大特性：

**每个组件，能独立启动开发服务器，在演示页面开发调试**。

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

这就让每个组件开发调试的前置链路降到了 `0`。

这样，人工智能辅助开发工具（[Claude Code](https://code.claude.com)、[OpenAI Codex](https://openai.com)、[Google Antigravity](https://antigravity.google)、[Cursor](https://cursor.com)、[Windsurf](https://windsurf.com)、[Devin](https://devin.ai)、[OpenHands](https://github.com/All-Hands-AI/OpenHands) 等等），就能尽情的全自动开发、打开浏览器调试，不再被各种乱七八糟的因素(后端数据、登录状态、路径路由等等)阻塞。

想要驾驭人工智能、降本增效，就需要这样让每个组件的开发调试环境最小化的的新范式。

---

# 以下还没开始写 TODO

### 网页组件库

#### 极致的尺寸优化

如虚拟滚动条组件，对比流行的[OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) 脚本和样式在 `gz` 后的大小，如下表:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

`webc.site` 的虚拟滚动条组件，体积只有 `OverlayScrollbars` 的 `10%`。

#### 运行时无关

基于标准的 [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components) 构建，使得 webc.site 组件库具有天然的运行时无关特性。无论使用的是 React、Vue、Angular、Svelte，还是传统的纯 HTML/JS 项目，所有组件都可以像原生 HTML 标签一样直接在浏览器中运行，无需针对特定框架进行二次封装。

##### 与 shadcn 的对比

[shadcn/ui](https://ui.shadcn.com) 采用代码分发模式，需要将组件代码直接复制到自己的项目中，与 React 生态及特定的构建工具链（如 Tailwind CSS）紧密绑定，无法跨框架使用，且对项目工程配置有一定要求。

而 `webc.site` 的组件：
- **跨框架通用**：一次编写，可在任何前端框架（甚至无框架环境）中直接引入并运行。
- **环境零依赖**：不需要特定的打包工具或 CSS 预处理器，只需导入编译好的静态文件即可开箱即用。

## 自动化开发、调试

### 本地开发与调试

每个网页组件均支持独立启动开发服务器，提供了最小化的开发与调试环境：

- **创建新组件**：通过运行 `./sh/new.js [css|js] [组件名]` 快速生成组件开发骨架（含演示页面和国际化配置）。
- **独立调试**：运行 `./dev.js [组件名]`（或直接运行 `./dev.js`）即可启动 Vite 开发服务器，并在浏览器中自动打开该组件的演示页面。支持组件热更新（HMR）。因为开发与数据链路解耦，开发前置链路为零，非常适合 AI（如 Claude Code、Google Antigravity 等）辅助进行全自动开发与浏览器调试。

### 发布组件库

#### webc dist

打包与发布流程已高度自动化：
- **静态资源打包**：运行 `./sh/dist.js`（即执行 `webc dist` 任务）可自动扫描 `src/` 下的所有网页组件，将其编译、压缩并输出到 `dist/` 目录。该目录包含了用于生产分发的 JS/CSS 文件、可用于部署至 GitHub Pages 或 Cloudflare Pages 的演示站点，以及自动生成的 `_redirects` 和 `404.html` 路由文件。
- **NPM 发布**：运行 `./sh/npmDist.js`，该脚本会自动处理组件依赖、递增包版本号，完成打包后一键执行 `npm publish` 将组件库发布到 NPM。

### 平台负责翻译

框架内置了自动化翻译流程：
1. 在项目根目录的 `tran.yml` 中配置翻译规则（如源语言、目标语言及待翻译的目录）。
2. 在组件或文档中使用占位符，无需在代码中硬编码多种语言。
3. 运行 `./sh/tran.js`，翻译引擎会自动提取文本并调用 WebC 翻译服务进行处理，自动生成各语种的 YAML 翻译词条和 README 说明文档。

### 环境变量

在执行自动化翻译时，需要配置以下环境变量来授权访问翻译 API：

- **`WEBC_SITE_TOKEN`**（或 **`WEBC_TOKEN`**）：用于访问 `webc.site` 自动化翻译 API 的身份验证密钥。可作为环境变量注入，或在本地用户主目录的 `~/.config/webc.site.yml` 配置文件中写入 `token`。