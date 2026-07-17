# route.js

Tek sayfa ön uç yönlendirme yönetimi

## nowUrl()

Baştaki eğik çizgi kaldırılmış olarak mevcut URL yolunu alın

Dönüş değeri: geçerli yol dizesi

## route(hook)

Rota değişiklikleri için dinleme geri aramasını kaydedin. Kayıt olurken geçerli yolla bir kez yürütülecektir.

parametre:
- `hook` : Rota izleme geri arama işlevi
  - parametre
    - `url` : geçerli yol
    - `pre` : son yol

Dönüş değeri: Kayıtsız temizleme işlevi

## setPre(url)

Son kaydedilen URL'yi kaydet

parametre:
- `url` : yol dizesi

## preUrl()

Son kaydın URL'sini alın

Dönüş değeri: son yol dizesi

## refresh(url)

Tüm rota dinleme geri aramalarının belirtilen yolda tetiklenmesine ve ön güncellemeye zorla

parametre:
- `url` : hedef yol, varsayılan geçerli yol

## removeSlash(url)

Yol başlıklarından eğik çizgileri kaldırın

parametre:
- `url` : yol dizesi

Dönüş değeri: baştaki eğik çizgiyi kaldırdıktan sonraki yol

## setUrl(url)

Tarayıcı adres çubuğu URL durumunu güncelle

parametre:
- `url` : hedef yol

Dönüş değeri: 1 eğer yol gerçekten değişirse

## goto(url)

Tarayıcı adresini güncelleyin ve rota yenilemeyi tetikleyin

parametre:
- `url` : hedef yol