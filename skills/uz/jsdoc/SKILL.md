---
name: jsdoc
description: src/js hujjati avtomatik ravishda yaratiladi
---

## Qadamlarni bajaring

1. Hujjatlari etishmayotgan funksiyalarni ko'rish uchun `./sh/jsDoc.js` ni ishga tushiring (agar chiqish bo'lmasa, uni qo'shishning hojati yo'q).
2. Chiqarish fayllari ro'yxatiga ko'ra, mavjud hujjatlar va kodlarni birma-bir o'qing va ularni to'ldiring (ularni ketma-ketlikda qayta ishlang va ularni birma-bir buzing).

## Hujjatlarga qo'yiladigan talablar

Agar eksport funksiya bo'lsa, yozing
- Parametrlar va qaytish qiymatlari:
  - Faqat parametrlar yoki qaytariladigan qiymatlar mavjud bo'lsa, tegishli tavsiflarni yozing, aks holda ularni yozmang.
  - Parametrlar tartibsiz ro'yxatlar yordamida kiritiladi.
  - Qaytish qiymati massiv bo'lsa, uni birma-bir tavsiflash uchun tartibsiz ro'yxatdan foydalaning (aks holda, to'g'ridan-to'g'ri yozing, `Qaytish qiymati: tavsifi`, faqat bitta qator).
  - Parametrlar yoki qaytariladigan qiymat funksiya bo'lsa, parametrlarni tavsiflash va qiymatlarni qaytarish uchun pastki tartibsiz ro'yxatlardan foydalaning (agar bo'lmasa, ularni yozmang).

Agar eksport doimiy bo'lsa, uning nima ekanligini kiriting, faqat bitta satr

- Qisqa, professional tildan foydalaning va sifatlardan saqlaning.
- Mavjud hujjatni qayta ko'rib chiqing, uni to'liq qayta yozmang

## shablon formati

Takrorlanmaslik uchun har bir ismni faqat bir marta yozing va uni bir qatorda aniq ifodalashga harakat qiling. Malumot formati quyidagicha

```
# Fayl nomi

## Funktsiya nomi (parametr)

Foydalanish tavsifi

parametr:
- `xx` : Maqsad
  - parametr
    - `a` : Maqsad
  - Qaytish qiymati: tavsif

Qaytish qiymati: Tavsif
```