---
name: webc
---

按流程，制定计划，一步一步开发，避免遗漏

1. 运行 `./sh/new.js 项目类型 组件名` ，在 `src` 目录下面，创建组件文件夹
   项目类型 可以是 `css`（纯样式组件）、`js`(网页组件)
   组件名的首字母大写

2. 阅读 `.agents/doc/code` 的代码规范，然后开发。

   件在  `_.styl` 中先 `@import "../组件名/_.styl"`，导入依赖。请遵循 [./styl.md](./styl.md) 的代码规范和设计美学。

   修改其他组件的样式，而是直接导入，在开头用`@import`，禁用 `extend`。

   演示的用的样式，禁止写在`组件名/_.styl`，写到 `demo/_.styl`。

   于 `js` 组件，按 [webc.js.md](./webc.js.md) 流程开发（纯样式组件请删除`组件名/_.js`）

3. 按 [demo.md](./demo.md) 流程开发演示

4. 运行根目录的 `./test.sh`。 修复错误和报警，抽取函数，优化代码，避免重复冗余，代码规范见 `.agents/doc/code/js.md`

5. 读 [dbg.md](./dbg.md)，按流程调试组件

6. 按 [i18n.md](./i18n.md) 流程实现组件及演示的国际化，写文档

7. 再次测试，优化代码

8. 开子代理，调用 `.agents/skills/js_review/SKILL.md` ，对代码审查、优化

9. 再次调试