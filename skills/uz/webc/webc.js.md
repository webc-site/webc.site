
  `js` komponenti uchun komponentni `Light DOM` yordamida `src/webc/componentname.js` orqali amalga oshiring.

  Boshqa komponentlarni import qilish uchun nisbiy yo‘llardan foydalaning, masalan: `import "./component name.js"` (Har bir komponentning JS faylida tegishli `_.styl` boshida import qilinishi kerak, masalan, `import "./component name/_.styl";`).

  `this` Faqat veb-komponentning mahalliy qayta qo'ng'iroq funksiyasini aniqlang, qolganlarini mustaqil funktsiyalar sifatida yozing, `this` va kerakli parametrlarni kiriting.

  Tashqi ko'rinadigan interfeyslarga qo'shimcha ravishda, daraxt tebranishini optimallashtirish va kodni siqishni osonlashtirish uchun `this` da maxsus shaxsiy atributlarni bog'lash taqiqlanadi (funktsiyalarni tushirish uchun `this.$` dan foydalaning) va yuqori tartibli funktsiyalar oraliq o'zgaruvchilarni ushlab turish uchun yopishlarni qaytarish uchun ishlatilishi mumkin.

  `constructor` deb yozmang, atribut `connectedCallback`da olinadi.


  `src/js/` ostidagi umumiy funksiyalardan qayta foydalanish uchun [./js.md](./js.md) ga qarang.

  Konteynerlar uchun atributlar oʻrniga `slot` dan foydalaning.
  Agar siz ma'lumotlarni yuklashingiz kerak bo'lsa, asinxron qayta qo'ng'iroq funktsiyasi shaklida yuklash interfeysini yuqori qatlamga oching va qaytariladigan qiymat formatini ko'rsatish uchun sharhlardan foydalaning.
  Komponentlar xotira oqishini oldini olishlari kerak. `disconnectedCallback` o'chirish hodisalarini bitta funktsiyaga birlashtiring `this.$` va bir nechta o'chirish funksiyalarini yozmang.
  Interfeysning qaytish qiymati ob'ekt emas, balki bitta qiymat, massiv yoki massivlar massivi bo'lishi mumkin.
  Agar komponent bir nechta holatga ega bo'lsa, har bir holatning ma'lumotlar formatini aniq tasvirlash uchun ko'p qatorli sharhlardan foydalaning. (Izohlarning har bir qatoridan oldin `*` belgisi qo'ymang)
  Raqamli konstantalar yordamida holatni almashtirish (`const.js` ga belgilangan).
  Qayta qo'ng'iroq yuklanayotganda, animatsiyani ko'rsatish uchun `const xx = newEl('b');xx.className="Ing"` dan foydalaning va JS komponent faylida `import "./Ing.js"` orqali bog'liqliklarni kiriting.