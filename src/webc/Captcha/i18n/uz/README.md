# Tasdiqlash kodi qalqib chiquvchi qavat

Grafik bosishga asoslangan tasdiq kodi qalqib chiquvchi oyna.

- Qalqib chiquvchi oyna o'zaro ta'sirini va ESC/yopish qo'llab-quvvatlashini amalga oshirish uchun BoxX bilan birlashtirilgan
- Fon rasmi asosida nishonni bosing
- Bosqichni bosishni bekor qilish va avtomatik qayta urinish mexanizmini qo'llab-quvvatlaydi
- foydalanish
  * Umumiy tarmoq:`https://captcha.webc.pub`
  * Shaxsiy joylashtirish: [captcha_srv](https://crates.io/crates/captcha_srv)

## Ko‘rsatma ishlatish

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Tekshiruvdan so'ng tokenni backendga yuboring
  console.log("Tasdiqdan o'tgan Token:", token);
}
```

## qaytariladigan qiymat

Funktsiyani chaqirish `Promise<string | undefined>`ni qaytaradi:
- **Tasdiqlashdan o‘tdi**: Base64URL kodlangan (to‘ldirishsiz) tasdiqlash kodi token qatorini qaytaradi.
- **Yopish yoki Bekor qilish**: `undefined` ga qaytish.

## Tasdiqlash jarayoni va orqa tarafdan hisobdan chiqarish

1. **Triggerni tekshirish**: Frontend chaqiruvlari `Captcha()`.
2. **Chet diagrammasi**: `Captcha.js` Bosilgan rasm va identifikatorni olish uchun `GET /` - `captcha_srv` ni ishga tushiring.
3. **Koordinatalarni tekshirish**: Foydalanuvchi bosishni tugatgandan so'ng, `Captcha.js` koordinatalarni tekshirish uchun `POST /` - `captcha_srv` ni boshlaydi. Agar tekshirish muvaffaqiyatli bo'lsa, Base64URL kodlangan token qaytariladi.
4. **Back-end tekshiruvi**: front-end tokenni veb-sayt backendiga yuboradi va backend tokenni bir vaqtning o'zida tekshirish va yo'q qilish uchun `captcha_srv` va `GET /verify/{token}` ni chaqiradi.

### Hisobdan chiqarish bo'yicha ko'rsatmalar

Veb-sayt backend front-end tomonidan yuborilgan `token`ni olgandan so'ng, u `captcha_srv` xizmatiga so'rov yuborishi kerak:

- **So‘rov interfeysi**:`GET /verify/{token}`
- **Yo‘l parametri**: `token` (Base64URL qatori old tomondan qaytarilgan)
- **Qaytish natijasi**: `1` tekshiruvdan o‘tganligini va haqiqiyligini bildiradi (avtomatik ravishda yo‘q qilinadi); `0` haqiqiy emas yoki hisobdan chiqarilgan degan ma'noni anglatadi.