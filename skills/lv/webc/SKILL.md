---
name: webc
---

Sekojiet procesam, izveidojiet plānu un izstrādājiet soli pa solim, lai izvairītos no izlaidumiem

1. Palaidiet `./sh/new.js projekta tipa komponenta nosaukums` un izveidojiet komponentu `src/webc` direktorijā
   Projekta veids var būt `css` (tīra stila komponents), `js` (tīmekļa lapas komponents)
   Komponenta nosaukuma pirmo burtu rakstiet ar lielo burtu

2. Izlasiet `.agents/doc/code` kodēšanas specifikācijas un pēc tam izstrādājiet.

   Komponenta stils ir rakstīts `_.styl`. Demonstrēšanai izmantotais stils ir rakstīts `demo/_.styl`. Aizliegts to rakstīt `komponenta nosaukumā/_.styl`.

  `@import` izmantošana stilu importēšanai no citiem komponentiem ir aizliegta gan `_.styl`, gan `demo/_.styl` .

  Ievērojiet [./styl.md](./styl.md) kodēšanas standartus un dizaina estētiku.

  Atkarīgie komponenti (un to stili) tiek importēti, izmantojot `importēt "./other component.js"` mapē `webc/componentname.js`; demonstrācijas atkarības tiek importētas, izmantojot `importēšanu "../../other component.js"`, kas atrodas `demo/_.js`.

   Visiem komponentiem (tostarp tīra stila komponentiem) ir jābūt skripta failam `komponenta nosaukums.js`. Tīra stila komponentu `komponenta nosaukums.js` importē tikai atbilstošo `_.styl`. Lai izstrādātu komponentus ar JS loģiku, izpildiet [webc.js.md](./webc.js.md) procesu.

3. Nospiediet [demo.md](./demo.md) procesa izstrādes demonstrācija

4. Palaidiet saknes direktoriju `./test.sh`. Labojiet kļūdas un trauksmes signālus, izņemiet funkcijas, optimizējiet kodu un izvairieties no dublēšanās un dublēšanas. Koda specifikācijas skatiet sadaļā `.agents/doc/code/js.md`

5. Izlasiet [dbg.md](./dbg.md) un atkļūdojiet komponentus atbilstoši procesam

6. Izpildiet [i18n.md](./i18n.md) procesu, lai īstenotu komponentu un demonstrāciju internacionalizāciju un rakstītu dokumentus

7. Pārbaudiet vēlreiz un optimizējiet kodu

8. Atveriet apakšaģentu un zvaniet uz `.agents/skills/js_review/SKILL.md`, lai pārskatītu un optimizētu kodu.

9. Atkal tiek veikta atkļūdošana