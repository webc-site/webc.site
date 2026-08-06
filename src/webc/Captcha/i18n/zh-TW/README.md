# 驗證碼彈出層

基於圖形點選的驗證碼彈窗。

- 結合 BoxX 實現彈跳窗互動與 ESC / 關閉支持
- 基於背景圖點選目標
- 支援步驟點選撤銷與自動重試機制
- 使用
  * 公網：`https://captcha.webc.pub`
  * 私有化部署：[captcha_srv](https://crates.io/crates/captcha_srv)

## 使用演示

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // 驗證通過，將 token 提交給後台
  console.log("驗證透過 Token:", token);
}
```

## 傳回值

呼叫函數回傳 `Promise<string | undefined>`：
- **驗證通過**：傳回 Base64URL 編碼（無填充）的驗證碼 Token 字串。
- **關閉或取消**：返回 `undefined`。

## 驗證流程與後端核銷

1. **觸發驗證**：前端調用 `Captcha()`。
2. **獲取圖表**：`Captcha.js` 向 `captcha_srv` 發起 `GET /` 獲取點選圖片及 ID。
3. **座標校驗**：使用者完成點選後，`Captcha.js` 向 `captcha_srv` 發起 `POST /` 校驗座標。校验成功返回 Base64URL 编码 Token。
4. **後端核銷**：前端提交 Token 至網站後台，後台調用 `captcha_srv` 的 `GET /verify/{token}` 校驗並一次性銷毀 Token。

### 後端核銷說明

網站後台收到前端提交的 `token` 後，需向 `captcha_srv` 服務發起請求：

- **請求介面**：`GET /verify/{token}`
- **路徑參數**：`token`（前端傳回的 Base64URL 字串）
- **回傳結果**：`1` 表示驗證通過且有效（會自動銷毀）；`0` 表示無效或已被核銷。