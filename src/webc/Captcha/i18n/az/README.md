# Doğrulama kodu popup təbəqəsi

Qrafik klikləməyə əsaslanan doğrulama kodu pop-up pəncərəsi.

- Pop-up pəncərə qarşılıqlı əlaqə və ESC/bağlama dəstəyi həyata keçirmək üçün BoxX ilə birlikdə
- Arxa fon şəklinə əsasən hədəfə klikləyin
- Addımlı klik ləğvi və avtomatik yenidən cəhd mexanizmini dəstəkləyir
- istifadə edin
  * İctimai şəbəkə:`https://captcha.webc.pub`
  * Şəxsi yerləşdirmə: [captcha_srv](https://crates.io/crates/captcha_srv)

## Demodan istifadə edin

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Yoxlamadan sonra tokeni backend-ə təqdim edin
  console.log("Doğrulama Token keçdi:", token);
}
```

## qaytarılan dəyər

Funksiyaya zəng `Promise<string | undefined>` qaytarır:
- **Doğrulamadan Keçildi**: Base64URL kodlu (doldurulmayan) doğrulama kodu Token sətirini qaytarır.
- **Bağlayın və ya Ləğv edin**: `undefined` səhifəsinə qayıdın.

## Doğrulama prosesi və arxa uçun silinməsi

1. **Tiqqerin doğrulanması**: Frontend zəngləri `Captcha()`.
2. **Qrafik əldə edin**: `Captcha.js` Kliklənmiş şəkil və ID əldə etmək üçün `GET /` - `captcha_srv` işə salın.
3. **Koordinatın yoxlanılması**: İstifadəçi klikləməni tamamladıqdan sonra, `Captcha.js` koordinatları yoxlamaq üçün `POST /` - `captcha_srv`-ni işə salır. Doğrulama uğurlu olarsa, Base64URL kodlu Token qaytarılacaq.
4. **Back-end yoxlanışı**: Front-end Tokeni vebsaytın backendinə təqdim edir və backend Tokeni bir anda yoxlamaq və məhv etmək üçün `captcha_srv` və `GET /verify/{token}` çağırır.

### Arxa uçdan silinmə təlimatları

Veb saytın arxa hissəsi front-end tərəfindən təqdim edilən `token`-i qəbul etdikdən sonra o, `captcha_srv` xidmətinə sorğu başlatmalıdır:

- **Tələb interfeysi**:`GET /verify/{token}`
- **Yol parametri**: `token` (Base64URL sətri ön tərəf tərəfindən qaytarılır)
- **Qayıdış nəticəsi**: `1` yoxlamanın keçdiyini və etibarlı olduğunu bildirir (avtomatik olaraq məhv ediləcək); `0` etibarsız və ya silinmiş deməkdir.