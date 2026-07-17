---
name: webc
---

Sekojiet procesam, izveidojiet plānu un izstrādājiet soli pa solim, lai izvairītos no izlaidumiem

1. Palaidiet `./sh/new.js projekta tipa komponenta nosaukums` un izveidojiet komponenta mapi `src` direktorijā.
   Projekta veids var būt `css` (tīra stila komponents), `js` (tīmekļa lapas komponents)
   Komponenta nosaukuma pirmo burtu rakstiet ar lielo burtu

2. Izlasiet `.agents/doc/code` kodēšanas specifikācijas un pēc tam izstrādājiet.

   Vietnē `_.styl` vispirms `@importējiet "../komponenta nosaukums/_.styl"`, lai importētu atkarības. Lūdzu, ievērojiet [./styl.md](./styl.md) kodēšanas standartus un dizaina estētiku.

   Mainiet citu komponentu stilus un tā vietā importējiet tos tieši, sākumā izmantojiet `@import` un atspējojiet `extend`.

   Demonstrēšanai izmantoto stilu ir aizliegts rakstīt kā `komponenta nosaukums/_.styl` un rakstīt ar `demo/_.styl`.

   Komponentam `js` izstrādājiet to saskaņā ar [webc.js.md](./webc.js.md) procesu (lūdzu, izdzēsiet `komponenta nosaukumu/_.js` tīra stila komponentiem).

3. Nospiediet [demo.md](./demo.md) procesa izstrādes demonstrācija

4. Palaidiet saknes direktoriju `./test.sh`. Labojiet kļūdas un trauksmes signālus, izņemiet funkcijas, optimizējiet kodu un izvairieties no dublēšanās un dublēšanas. Koda specifikācijas skatiet sadaļā `.agents/doc/code/js.md`

5. Izlasiet [dbg.md](./dbg.md) un atkļūdojiet komponentus atbilstoši procesam

6. Izpildiet [i18n.md](./i18n.md) procesu, lai īstenotu komponentu un demonstrāciju internacionalizāciju un rakstītu dokumentus

7. Pārbaudiet vēlreiz un optimizējiet kodu

8. Atveriet apakšaģentu un zvaniet uz `.agents/skills/js_review/SKILL.md`, lai pārskatītu un optimizētu kodu.

9. Atkal tiek veikta atkļūdošana