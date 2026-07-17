# md/streamRender.js

Markdown axın göstərilməsi

## default(container, source)

Markdown mətninin göstərilən DOM konteynerinə ötürülməsi, yazı makinası kursor effektləri və avtomatik sürüşməni dəstəkləmək

parametr:
- `container` : Göstərilən məzmunu saxlayan DOM konteyner elementi
- `source` : ReadableStream mətn məlumat mənbəyi

Qaytarma dəyəri:

- `cancel` : Göstərilməni və məlumat axınının oxunmasını dayandırmaq funksiyası
- `setStop` : Avtomatik sürüşməyə fasilə verib-verməməyi təyin etmək funksiyası
  - parametr
    - `val` : Pauza edilib-edilməməsi üçün məntiqi dəyər