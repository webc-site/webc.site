---
name: webc
---

Urmați procesul, faceți un plan și dezvoltați pas cu pas pentru a evita omisiunile

1. Rulați `./sh/new.js tip de proiect numele componentei` și creați componenta în directorul `src/webc`
   Tipul de proiect poate fi `css` (componentă de stil pur), `js` (componentă de pagină web)
   Scrieți cu majuscule prima literă a numelui componentei

2. Citiți specificațiile de codificare pentru `.agents/doc/code` și apoi dezvoltați.

   Stilul componentei este scris în `_.styl`. Stilul folosit pentru demonstrație este scris în `demo/_.styl`. Este interzisă scrierea în `numele componente/_.styl`.

  Utilizarea `@import` pentru a importa stiluri din alte componente este interzisă atât în ​​`_.styl`, cât și în `demo/_.styl` .

  Urmați standardele de codificare și estetica de design ale [./styl.md](./styl.md).

  Componentele dependente (și stilurile acestora) sunt importate prin `import „./other components.js”` în `webc/componentname.js`; dependențele pentru demonstrație sunt importate prin `import „../../other components.js”` în `demo/_.js`.

   Toate componentele (inclusiv componentele de stil pur) trebuie să aibă un fișier script `component name.js`. `component name.js` al componentelor de stil pur importă numai `_.styl` corespunzătoare. Pentru componentele cu logică JS, urmați procesul [webc.js.md](./webc.js.md) pentru a dezvolta.

3. Apăsați [demo.md](./demo.md) demonstrație de dezvoltare a procesului

4. Rulați `./test.sh` din directorul rădăcină. Remediați erorile și alarmele, extrageți funcții, optimizați codul și evitați duplicarea și redundanța. Pentru specificațiile codului, consultați `.agents/doc/code/js.md`

5. Citiți [dbg.md](./dbg.md) și depanați componentele conform procesului

6. Urmați procesul [i18n.md](./i18n.md) pentru a implementa internaționalizarea componentelor și a demonstrațiilor și a scrie documente

7. Testați din nou și optimizați codul

8. Deschideți un agent secundar și sunați la `.agents/skills/js_review/SKILL.md` pentru a examina și optimiza codul.

9. Depanare din nou