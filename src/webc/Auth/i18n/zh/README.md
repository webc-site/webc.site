# 认证登录与注册

集成邮箱与手机号注册登录、验证码验证、密码登录及第三方快捷登录。

- 支持邮箱与手机号 Tab 切换
- 浮动标签与液态玻璃质感
- 支持多国区号选择与短信验证码倒计时
- 支持第三方 OAuth 快捷登录及已绑定引导

## 使用演示

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // 返回状态码：1 为验证码注册，2 为密码登录，或返回第三方登录数组 ["google", "apple"]
  return 2;
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("认证成功:", e.detail);
});
</script>
```

## 状态常量

- `0` (`STATE_MAIL`): 邮箱输入
- `1` (`STATE_CODE`): 邮箱验证码注册
- `2` (`STATE_PASSWD`): 邮箱密码登录
- `10` (`STATE_PHONE`): 手机号输入
- `11` (`STATE_SMS_CODE`): 短信验证码验证
- `Array` (`OAUTH_HINT`): 第三方登录引导列表

## 属性与钩子函数

- `step`: 当前状态（数字或数组）
- `mail`: 邮箱
- `phone`: 手机号
- `cc`: 国际区号（默认 86）
- `onMail(mail)`: 邮箱检查回调
- `onSignup(mail, name, password)`: 注册回调
- `onLogin(mail, password)`: 密码登录回调
- `onSmsSend(phone, cc)`: 发送短信验证码回调
- `onSmsVerify(phone, cc, code)`: 验证短信验证码回调
- `onPassport(provider)`: 第三方快捷登录回调
- `onReset(mail)`: 忘记密码重置回调
