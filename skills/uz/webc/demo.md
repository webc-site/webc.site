# Namoyish

`src/BoxX/demo` ga qarang va komponentning demosini `src/component name/demo/` da ishlab chiqing.

`demo/_.pug`, demo shablon

Faqat minimalist komponent teglari kiritilgan, to'liq sahifa talab qilinmaydi va uslublar va skriptlarni import qilish taqiqlanadi. Ramka avtomatik ravishda kiritiladi (masalan, `demo/_.styl`, `demo/_.js`).

Sarlavha yozmang (masalan, xxx demo yozmang), komponent nomini yozmang, komponent bilan tanishtirmang, faqat demo holatini yozing (agar status bo'lmasa, sarlavha yozmang)

`_.pug` ning ildiz elementi `main.demo.Lg` dan foydalanadi, u `demo/_.styl`da uslubni belgilagan va `main.demo.Lg`ning o'zi uslubini belgilamaydi.

Displey komponentining konteyneri `main.demo.Lg` bilan tekislangan bo'lishi kerak va ular orasida `margin` va `padding` bo'lmasligi kerak, chunki `main.demo`ning o'zi allaqachon `padding` o'rnatgan va uni bo'sh qo'yish takrorlanadi.

`demo/_.styl` Agar faqat bitta displey komponenti bo'lsa, uning konteynerida tashqi ramka bo'lmaydi va faqat `max-width` o'rnatiladi (chunki taqdimot konteyneri avtomatik ravishda tashqi ramka qo'shadi). Agar bir nechta bo'lsa, idishni tashqi ramka bilan ajratish mumkin.

`img`ni `demo/_.pug`ga yozmang, fon rasmini o'rnatish uchun `demo/_.styl` dan foydalaning

Agar komponentda bir nechta shakllar bo'lsa, iltimos, ularni tartibda ko'rsating (masalan, yuklash, bo'sh ma'lumotlar, ma'lumotlar, muvaffaqiyatsizlik va h.k.), moslashuvchan vertikal tartib

`demo/_.styl`: demo sahifaning `stylus` uslubi, iltimos, [./styl.md](./styl.md) kod spetsifikatsiyalari va dizayn estetikasiga amal qiling.

Ko'rsatiladigan komponentni import qilish uchun `@import '../_.styl'` deb yozmang, u avtomatik ravishda kiritiladi.

Iltimos, `@import '../../Btn/_.styl'`ni `demo/_.styl`ga import qiling va `.Btn` dan foydalaning

`demo/_.js`: Skriptni chaqiring, format `export default (root) => { ... }`, parametr `root` xost (`document` yoki sinov qutisi konteynerining ildiz elementi)

`D.createElement` taqiqlangan, [./js.md](./js.md) tomonidan qayd etilgan `newEl` dan foydalaning.

`js` dan `c-t`da foydalanish va `fLang` xalqarolashtirish taqiqlangan

Agar `../_.js` (`../_.js` komponentning o'zini ko'rsatishi kerak bo'lsa, boshqa demolar tomonidan talab qilinadigan bog'liq komponentlar hali ham import qilinishi kerak) faqat `import` talab qilinadi va hech qanday maxsus kontent import qilinmaydi, uni o'tkazib yuborish mumkin (ramka avtomatik ravishda uni kiritadi)

`pug` `js` va `styl` ni import qilishning hojati yo'q, ramka ularni avtomatik ravishda kiritadi