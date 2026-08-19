# To'ldiruvchi holatini avtomatik ravishda almashtiruvchi kirish oynasi

- Kirilmaganda to'ldiruvchini ko'rsatish
- Kontentni kiritishda joy egalari muammosiz o'lchaydi va tepada suzib yuradi
- Sof CSS ilovasi, JavaScript-ga bog'liqlik yo'q

## Ko‘rsatma ishlatish

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">Elektron pochta</label>
</b>
```

## tuzilmaviy talablar

- Konteyner: Kirish qutilari va teglarni joylashtirish uchun `.Input` klassi elementlaridan foydalaning.
- Kirish oynasi: `input` element, `placeholder=" "` (bo'sh joy bo'lgan to'ldiruvchi) holatni almashtirishni ishga tushirish uchun o'rnatilishi kerak.
- Maslahat tegi: `label` element, darhol `input` dan keyin.

## uslublar sinfi

- `.Input`: Kirish qutisi tuzilishi va oʻtish animatsiyasini taʼminlovchi asosiy uslub.
- `.Lg`: Ajratish/muzli oynani modifikatsiya qilish uslubi.