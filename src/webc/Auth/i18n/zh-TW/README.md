# 認證登入與註冊

整合信箱與手機號碼註冊登入、驗證碼驗證、密碼登入及第三方快速登入。

- 支援信箱與手機號碼 Tab 切換
- 浮動標籤與液態玻璃質感
- 支援多國區號選擇與簡訊驗證碼倒數計時
- 支援第三方 OAuth 快捷登入及已綁定引導

## 使用演示

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // 返回狀態碼：1 為驗證碼註冊，2 為密碼登錄，或返回第三方登入數組 ["google", "apple"]
  return 2;
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("認證成功:", e.detail);
});
</script>
```

## 狀態常量

- `0` (`STATE_MAIL`): 信箱輸入
- `1` (`STATE_CODE`): 信箱驗證碼註冊
- `2` (`STATE_PASSWD`): 信箱密碼登入
- `10` (`STATE_PHONE`): 手機號碼輸入
- `11` (`STATE_SMS_CODE`): 簡訊驗證碼驗證
- `Array` (`OAUTH_HINT`): 第三方登入引導列表

## 屬性與鉤子函數

- `step`: 目前狀態（數字或陣列）
- `mail`: 信箱
- `phone`: 手機號
- `cc`: 國際區號（預設 86）
- `onMail(mail)`: 信箱檢查回調
- `onSignup(mail, name, password)`: 註冊回呼
- `onLogin(mail, password)`: 密碼登入回呼
- `onSmsSend(phone, cc)`: 傳簡訊驗證碼回調
- `onSmsVerify(phone, cc, code)`: 驗證簡訊驗證碼回調
- `onPassport(provider)`: 第三方快速登入回呼
- `onReset(mail)`: 忘記密碼重設回調