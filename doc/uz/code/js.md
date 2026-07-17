# JS kodining spetsifikatsiyasi

## kodlash uslubi

- Eng zamonaviy JS sintaksisidan foydalangan holda sodda, oqlangan va samarali
- Haddan tashqari uzun funktsiyalarni ajrating va interfeys dizayni past ulanish va yuqori uyg'unlik bo'lishi kerak.
- Massivlar + loops/forEach/map dan ko'proq foydalaning va kamroq takrorlanadigan kod yozing
- Ortiqcha izohlardan qochish uchun funksiya sharhlarini oddiy kodda yozmang. Murakkab mantiq va maxsus ehtiyojlar nozik xitoy tilida tushuntirilgan.
- Ortiqchalikni kamaytirish uchun takrorlangan kod funksiyalarga ajratiladi. Masalan, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()` shaklida yozilishi mumkin
- O'zgaruvchilar deklaratsiyasi: bir nechta ketma-ket `const` deklaratsiyalarni bitta bayonotga birlashtiring. Uni uch qatorda yozish o'rniga `const a=1, b=2, c=3;` deb yozing
- Asinxron ishlov berish: `await` dan foydalaning, `.then` zanjirli qo'ng'iroqlardan foydalanishni taqiqlang
- Istisnolarni qayta ishlash kodini avtomatik ravishda yaratmang, avtomatik ravishda `try...catch` yozmang (`try ... catch` qo'lda saqlanadi, mavjud `try catch` o'chirilmasligi kerak)
- Avval sof funktsiyalar: faqat sof funktsiyalarni yozing, hech qachon sinflar
- O'q funktsiyalaridan foydalaning `const funcName = () => {}` va `function` kalit so'zidan foydalanmang (generatorlardan tashqari); parametrlarni ulash uchun .bind dan foydalana olsangiz, funksiyalarni belgilashdan qoching
- Kodni qayta ishlatish: Qayta foydalanishga e'tibor bering, kichikroq funktsiyalarni ajratib oling va shunga o'xshash yoki nusxa ko'chiradigan ko'p sonli kod tuzilmalaridan qat'iyan qoching.
- Ob'ektga kirish: Kerakli atributlarni ajratib olish uchun tuzilmani buzish topshirig'idan foydalanishga ustuvorlik bering, chuqur va ichki o'rnatilgan atributlarga kirish uchun ichki nuqtalardan qayta-qayta foydalanishdan saqlaning va takroriy ixtiyoriy zanjirli mulohazalarni birlashtiring.
- Funksiya parametrlari uchun obyektlardan foydalanmang, `{a,b,c}` yozmang, `a, b, c` yozmang; agar ko'p ixtiyoriy parametrlar mavjud bo'lsa, [[konfiguratsiya elementlari soni, konfiguratsiya elementlari], [konfiguratsiya elementlari soni, konfiguratsiya elementlari],..] dan foydalaning. Bu paradigmada konfiguratsiya elementlari raqamli konstantalar bilan aniqlanadi.
- Ko'p qiymatli qaytish uchun `{a,b,c}` o'rniga `[a,b,c]` massivdan foydalaning. Agar 3 dan ortiq qaytariladigan qiymatlar mavjud bo'lsa, pozitsion ma'noni aniqlash uchun raqamli konstantalardan foydalaning.
- Holatni ifodalash uchun satr kerak emas, holatni aniqlash uchun raqamli konstantalardan foydalaning
- Hech qanday satr shablonidan (``) foydalanilmaydi, qatorlarni birlashtirish (+) ishlatilmaydi, importdan tashqari (Vite statik tahlili uchun qulay)
- Loop uchun, agar sizga seriya raqami kerak bo'lsa, `i++` o'rniga `++i` dan foydalaning.
- Keraksiz`?.`dan saqlaning va mudofaa dasturlarini taqiqlang
- O'zgaruvchi nomi ko'plik bo'lishi shart emas va ro'yxatni ko'rsatish uchun `_li` bilan tugaydi.

## Nomlash konventsiyasi

- Nomlash minimalizmga intiladi. Qisqa, ammo mazmunli nomlardan foydalaning, masalan: `remove`, `delete`, `del` o'rniga `rm` dan foydalaning. Shu bilan birga, siz haddan tashqari ko'p narsalardan qochishingiz kerak, masalan: `map` o'rniga bitta harf `m` ishlatmang.
- Funktsiyani nomlashda faqat fe'llardan foydalanishga harakat qiling. Agar siz uni ifodalash uchun bitta so'zdan foydalansangiz, ikkita so'zdan foydalanmang. Ismlar fayl nomlarida aks etadi. Agar fayl nomiga fe'l qo'shishingiz kerak bo'lsa, iltimos, otni birinchi, fe'lni oxirgi qo'ying. Masalan: `setProfile.js` o'rniga `profileSet.js`
- O'zgaruvchi nomi: tagiga chizish uslubidan foydalaning (snake_case), masalan `user_auth_token`; agar o'zgaruvchi funksiya bo'lsa, kichik harflar bilan nomlash uslubidan foydalaning
- Funktsiya nomi: Kichik camelCase (camelCase) dan foydalaning, masalan, `userData`
- Funktsiya parametrlari: Agar bu qayta qo'ng'iroq funksiyasi bo'lsa, uni `onChange` kabi kichik harflar bilan nomlang.
- Modul darajasidagi doimiy ta'riflar `UPPER_SNAKE_CASE` katta harf tagiga chizish uslubidan foydalanadi
- `get`, ma'nosiz prefikslarni yozmang, masalan: `getCookie` o'rniga `cookieByHeader` yozing.
- Global/modul darajasidagi konstantalar: bosh harf ostidagi chiziq uslubidan foydalaning (UPPER_SNAKE_CASE), masalan. `CODE_TO_ID`, `ID_TO_LANG`

## Modulli mexanizm

- Import: Import funksiyalarini soʻrov boʻyicha toʻgʻri kiriting, butun modulni toʻgʻridan-toʻgʻri import qilishni taqiqlang (`import * as x` yoki yirik obʼyektlarni import qilishdan saqlaning)
- Eksport: ob'ektlarni eksport qilishni o'chirib qo'ying. `export const X=1, abc=()=>{};` kabi funktsiyalar va o'zgaruvchilarni birlik sifatida eksport qiling. Eksport qilingan tarkibni e'lon qilish uchun ularni const + vergul bilan birlashtirishga harakat qiling. Agar fayl faqat bitta funktsiyaga ega bo'lsa, `export default` dan foydalaning
- Agar siz standart eksport funksiyasini ichkarida chaqirishingiz shart bo'lmasa, avval konstantalarni e'lon qilishdan va keyin ularni fayl oxirida eksport qilishdan saqlaning.
- Yo'l ruxsati: Joriy katalog yo'lini olishda `import.meta.dirname` dan foydalanish kerak

## xato

- Satr xatolaridan qoching va doimiy xato kodlarini e'lon qilish uchun const dan foydalaning.
- Agar siz noto'g'ri ma'lumot ma'lumotlarini qaytarishingiz kerak bo'lsa, [xato kodi, xato xabari,...] dan foydalaning. Shunday qilib, xato xabari matnli tavsif emas, balki raqamli qiymatdir (masalan, [FILE_OVERSIZE, fayl_sizi, maksimal_size])
-

## Brauzerga mos API lardan foydalanishga harakat qiling

- Shifrlash va shifrni hal qilish: mahalliy Web Crypto API-dan foydalanishga majburlash
- Ikkilik ma'lumotlar: Ikkilik bilan ishlashda `Uint8Array` dan bir xilda foydalanishga harakat qiling