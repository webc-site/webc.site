# Authentication login and registration

Integrate email and mobile phone number registration and login, verification code verification, password login and third-party quick login.

- Support email and mobile phone number input
- Floating labels with liquid glass texture
- Support SMS verification code countdown
- Support third-party OAuth quick login and bound guidance

## Use the demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onSignup = async (mail, name, password, code) => {
  return [0, mail, name, code];
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("Authentication successful:", e.detail);
});
</script>
```

## Status Constant

- `0` (`STATE_MAIL`): Email input
- `1` (`STATE_CODE`): Email verification code registration
- `2` (`STATE_PASSWD`): Email password login
- `10` (`STATE_PHONE`): Enter mobile phone number
- `11` (`STATE_SMS_CODE`): SMS verification code verification
- `Array` (`OAUTH_HINT`): Third-party login guide list

## Properties and hook functions

- `step`: current status (number or array)
- `mail`: Email
- `phone`: mobile phone number
- `onSignup(mail, name, password, code)`: Register callback
- `onResend(mail)`: Resend verification code callback
- `onLogin(mail, password)`: Password login callback
- `onSmsSend(phone)`: Send SMS verification code callback
- `onSmsVerify(phone, code)`: Verification SMS verification code callback
- `onPassport(provider)`: Third-party quick login callback
- `onReset(mail)`: Forgot password reset callback