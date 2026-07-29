# Demo

Consultați `src/webc/BoxX/demo` și dezvoltați o demonstrație a componentei în `src/webc/component name/demo/`

`demo/_.pug`, subșablon demonstrativ

Sunt incluse doar etichete de componente minimaliste, nu este necesară nicio pagină completă, iar importul de stiluri și scripturi este interzis. Cadrul se va injecta automat (cum ar fi `demo/_.styl`, `demo/_.js`).

Nu scrieți un titlu (de exemplu, nu scrieți xxx demo), nu scrieți numele componentei, nu introduceți componenta, scrieți doar starea cazului de utilizare demo (dacă nu există stare, nu scrieți niciun titlu)

Elementul rădăcină al `_.pug` folosește `main.demo.Lg` , care a definit stilul în `demo/_.styl` și nu definește stilul `main.demo.Lg` în sine.

Containerul componentei de afișare ar trebui să fie aliniat cu `main.demo.Lg` și nu ar trebui să existe `margin` și `padding` între ele, deoarece `main.demo` însuși a setat deja `padding` și setarea golului se va repeta.

`demo/_.styl` Dacă există o singură componentă de afișare, containerul său nu va avea un cadru exterior și va seta doar `max-width` (deoarece containerul de prezentare va adăuga automat un cadru exterior). Dacă există mai multe, containerul poate fi separat printr-un cadru exterior.

Nu scrie `img` în `demo/_.pug`, folosește `demo/_.styl` pentru a seta imaginea de fundal

Dacă componenta are mai multe forme, vă rugăm să le afișați în ordine (cum ar fi încărcare, date goale, date, a eșuat etc.), flexați aspectul vertical

`demo/_.styl`: `stylus` stilul paginii demo, vă rugăm să urmați specificațiile codului și estetica designului [./styl.md](./styl.md)

Dacă nu scrieți `@import '../_.styl'` pentru a importa componenta care urmează să fie demonstrată, aceasta va fi injectată automat; este interzisă utilizarea `@import` în `demo/_.styl` pentru a importa alte stiluri de componente. Dacă demonstrația depinde de alte componente (cum ar fi butonul `.Btn`), importați componentele dependente prin `import "../../Btn.js"` în `demo/_.js`.

`demo/_.js`: apelați scriptul, formatați `export default (root) => { ... }`, parametrul `root` este gazda (`document` sau elementul rădăcină al containerului sandbox)

`D.createElement` este interzis, utilizați `newEl` menționat de [./js.md](./js.md)

`js` este interzis pentru utilizare în `c-t` și pentru internaționalizare `fLang`

Dacă `../component name.js` (`../component name.js` urmează să afișeze componenta în sine, iar alte componente dependente cerute de demo trebuie încă importate), este necesar doar `import` și nu este importat niciun conținut specific, care poate fi omis (cadru-ul îl va injecta automat)

`pug` Nu este nevoie să importați `js` și `styl` , cadrul le va injecta automat