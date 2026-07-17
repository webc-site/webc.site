# fetchLang.js

Încărcați asincron pachete de limbi și legați apelurile de actualizare

## fetchLang(getDict)

Creați un ascultător al pachetului de limbi pentru a obține în mod asincron pachetul de limbi și pentru a executa un apel invers de reîmprospătare atunci când limba se schimbă

parametru:
- `getDict` : obțineți funcția asincronă a pachetului de limbi
  - parametru
    - `code` : cod de limbă
  - Valoarea returnată: dicționar pachet de limbi

Valoarea de returnare: funcție de înregistrare a apelului de reîmprospătare
- parametru
  - `refresh` : reîmprospătați funcția de apel invers când limba este actualizată
    - parametru
      - `i18n` : obiect dicționar al pachetului lingvistic
      - `code` : codul limbii curente
- Valoarea returnată: funcție de anulare a înregistrării apelului de reîmprospătare