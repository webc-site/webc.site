# WebC.site

## Bu nima?

### Bu mahalliy veb-komponentlar kutubxonasi

[veb komponentlari](https://developer.mozilla.org/docs/Web/API/Web_components) asosida ishlab chiqilgan, u ish vaqtidan mustaqil va barcha ramkalar uchun mos keladi.

Hajmi uchun juda optimallashtirilgan (shunga o'xshash mashhur kutubxonalarning o'ndan bir qismi).

75 ta tilni qo'llab-quvvatlaydi. JS va CSS-ni onlayn foydalanish uchun to'g'ridan-to'g'ri import qilishingiz yoki ikkinchi darajali ishlab chiqish uchun kerak bo'lganda loyihangizga komponentlar qo'shishingiz mumkin.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Bu komponent kutubxonasini ishlab chiqish asosidir

Bu [hikoya kitobi](https://storybook.js.org) ning statik blog versiyasidir.

Komponentlar kutubxonasini yaratish kompaniyaning ichki rivojlanish samaradorligini oshirishi va texnik doirada brend imidjini yaratishi mumkin.

[webc.site](https://github.com/webc-site/webc.site) asosida jamoalar oʻzlarining komponentlar kutubxonalarini osongina yaratishlari va ularni [github page](https://pages.github.com), [cloudflare page](https://pages.cloudflare.com) va boshqalarda nashr etishlari mumkin. Chop etilgan komponentlarni onlayn ravishda [codepen.io](https://codepen.io) va [jsfiddle](https://jsfiddle.net) da tuzatish mumkin.

Shu bilan birga, o'rnatilgan tarjima tizimi komponentlar va hujjatlarni xalqarolashtirishni tezda amalga oshirishi mumkin, shunda mahsulot auditoriyasi endi til bilan bog'lanmaydi.

### Bu sun'iy intellekt davri uchun front-end rivojlanishning yangi paradigmasi

Ramka o'rnatilgan `.agents/skills` bo'lib, sun'iy intellekt eng yaxshi amaliyotlarga muvofiq bir marta bosish orqali yangi komponentlarni ishlab chiqishda yordam beradi.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Front-end kodini atmosfera dasturlashning chidab bo'lmas axlat tog'idan uzoq muddat davomida saqlanishi va iterativ ravishda rivojlanishi mumkin bo'lgan standart qismga o'zgartirishiga ruxsat bering.

Sun'iy intellekt yordamida rivojlanish xususiyatlarini hisobga olgan holda, biz yangi rivojlanish paradigmasini taklif qildik va ishlab chiqdik:

1. **Hamma narsa veb-komponentdir**
2. **Konponent ma'lumotlar havolasidan mustaqil bo'lishi kerak va ma'lumotlar interfeysi qayta qo'ng'iroq qilish funktsiyasi sifatida namoyon bo'ladi**

Shu tarzda, sun'iy intellekt soxta ma'lumotlarni yaratishi va demo sahifada komponentlarning turli holatini ko'rsatishi mumkin.

Komponentlarni ishlab chiqish va ma'lumotlar interfeysini ajratish, [webc.site komponentlar ramkasi](https://github.com/webc-site/webc.site) bilan birgalikda yana bir muhim xususiyat:

**Har bir komponent ishlab chiqish serverini mustaqil ravishda ishga tushirishi va demo sahifasida ishlab chiqish va disk raskadrovka qilishi mumkin**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Bu har bir komponentni ishlab chiqish va tuzatish uchun oldingi havolani `0` ga qisqartiradi.

Shu tarzda, sun'iy intellekt yordamida ishlab chiqish vositalari ([Klod Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Kursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) va boshqalar), siz turli xil brauzerlarni avtomatik ravishda ishlab chiqish yo'li bilan bloklanmasligingiz va bloklanmasligingiz mumkin. tartibsiz omillar (backend ma'lumotlari, login holati, yo'lni marshrutlash va boshqalar).

Agar siz sun'iy intellektni nazorat qilishni va xarajatlarni kamaytirishni va samaradorlikni oshirishni istasangiz, har bir komponentning rivojlanishi va disk raskadrovka muhitini minimallashtiradigan yangi paradigma kerak.

---

# Men hali TODO yozishni boshlamadim

### Veb komponentlar kutubxonasi

#### Yakuniy o'lchamni optimallashtirish

Masalan, virtual aylantirish paneli komponenti uchun mashhur [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) skripti hajmini va quyidagi jadvalda ko‘rsatilganidek, `gz` dan keyingi uslubni solishtiring:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 mil    |

`webc.site` virtual aylantirish paneli komponenti faqat `OverlayScrollbars`ning `10%` qismidir.

#### Ish vaqti mustaqil

[Web Components](https://developer.mozilla.org/docs/Web/API/Web_components) standartlari asosida qurilgan webc.site komponentlar kutubxonasi tabiiy ravishda ish vaqti-agnostikdir. React, Vue, Angular, Svelte yoki an'anaviy sof HTML/JS loyihasidan foydalanasizmi, barcha komponentlar to'g'ridan-to'g'ri brauzerda mahalliy HTML teglari kabi, ma'lum bir ramka uchun ikkilamchi qadoqlashni talab qilmasdan ishlashi mumkin.

##### Shadcn bilan taqqoslash

[shadcn/ui](https://ui.shadcn.com) komponent kodini toʻgʻridan-toʻgʻri oʻz loyihangizga nusxalashingizni talab qiluvchi kod tarqatish rejimini qabul qiladi. U React ekotizimiga va maxsus qurilish asboblari zanjiriga (masalan, Tailwind CSS) chambarchas bog'langan va barcha ramkalarda ishlatib bo'lmaydi. Bundan tashqari, loyiha muhandislik konfiguratsiyasi uchun ma'lum talablar mavjud.

Va `webc.site` komponenti:
- **Kross-framework universal**: Bir marta yozing va uni to‘g‘ridan-to‘g‘ri joriy qilish va istalgan frontend freymvorkda (hatto ramkasiz muhitda) ishlatish mumkin.
- **Atrof-muhitga nolga bog'liqlik**: Hech qanday maxsus qadoqlash vositalari yoki CSS protsessorlari talab qilinmaydi, faqat tuzilgan statik fayllarni import qiling va undan qutidan tashqarida foydalanish mumkin.

## Avtomatik ishlab chiqish va disk raskadrovka

### Mahalliy ishlab chiqish va disk raskadrovka

Har bir veb-sahifa komponenti ishlab chiqish serverini mustaqil ravishda ishga tushirishni qo'llab-quvvatlaydi, minimal ishlab chiqish va disk raskadrovka muhitini ta'minlaydi:

- **Yangi komponent yarating**: Komponent ishlab chiqish skeletini tezda yaratish uchun (jumladan, demo sahifa va xalqarolashtirish konfiguratsiyasi) `./sh/new.js [css|js] [komponent nomi]` ni ishga tushiring.
- **Mustaqil nosozliklarni tuzatish**: Vite ishlab chiqish serverini ishga tushirish va brauzerda komponentning demo sahifasini avtomatik ravishda ochish uchun `./dev.js [komponent nomi]` ni ishga tushiring (yoki `./dev.js` to‘g‘ridan-to‘g‘ri ishga tushiring). Komponentning issiq yangilanishini (HMR) qo'llab-quvvatlaydi. Rivojlanish va ma'lumotlar havolalari ajratilganligi sababli, to'liq avtomatik ishlab chiqish va brauzerni disk raskadrovka qilishda yordam berish uchun sun'iy intellektga (masalan, Claude Code, Google Antigravity va boshqalar) juda mos bo'lgan nol rivojlanish front-end havolasi mavjud.

### Komponentlar kutubxonasini nashr qilish

#### webc dist

Qadoqlash va nashr qilish jarayoni yuqori darajada avtomatlashtirilgan:
- **Statik resurs qadoqlash**: `./sh/dist.js`ni ishga tushirish (ya'ni, `webc dist` vazifasini bajarish) `src/` ostidagi barcha veb-sahifa komponentlarini avtomatik skanerlashi, kompilyatsiya qilishi, siqishi va `dist/` katalogiga chiqarishi mumkin. Bu katalogda ishlab chiqarishni tarqatish uchun JS/CSS fayllari, GitHub Pages yoki Cloudflare sahifalarida joylashtirishga tayyor demo sayt va avtomatik ravishda `_redirects` va `404.html` marshrutlash fayllari mavjud.
- **NPM Publish**: `./sh/npmDist.js`-ni ishga tushiring, skript komponentlarga bog'liqliklarni avtomatik ravishda boshqaradi, paket versiya raqamini oshiradi va komponentlar kutubxonasini NPM-ga nashr qilish uchun qadoqlash tugallangandan so'ng bir marta bosish bilan `npm publish`ni bajaradi.

### Platforma tarjima uchun javobgardir

Ramkada o'rnatilgan avtomatlashtirilgan tarjima jarayonlari mavjud:
1. Loyihaning asosiy katalogidagi `tran.yml`da tarjima qoidalarini (masalan, manba tili, maqsadli til va tarjima qilinadigan katalog) sozlang.
2. Kodingizda bir nechta tillarni qattiq kodlamasdan, komponentlar yoki hujjatlardagi to'ldiruvchilardan foydalaning.
3. `./sh/tran.js`ni ishga tushiring va tarjima mexanizmi avtomatik ravishda matnni chiqaradi va WebC tarjima xizmatini qayta ishlash uchun chaqiradi, avtomatik ravishda YAML tarjima yozuvlari va README hujjatlarini turli tillarda yaratadi.

### atrof-muhit o'zgaruvchilari

Avtomatlashtirilgan tarjimani amalga oshirayotganda, tarjima API ga kirishga ruxsat berish uchun quyidagi muhit oʻzgaruvchilarini sozlashingiz kerak:

- **`WEBC_SITE_TOKEN`** (yoki **`WEBC_TOKEN`**): Autentifikatsiya kaliti `webc.site` Avtomatlashtirilgan tarjima API-ga kirish uchun ishlatiladi. Atrof-muhit o'zgaruvchisi sifatida kiritilishi yoki mahalliy foydalanuvchining uy katalogidagi `~/.config/webc.site.yml` konfiguratsiya fayliga `token` yozilishi mumkin.