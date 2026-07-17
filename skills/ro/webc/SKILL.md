---
name: webc
---

Urmați procesul, faceți un plan și dezvoltați pas cu pas pentru a evita omisiunile

1. Rulați `./sh/new.js tip de proiect numele componentei` și creați un folder de componente în directorul `src`
   Tipul de proiect poate fi `css` (componentă de stil pur), `js` (componentă de pagină web)
   Scrieți cu majuscule prima literă a numelui componentei

2. Citiți specificațiile de codificare pentru `.agents/doc/code` și apoi dezvoltați.

   În `_.styl`, mai întâi `@import „../component name/_.styl”` pentru a importa dependențe. Vă rugăm să urmați standardele de codificare și estetica de design ale [./styl.md](./styl.md).

   Modificați stilurile altor componente și importați-le direct, utilizați `@import` la început și dezactivați `extend`.

   Stilul folosit pentru demonstrație este interzis să fie scris în `nume componente/_.styl` și scris în `demo/_.styl`.

   Pentru componenta `js`, dezvoltați-o conform procesului [webc.js.md](./webc.js.md) (vă rugăm să ștergeți `numele componente/_.js` pentru componentele de stil pur)

3. Apăsați [demo.md](./demo.md) demonstrație de dezvoltare a procesului

4. Rulați `./test.sh` din directorul rădăcină. Remediați erorile și alarmele, extrageți funcții, optimizați codul și evitați duplicarea și redundanța. Pentru specificațiile codului, consultați `.agents/doc/code/js.md`

5. Citiți [dbg.md](./dbg.md) și depanați componentele conform procesului

6. Urmați procesul [i18n.md](./i18n.md) pentru a implementa internaționalizarea componentelor și a demonstrațiilor și a scrie documente

7. Testați din nou și optimizați codul

8. Deschideți un agent secundar și sunați la `.agents/skills/js_review/SKILL.md` pentru a examina și optimiza codul.

9. Depanare din nou