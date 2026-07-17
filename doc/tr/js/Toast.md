# Toast.js

Tost açılır mesajı istemi

## toast(render, timeout)

Standart bilgi istemi açılır penceresini göster

parametre:
- `render` : Açılır içeriği özelleştirmek için kullanılan oluşturma işlevi
  - parametre
    - `el` : Açılır pencerenin DOM öğesi
- `timeout` : Otomatik kapanma için gecikme saniyesi, varsayılan 9, 0 olduğunda otomatik kapanma olmaz

Dönüş değeri: Açılan pencerenin DOM öğesi

## toastErr(render, timeout)

Hata mesajı açılır penceresini göster

parametre:
- `render` : Açılır içeriği özelleştirmek için kullanılan oluşturma işlevi
  - parametre
    - `el` : Açılır pencerenin DOM öğesi
- `timeout` : Otomatik kapanma için gecikme saniyesi, varsayılan 9, 0 olduğunda otomatik kapanma olmaz

Dönüş değeri: Hata açılır penceresinin DOM öğesi