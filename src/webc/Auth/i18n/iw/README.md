# אימות כניסה ורישום

שלב רישום וכניסה של דואר אלקטרוני ומספר טלפון נייד, אימות קוד אימות, התחברות לסיסמה וכניסה מהירה של צד שלישי.

- תמיכה בהזנת אימייל ומספר טלפון נייד
- תוויות צפות במרקם זכוכית נוזלית
- תומך בספירה לאחור של קוד אימות SMS
- תמיכה בכניסה מהירה של OAuth ובהנחיה של צד שלישי

## השתמש בהדגמה

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
  console.log("האימות הצליח:", e.detail);
});
</script>
```

## קבוע מצב

- `0` (`STATE_MAIL`): קלט דוא"ל
- `1` (`STATE_CODE`): רישום קוד אימות בדוא"ל
- `2` (`STATE_PASSWD`): התחברות לסיסמת דוא"ל
- `10` (`STATE_PHONE`): הזן מספר טלפון נייד
- `11` (`STATE_SMS_CODE`): אימות קוד אימות SMS
- `Array` (`OAUTH_HINT`): רשימת מדריכי כניסה של צד שלישי

## מאפיינים ופונקציות וו

- `step`: מצב נוכחי (מספר או מערך)
- `mail`: דוא"ל
- `phone`: מספר טלפון נייד
- `onSignup(mail, name, password, code)`: רשום התקשרות חוזרת
- `onResend(mail)`: שלח שוב קוד אימות התקשרות חוזרת
- `onLogin(mail, password)`: התקשרות חזרה עם סיסמה
- `onSmsSend(phone)`: שלח קוד אימות SMS להתקשרות חוזרת
- `onSmsVerify(phone, code)`: קוד אימות אימות SMS התקשרות חזרה
- `onPassport(provider)`: התקשרות מהירה לכניסה מהירה של צד שלישי
- `onReset(mail)`: שכחת איפוס סיסמה התקשרות חוזרת