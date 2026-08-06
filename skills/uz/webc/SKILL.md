---
name: webc
---

Jarayonni kuzatib boring, reja tuzing va o'tkazib yubormaslik uchun bosqichma-bosqich ishlab chiqing

1. `./sh/new.js loyiha turi komponent nomi`ni ishga tushiring va komponentni `src/webc` katalogi ostida yarating.
   Loyiha turi `css` (sof uslub komponenti), `js` (veb-sahifa komponenti) bo'lishi mumkin.
   Komponent nomining birinchi harfini bosh harf bilan yozing

2. `.agents/doc/code` uchun kodlash spetsifikatsiyalarini o'qing va keyin ishlab chiqing.

   Komponent uslubi `_.styl`da yozilgan. Namoyish uchun ishlatiladigan uslub `demo/_.styl`da yozilgan. Uni `komponent nomi/_.styl`da yozish taqiqlanadi.

  Boshqa komponentlardan uslublarni import qilish uchun `@import` dan foydalanish `_.styl` va `demo/_.styl` da taqiqlangan.

  [./styl.md](./styl.md) kodlash standartlari va dizayn estetikasiga rioya qiling.

  Bog'liq komponentlar (va ularning uslublari) `import "./other components.js"` orqali `webc/componentname.js` orqali import qilinadi; ko'rsatish uchun bog'liqliklar `demo/_.js`dagi `import "../../other components.js"` orqali import qilinadi.

   Barcha komponentlar (shu jumladan sof uslub komponentlari) `komponent nomi.js` skript fayliga ega bo'lishi kerak. Sof uslubdagi komponentlarning `komponent nomi.js` faqat tegishli `_.styl`ni import qiladi. JS mantiqiga ega komponentlar uchun ishlab chiqish uchun [webc.js.md](./webc.js.md) jarayonini bajaring.

3. Jarayonni ishlab chiqish namoyishi [demo.md](./demo.md) tugmasini bosing

4. Ildiz katalogining `./test.sh` ni ishga tushiring. Xatolar va signallarni tuzating, funksiyalarni ajratib oling, kodni optimallashtiring va takrorlanish va ortiqchalikdan qoching. Kod spetsifikatsiyalari uchun `.agents/doc/code/js.md` ga qarang

5. Jarayonga muvofiq [dbg.md](./dbg.md) va disk raskadrovka komponentlarini o'qing

6. Komponentlar va namoyishlarni xalqarolashtirish va hujjatlarni yozish uchun [i18n.md](./i18n.md) jarayoniga rioya qiling

7. Yana sinab ko'ring va kodni optimallashtiring

8. Kodni ko'rib chiqish va optimallashtirish uchun sub-agentni oching va `.agents/skills/js_review/SKILL.md` ga qo'ng'iroq qiling.

9. Yana nosozliklarni tuzatish