---
name: webc
---

Jarayonni kuzatib boring, reja tuzing va o'tkazib yubormaslik uchun bosqichma-bosqich ishlab chiqing

1. `./sh/new.js loyiha turi komponent nomi`ni ishga tushiring va `src` katalogi ostida komponent papkasini yarating.
   Loyiha turi `css` (sof uslub komponenti), `js` (veb-sahifa komponenti) bo'lishi mumkin.
   Komponent nomining birinchi harfini bosh harf bilan yozing

2. `.agents/doc/code` uchun kodlash spetsifikatsiyalarini o'qing va keyin ishlab chiqing.

   `_.styl`da, bogʻliqliklarni import qilish uchun avval `@import "../component name/_.styl"` kiriting. Iltimos, [./styl.md](./styl.md) kodlash standartlari va dizayn estetikasiga rioya qiling.

   Boshqa komponentlarning uslublarini o'zgartiring va ularni to'g'ridan-to'g'ri import qiling, boshida `@import` dan foydalaning va `extend`ni o'chirib qo'ying.

   Namoyish uchun ishlatiladigan uslubni `komponent nomi/_.styl`da yozish va `demo/_.styl`da yozish taqiqlanadi.

   `js` komponenti uchun uni [webc.js.md](./webc.js.md) jarayoniga muvofiq ishlab chiqing (sof uslubdagi komponentlar uchun `komponent nomi/_.js`ni o‘chirib tashlang)

3. Jarayonni ishlab chiqish namoyishi [demo.md](./demo.md) tugmasini bosing

4. Ildiz katalogining `./test.sh` ni ishga tushiring. Xatolar va signallarni tuzating, funksiyalarni ajratib oling, kodni optimallashtiring va takrorlanish va ortiqchalikdan qoching. Kod spetsifikatsiyalari uchun `.agents/doc/code/js.md` ga qarang

5. Jarayonga muvofiq [dbg.md](./dbg.md) va disk raskadrovka komponentlarini o'qing

6. Komponentlar va namoyishlarni xalqarolashtirish va hujjatlarni yozish uchun [i18n.md](./i18n.md) jarayoniga rioya qiling

7. Yana sinab ko'ring va kodni optimallashtiring

8. Kodni ko'rib chiqish va optimallashtirish uchun sub-agentni oching va `.agents/skills/js_review/SKILL.md` ga qo'ng'iroq qiling.

9. Yana nosozliklarni tuzatish