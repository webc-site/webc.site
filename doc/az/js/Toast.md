# Toast.js

Tost pop-up mesaj sorğusu

## toast(render, timeout)

Standart sorğu pop-up pəncərəsini göstərin

parametr:
- `render` : Açılan məzmunu fərdiləşdirmək üçün istifadə edilən render funksiyası
  - parametr
    - `el` : pop-up pəncərənin DOM elementi
- `timeout` : Avtomatik söndürmə üçün gecikmə saniyələri, defolt 9, 0 olduqda avtomatik sönmə yoxdur

Qaytarılan dəyər: pop-up pəncərənin DOM elementi

## toastErr(render, timeout)

Səhv mesajı popupunu göstərin

parametr:
- `render` : Açılan məzmunu fərdiləşdirmək üçün istifadə edilən render funksiyası
  - parametr
    - `el` : pop-up pəncərənin DOM elementi
- `timeout` : Avtomatik söndürmə üçün gecikmə saniyələri, defolt 9, 0 olduqda avtomatik sönmə yoxdur

Qaytarma dəyəri: Səhv açılan pəncərəsinin DOM elementi