# ದೃಢೀಕರಣ ಲಾಗಿನ್ ಮತ್ತು ನೋಂದಣಿ

ಇಮೇಲ್ ಮತ್ತು ಮೊಬೈಲ್ ಫೋನ್ ಸಂಖ್ಯೆ ನೋಂದಣಿ ಮತ್ತು ಲಾಗಿನ್, ಪರಿಶೀಲನೆ ಕೋಡ್ ಪರಿಶೀಲನೆ, ಪಾಸ್‌ವರ್ಡ್ ಲಾಗಿನ್ ಮತ್ತು ಮೂರನೇ ವ್ಯಕ್ತಿಯ ತ್ವರಿತ ಲಾಗಿನ್ ಅನ್ನು ಸಂಯೋಜಿಸಿ.

- ಬೆಂಬಲ ಇಮೇಲ್ ಮತ್ತು ಮೊಬೈಲ್ ಫೋನ್ ಸಂಖ್ಯೆ ಇನ್ಪುಟ್
- ದ್ರವ ಗಾಜಿನ ವಿನ್ಯಾಸದೊಂದಿಗೆ ತೇಲುವ ಲೇಬಲ್‌ಗಳು
- ಬೆಂಬಲ SMS ಪರಿಶೀಲನೆ ಕೋಡ್ ಕೌಂಟ್‌ಡೌನ್
- ಮೂರನೇ ವ್ಯಕ್ತಿಯ OAuth ತ್ವರಿತ ಲಾಗಿನ್ ಮತ್ತು ಬೌಂಡ್ ಮಾರ್ಗದರ್ಶನವನ್ನು ಬೆಂಬಲಿಸಿ

## ಡೆಮೊ ಬಳಸಿ

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
  console.log("ದೃಢೀಕರಣ ಯಶಸ್ವಿಯಾಗಿದೆ:", e.detail);
});
</script>
```

## ಸ್ಥಿತಿ ಸ್ಥಿರ

- `0` (`STATE_MAIL`): ಇಮೇಲ್ ಇನ್‌ಪುಟ್
- `1` (`STATE_CODE`): ಇಮೇಲ್ ಪರಿಶೀಲನೆ ಕೋಡ್ ನೋಂದಣಿ
- `2` (`STATE_PASSWD`): ಇಮೇಲ್ ಪಾಸ್‌ವರ್ಡ್ ಲಾಗಿನ್
- `10` (`STATE_PHONE`): ಮೊಬೈಲ್ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ
- `11` (`STATE_SMS_CODE`): SMS ಪರಿಶೀಲನೆ ಕೋಡ್ ಪರಿಶೀಲನೆ
- `Array` (`OAUTH_HINT`): ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಲಾಗಿನ್ ಮಾರ್ಗದರ್ಶಿ ಪಟ್ಟಿ

## ಗುಣಲಕ್ಷಣಗಳು ಮತ್ತು ಹುಕ್ ಕಾರ್ಯಗಳು

- `step`: ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ (ಸಂಖ್ಯೆ ಅಥವಾ ಶ್ರೇಣಿ)
- `mail`: ಇಮೇಲ್
- `phone`: ಮೊಬೈಲ್ ಫೋನ್ ಸಂಖ್ಯೆ
- `onSignup(mail, name, password, code)`: ಕಾಲ್‌ಬ್ಯಾಕ್ ಅನ್ನು ನೋಂದಾಯಿಸಿ
- `onResend(mail)`: ಪರಿಶೀಲನೆ ಕೋಡ್ ಕಾಲ್‌ಬ್ಯಾಕ್ ಅನ್ನು ಮರುಕಳುಹಿಸಿ
- `onLogin(mail, password)`: ಪಾಸ್‌ವರ್ಡ್ ಲಾಗಿನ್ ಕಾಲ್‌ಬ್ಯಾಕ್
- `onSmsSend(phone)`: SMS ಪರಿಶೀಲನೆ ಕೋಡ್ ಕಾಲ್‌ಬ್ಯಾಕ್ ಕಳುಹಿಸಿ
- `onSmsVerify(phone, code)`: ಪರಿಶೀಲನೆ SMS ಪರಿಶೀಲನೆ ಕೋಡ್ ಕಾಲ್‌ಬ್ಯಾಕ್
- `onPassport(provider)`: ಮೂರನೇ ವ್ಯಕ್ತಿಯ ತ್ವರಿತ ಲಾಗಿನ್ ಕಾಲ್‌ಬ್ಯಾಕ್
- `onReset(mail)`: ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸುವ ಕಾಲ್‌ಬ್ಯಾಕ್ ಅನ್ನು ಮರೆತುಹೋಗಿದೆ