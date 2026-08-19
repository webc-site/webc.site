# Autentifikatsiya login va ro'yxatdan o'tish

Elektron pochta va mobil telefon raqamlarini ro'yxatdan o'tkazish va kirish, tasdiqlash kodini tekshirish, parolga kirish va uchinchi tomon tezkor kirishni birlashtiring.

- Elektron pochta manzili va mobil telefon raqami o'rtasida yorliq almashishni qo'llab-quvvatlaydi
- Suyuq shisha teksturali suzuvchi teglar
- Ko'p mamlakat hududi kodini tanlash va SMS tasdiqlash kodini ortga hisoblashni qo'llab-quvvatlaydi
- Uchinchi tomon OAuth tez kirish va bog'langan ko'rsatmalarni qo'llab-quvvatlang

## Ko‘rsatma ishlatish

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Qaytish holati kodi: tasdiqlash kodini ro'yxatdan o'tkazish uchun 1, parolga kirish uchun 2 yoki uchinchi tomon kirish massivini qaytarish ["google", "apple"]
  return 2;
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("Autentifikatsiya muvaffaqiyatli o'tdi:", e.detail);
});
</script>
```

## doimiy holat

- `0` (`STATE_MAIL`): Elektron pochta kiritish
- `1` (`STATE_CODE`): E-pochta orqali tasdiqlash kodi
- `2` (`STATE_PASSWD`): Elektron pochta paroli bilan kirish
- `10` (`STATE_PHONE`): Mobil telefon raqamini kiriting
- `11` (`STATE_SMS_CODE`): SMS tasdiqlash kodini tekshirish
- `Array` (`OAUTH_HINT`): Uchinchi tomon kirish bo'yicha qo'llanmalar ro'yxati

## Xususiyatlar va ilgak funksiyalari

- `step`: joriy holat (raqam yoki massiv)
- `mail`: Elektron pochta
- `phone`: mobil telefon raqami
- `cc`: xalqaro telefon kodi (standart 86)
- `onMail(mail)`: E-pochta orqali qayta qo'ng'iroq qilish
- `onSignup(mail, name, password)`: Qayta qo'ng'iroqni ro'yxatdan o'tkazing
- `onLogin(mail, password)`: Parol bilan qayta qo'ng'iroq qilish
- `onSmsSend(phone, cc)`: SMS tasdiqlash kodini qayta qo'ng'iroq qilish
- `onSmsVerify(phone, cc, code)`: Tekshirish SMS tasdiqlash kodi qayta qo'ng'iroq
- `onPassport(provider)`: Uchinchi tomon tez kirish qo'ng'iroqlari
- `onReset(mail)`: Parolni tiklashni unutdingizmi, qayta qo'ng'iroq qiling