
  Pentru componenta `js`, implementați componenta folosind `Light DOM` în `src/webc/componentname.js`.

  Utilizați căi relative pentru a importa alte componente, cum ar fi: `import "./component name.js"` (În fișierul JS al fiecărei componente, importați mai întâi dependențele, apoi importați `_.styl` corespunzător, de exemplu `import "./component name/_.styl";`).

  `this` Definiți numai funcția nativă de apel invers a componentei web, scrieți celelalte ca funcții independente, transmiteți `this` și parametrii necesari.

  În plus față de interfețele expuse extern, pentru a facilita optimizarea tree-shaking și compresia codului, este interzisă legarea de atribute private personalizate pe `this` (utilizați `this.$` pentru funcții de descărcare), iar funcțiile de ordin înalt pot fi folosite pentru a returna închideri pentru a păstra variabile intermediare.

  Nu scrieți `constructor`, atributul este obținut în `connectedCallback`.


  Consultați [./js.md](./js.md) pentru a reutiliza funcțiile publice din `src/js/`

  Pentru containere, utilizați `slot` în loc de atribute.
  Dacă trebuie să încărcați date, expuneți interfața de încărcare la stratul superior sub forma unei funcții de apel invers asincron și utilizați comentarii pentru a indica formatul valorii returnate.
  Componentele trebuie să evite scurgerile de memorie. `disconnectedCallback` îmbina evenimentele de dezinstalare într-o singură funcție `this.$` și nu scrie mai multe funcții de dezinstalare.
  Valoarea de returnare a interfeței poate fi o singură valoare, o matrice sau o matrice de matrice, nu un obiect.
  Dacă componenta are mai multe stări, utilizați comentarii pe mai multe rânduri pentru a descrie clar formatul de date al fiecărei stări. (Nu precede fiecare rând de comentarii cu `*`)
  Comutarea stării, folosind constante numerice (definite la `const.js`).
  Când se încarcă apelul invers, utilizați `const xx = newEl('b');xx.className="Ing"` pentru a afișa animația și introduceți dependențe prin `import "./Ing.js"` în fișierul component JS.