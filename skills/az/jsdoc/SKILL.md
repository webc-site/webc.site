---
name: jsdoc
description: src/js sənədi avtomatik olaraq yaradılır
---

## Qaçış addımları

1. Çatışmayan sənədləri olan funksiyalara baxmaq üçün `./sh/jsDoc.js` işə salın (əgər çıxış yoxdursa, onu əlavə etməyə ehtiyac yoxdur).
2. Çıxış faylı siyahısına uyğun olaraq, mövcud sənədləri və kodları bir-bir oxuyun və tamamlayın (onları ardıcıllıqla emal edin və bir-bir sındırın).

## Sənədləşdirmə tələbləri

Əgər ixrac funksiyadırsa, yazın
- Parametrlər və qaytarılan dəyərlər:
  - Yalnız parametrlər və ya qaytarılan dəyərlər varsa müvafiq təsvirləri yazın, əks halda onları yazmayın.
  - Parametrlər sıralanmamış siyahılardan istifadə etməklə təqdim olunur.
  - Əgər qaytarılan dəyər massivdirsə, onu bir-bir təsvir etmək üçün sıralanmamış siyahıdan istifadə edin (əks halda, birbaşa yazın, `Qayıdış dəyəri: təsviri`, yalnız bir sətir).
  - Parametrlər və ya qaytarılan dəyər funksiyalardırsa, parametrləri təsvir etmək və dəyərləri qaytarmaq üçün alt sıralanmamış siyahılardan istifadə edin (heç biri yoxdursa, onları yazmayın).

İxrac sabitdirsə, onun nə olduğunu təqdim edin, yalnız bir sətir

- Qısa, peşəkar dildən istifadə edin və sifətlərdən istifadə etməyin.
- Mövcud sənədə yenidən baxın, onu tamamilə yenidən yazmayın

## format şablonu

Təkrarlanmamaq üçün hər adı yalnız bir dəfə yazın və bir sətirdə aydın şəkildə ifadə etməyə çalışın. İstinad formatı aşağıdakı kimidir

```
# fayl adı

## Funksiya adı (parametr)

İstifadə təsviri

parametr:
- `xx` : Məqsəd
  - parametr
    - `a` : Məqsəd
  - Qaytarılan dəyər: təsvir

Qaytarma dəyəri: Təsvir
```