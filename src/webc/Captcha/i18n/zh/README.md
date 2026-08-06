# 验证码弹出层

基于图形点选的验证码弹窗。

- 结合 BoxX 实现弹窗交互与 ESC / 关闭支持
- 基于背景图点选目标
- 支持步骤点选撤销与自动重试机制
- 使用
  * 公网：`https://captcha.webc.pub`
  * 私有化部署：[captcha_srv](https://crates.io/crates/captcha_srv)

## 使用演示

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // 验证通过，将 token 提交给后台
  console.log("验证通过 Token:", token);
}
```

## 返回值

调用函数返回 `Promise<string | undefined>`：
- **验证通过**：返回 Base64URL 编码（无填充）的验证码 Token 字符串。
- **关闭或取消**：返回 `undefined`。

## 验证流程与后端核销

1. **触发验证**：前端调用 `Captcha()`。
2. **获取图表**：`Captcha.js` 向 `captcha_srv` 发起 `GET /` 获取点选图片及 ID。
3. **坐标校验**：用户完成点选后，`Captcha.js` 向 `captcha_srv` 发起 `POST /` 校验坐标。校验成功返回 Base64URL 编码 Token。
4. **后端核销**：前端提交 Token 至网站后台，后台调用 `captcha_srv` 的 `GET /verify/{token}` 校验并一次性销毁 Token。

### 后端核销说明

网站后台收到前端提交的 `token` 后，需向 `captcha_srv` 服务发起请求：

- **请求接口**：`GET /verify/{token}`
- **路径参数**：`token`（前端返回的 Base64URL 字符串）
- **返回结果**：`1` 表示验证通过且有效（会自动销毁）；`0` 表示无效或已被核销。