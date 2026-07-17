# c-t.js

HTML'nin uluslararası hale getirilmesi

`<c-t>key</c-t>` etiketi özelleştirilmiştir ve `key` dil paketinin anahtarıdır.

## cTranSet(el, genUrl)

`c-t` için metni ayarlayın.

parametre:
- `el` : kök öğe, global `document`'ye aktarılabilir
- `genUrl` : dil paketi sözlüğünü edinme işlevi
  - parametre
    - `code` : dil kodu
  - Dönüş değeri: bir dil paketi sözlük nesnesi veya bu nesneye çözümlenen bir Promise