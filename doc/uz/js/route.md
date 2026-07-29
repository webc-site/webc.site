# route.js

Bir sahifali frontend marshrutlashni boshqarish

## nowUrl()

Joriy URL yoʻlini bosh chiziqcha olib tashlang

Qaytish qiymati: joriy yo'l qatori

## route(hook)

Marshrutni o'zgartirish uchun qayta qo'ng'iroqni tinglashni ro'yxatdan o'tkazing. Ro'yxatdan o'tishda u joriy yo'l bilan bir marta bajariladi.

parametr:
- `hook` : Marshrutni kuzatish funksiyasi
  - parametr
    - `url` : joriy yo'l
    - `pre` : oxirgi yo'l

Qaytish qiymati: ro'yxatdan o'tmagan tozalash funktsiyasi

## setPre(url)

Oxirgi yozilgan URL manzilini saqlang

parametr:
- `url` : yo'l qatori

## preUrl()

Oxirgi yozuvning URL manzilini oling

Qaytish qiymati: oxirgi yo'l qatori

## refresh(url)

Barcha marshrutni tinglash qo'ng'iroqlarini belgilangan yo'lda ishga tushirishga majburlang va oldindan yangilang

parametr:
- `url` : maqsadli yo'l, standart joriy yo'l

## removeSlash(url)

Yo'l sarlavhalaridan qirrali chiziqlarni olib tashlang

parametr:
- `url` : yo'l qatori

Qaytish qiymati: bosh chiziqni olib tashlangandan keyingi yo'l

## setUrl(url)

Brauzer manzil satrining URL holatini yangilang

parametr:
- `url` : maqsadli yo'l

Qaytish qiymati: 1, agar yo'l haqiqatda o'zgarsa

## goto(url)

Brauzer manzilini yangilang va marshrutni yangilashni ishga tushiring

parametr:
- `url` : maqsadli yo'l