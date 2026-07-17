# Toast.js

Qalqib chiquvchi xabar so'rovi

## toast(render, timeout)

Standart qalqib chiquvchi oynani ko'rsatish

parametr:
- `render` : Qalqib chiquvchi tarkibni sozlash uchun ishlatiladigan renderlash funksiyasi
  - parametr
    - `el` : qalqib chiquvchi oynaning DOM elementi
- `timeout` : Avtomatik o'chirish uchun kechikish soniyalari, standart 9, 0 bo'lganda avtomatik o'chirilmaydi

Qaytish qiymati: qalqib chiquvchi oynaning DOM elementi

## toastErr(render, timeout)

Xato xabari qalqib chiquvchi oynasini ko'rsatish

parametr:
- `render` : Qalqib chiquvchi tarkibni sozlash uchun ishlatiladigan renderlash funksiyasi
  - parametr
    - `el` : qalqib chiquvchi oynaning DOM elementi
- `timeout` : Avtomatik o'chirish uchun kechikish soniyalari, standart 9, 0 bo'lganda avtomatik o'chirilmaydi

Qaytish qiymati: xato qalqib chiquvchi oynaning DOM elementi