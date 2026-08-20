# සත්‍යාපනය ඇතුළුවීම සහ ලියාපදිංචිය

විද්‍යුත් තැපෑල සහ ජංගම දුරකථන අංක ලියාපදිංචි කිරීම සහ පුරනය වීම, සත්‍යාපන කේත සත්‍යාපනය, මුරපද පුරනය වීම සහ තෙවන පාර්ශවීය ඉක්මන් පුරනය වීම ඒකාබද්ධ කරන්න.

- ඊමේල් සහ ජංගම දුරකථන අංක ආදානය සඳහා සහය වන්න
- දියර වීදුරු වයනය සහිත පාවෙන ලේබල්
- SMS සත්‍යාපන කේත ගණන් කිරීම සඳහා සහය වන්න
- තෙවන පාර්ශ්ව OAuth ඉක්මන් පුරනය සහ බැඳුනු මග පෙන්වීම සඳහා සහය වන්න

## Demo භාවිතා කරන්න

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
  console.log("සත්‍යාපනය සාර්ථකයි:", e.detail);
});
</script>
```

## ස්ථාවර තත්ත්වය

- `0` (`STATE_MAIL`): ඊමේල් ආදානය
- `1` (`STATE_CODE`): විද්‍යුත් තැපෑල සත්‍යාපන කේත ලියාපදිංචිය
- `2` (`STATE_PASSWD`): ඊමේල් මුරපද පිවිසුම
- `10` (`STATE_PHONE`): ජංගම දුරකථන අංකය ඇතුලත් කරන්න
- `11` (`STATE_SMS_CODE`): SMS සත්‍යාපන කේත සත්‍යාපනය
- `Array` (`OAUTH_HINT`): තෙවන පාර්ශවීය පිවිසුම් මාර්ගෝපදේශ ලැයිස්තුව

## ගුණාංග සහ හක්ක කාර්යයන්

- `step`: වත්මන් තත්ත්වය (අංකය හෝ අරාව)
- `mail`: විද්‍යුත් තැපෑල
- `phone`: ජංගම දුරකථන අංකය
- `onSignup(mail, name, password, code)`: ආපසු ඇමතුම ලියාපදිංචි කරන්න
- `onResend(mail)`: සත්‍යාපන කේතය නැවත යවන්න
- `onLogin(mail, password)`: මුරපද පිවිසුම් ආපසු කැඳවීම
- `onSmsSend(phone)`: SMS සත්‍යාපන කේතය නැවත ඇමතුමක් යවන්න
- `onSmsVerify(phone, code)`: සත්‍යාපන SMS සත්‍යාපන කේතය ආපසු කැඳවීම
- `onPassport(provider)`: තෙවන පාර්ශ්ව ඉක්මන් පුරනය ආපසු ඇමතුම
- `onReset(mail)`: මුරපදය යළි පිහිටුවීමේ ආපසු ඇමතුම අමතක විය