# Doğrulama kodu açılır katmanı

Grafik tıklamasına dayalı doğrulama kodu açılır penceresi.

- Açılır pencere etkileşimi ve ESC/kapatma desteğini uygulamak için BoxX ile birleştirilmiştir
- Arka plan resmine göre hedefi tıklayın
- Adım tıklama geri alma ve otomatik yeniden deneme mekanizmasını destekler
- kullanmak
  * Genel ağ:`https://captcha.webc.pub`
  * Özel dağıtım: [captcha_srv](https://crates.io/crates/captcha_srv)

## Demoyu kullanın

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Doğrulamanın ardından jetonu arka uca gönderin
  console.log("Doğrulama geçti Belirteç:", belirteç);
}
```

## dönüş değeri

İşlev çağrıldığında `Promise<string | undefined>` değeri döndürülür:
- **Doğrulama Başarılı Oldu**: Base64URL kodlu (dolgusuz) doğrulama kodu Token dizesini döndürür.
- **Kapat veya İptal**: `undefined`'ye dönün.

## Doğrulama süreci ve arka uç iptali

1. **Tetikleyici doğrulama**: Ön uç çağrıları `Captcha()`.
2. **Grafiği al**: `Captcha.js` Tıklanan resmi ve kimliği almak için `GET /` ile `captcha_srv` işlemini başlatın.
3. **Koordinat doğrulama**: Kullanıcı tıklamayı tamamladıktan sonra `Captcha.js`, koordinatları doğrulamak için `POST /` ile `captcha_srv` işlemini başlatır. Doğrulama başarılı olursa Base64URL kodlu bir Token iade edilecektir.
4. **Arka uç doğrulaması**: Ön uç, Token'ı web sitesinin arka ucuna gönderir ve arka uç, Token'ı hemen doğrulamak ve yok etmek için `captcha_srv` ve `GET /verify/{token}` çağrılarını yapar.

### Arka uç silme talimatları

Web sitesi arka ucu, ön uç tarafından gönderilen `token`'yi aldıktan sonra, `captcha_srv` hizmetine bir istek başlatması gerekir:

- **İstek arayüzü**:`GET /verify/{token}`
- **Yol parametresi**: `token` (ön uç tarafından döndürülen Base64URL dizesi)
- **Dönüş sonucu**: `1`, doğrulamanın başarılı ve geçerli olduğu anlamına gelir (otomatik olarak imha edilecektir); `0` geçersiz veya silinmiş anlamına gelir.