# Toast.js

Solicitare mesaj pop-up Toast

## toast(render, timeout)

Afișați o fereastră pop-up standard

parametru:
- `render` : funcție de randare, utilizată pentru a personaliza conținutul pop-up
  - parametru
    - `el` : element DOM al ferestrei pop-up
- `timeout`: Întârziere secunde pentru oprirea automată, implicit 9, fără oprire automată când 0

Valoarea returnată: elementul DOM al ferestrei pop-up

## toastErr(render, timeout)

Afișează mesajul de eroare pop-up

parametru:
- `render` : funcție de randare, utilizată pentru a personaliza conținutul pop-up
  - parametru
    - `el` : element DOM al ferestrei pop-up
- `timeout`: Întârziere secunde pentru oprirea automată, implicit 9, fără oprire automată când 0

Valoarea returnată: elementul DOM al ferestrei pop-up de eroare