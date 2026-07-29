# Specificația codului JS

## stil de codare

- Simplu, elegant și eficient, folosind cea mai modernă sintaxă js
- Împărțiți funcțiile prea lungi, iar designul interfeței ar trebui să aibă o cuplare scăzută și o coeziune ridicată.
- Utilizați mai multe matrice + bucle/forEach/map și scrieți cod mai puțin repetitiv
- Nu scrieți comentarii la funcții în cod simplu pentru a evita comentariile excesive. Logica complexă și nevoile speciale sunt explicate în limba chineză rafinată.
- Codul repetat este extras în funcții pentru a reduce redundanța. De exemplu, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` poate fi scris ca `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Declarație variabilă: combinați mai multe declarații consecutive `const` într-o singură instrucțiune. În loc să o scrieți în trei rânduri, scrieți `const a=1, b=2, c=3;`
- Procesare asincronă: utilizați `await`, interziceți utilizarea apelurilor în lanț `.then`
- Nu generați automat codul de gestionare a excepțiilor, nu scrieți automat `try...catch` (`try ... catch` este întreținut manual, `try catch` existent nu trebuie șters)
- Funcțiile pure mai întâi: scrieți doar funcții pure, niciodată clase
- Utilizați funcții de săgeți `const funcName = () => {}` și nu utilizați cuvântul cheie `function` (cu excepția generatoarelor); dacă puteți utiliza .bind pentru a lega parametrii, evitați definirea funcțiilor
- Reutilizarea codului: acordați atenție reutilizării, extrageți mai multe funcții mici și evitați cu hotărâre un număr mare de structuri de cod similare sau copiate-lipite.
- Acces la obiecte: acordați prioritate utilizării atribuirii de destructurare pentru a extrage atributele necesare, evitați utilizarea în mod repetat a punctelor în interior pentru a accesa atribute profunde și imbricate și îmbinați judecățile în lanț opționale repetate
- Nu folosiți obiecte pentru parametrii funcției, nu scrieți `{a,b,c}`, nu scrieți `a, b, c`; dacă există mulți parametri opționali, utilizați [[număr de elemente de configurare, elemente de configurare], [număr de elemente de configurare, elemente de configurare],..] În această paradigmă, elementele de configurare sunt definite cu constante numerice
- Pentru returnări cu mai multe valori, utilizați matricea `[a,b,c]` în loc de `{a,b,c}`. Dacă există mai mult de 3 valori returnate, utilizați constante numerice pentru a defini semnificația pozițională.
- Nu este nevoie de un șir pentru a reprezenta starea, utilizați constante numerice pentru a defini starea
- Nu este utilizat niciun șablon de șir (``), se folosește concatenarea șirurilor (+), cu excepția importului (convenient pentru analiza statică Vite)
- Pentru buclă, dacă aveți nevoie de un număr de serie, utilizați `++i` în loc de `i++`
- Evitați`?.` inutile și interziceți programarea defensivă
- Numele variabilei nu trebuie să fie la plural și se termină cu `_li` pentru a indica o listă.

## Convenția de denumire

- Numirea urmărește minimalismul. Folosiți nume scurte, dar semnificative, de exemplu: utilizați `rm` în loc de `remove`, `delete`, `del`. Cu toate acestea, ar trebui să evitați să mergeți la extreme, de exemplu: nu folosiți o singură literă `m` în loc de `map`
- Încercați să utilizați numai verbe în denumirea funcției. Dacă poți folosi un cuvânt pentru a-l exprima, nu folosi două cuvinte. Substantivele sunt reflectate în numele fișierelor. Dacă trebuie să adăugați un verb la numele fișierului, vă rugăm să puneți substantivul primul și verbul ultimul. De exemplu: `profileSet.js` în loc de `setProfile.js`
- Numele variabilei: utilizați stilul de subliniere (snake_case), de exemplu `user_auth_token`; dacă variabila este o funcție, utilizați stilul de denumire cu litere mici
- Numele funcției: utilizați litere mici camelCase (camelCase), de exemplu `userData`
- Parametrii funcției: dacă este o funcție de apel invers, numiți-o cu litere mici, cum ar fi `onChange`
- Definițiile constantelor la nivel de modul folosesc stilul de subliniere cu majuscule `UPPER_SNAKE_CASE`
- Nu scrieți `get`, astfel de prefixe fără sens, cum ar fi: scrieți `cookieByHeader` în loc de `getCookie`
- Constante globale/la nivel de modul: utilizați stilul de subliniere cu majuscule (UPPER_SNAKE_CASE), de ex. `CODE_TO_ID`, `ID_TO_LANG`

## Mecanism modular

- Import: importați funcții cu precizie la cerere, interziceți importul direct al întregului modul (evitați `import * as x` sau importați obiecte mari)
- Export: Dezactivează exportul de obiecte. Exportați funcțiile și variabilele ca unități, cum ar fi `export const X=1, abc=()=>{};`. Încercați să le combinați cu const + virgulă pentru a declara conținutul exportat. Dacă un fișier are o singură funcție, utilizați `export default`
- Cu excepția cazului în care trebuie să apelați intern funcția implicită de export, evitați mai întâi declararea constantelor și apoi exportarea lor la sfârșitul fișierului.
- Rezoluția căii: atunci când obțineți calea curentă a directorului, trebuie utilizat `import.meta.dirname`

## greşeală

- Evitați erorile de șir și utilizați const pentru a declara coduri de eroare constante.
- Dacă trebuie să returnați informații greșite de date, utilizați [cod de eroare, mesaj de eroare,...] În acest fel, mesajul de eroare nu este o descriere text, ci o valoare numerică (cum ar fi [FILE_OVERSIZE, file_size, max_size])
-

## Încercați să utilizați API-uri compatibile cu browser

- Criptare și decriptare: forțați utilizarea API-ului Web Crypto nativ
- Date binare: atunci când aveți de-a face cu binare, încercați să utilizați `Uint8Array` uniform