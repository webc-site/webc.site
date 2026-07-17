
  `js` komponenti uchun komponentni `src/component name/_.js` da amalga oshirish uchun `Light DOM` dan foydalaning.

  Boshqa komponentlarni import qilish uchun nisbiy yoʻllardan foydalaning, masalan: `import "../component name/_.js"` (`js` import qilmaydi `styl`, ramka uni avtomatik ravishda kiritadi).

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
  Qayta qo'ng'iroq yuklanayotganda, `_.styl` ichida `const xx = newEl('b');xx.className="Ing"` va `@import "../Ing/_.styl"` bilan animatsiyani ko'rsating.