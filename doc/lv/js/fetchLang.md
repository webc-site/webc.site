# fetchLang.js

Asinhroni ielādējiet valodu pakotnes un saistiet atjauninājumu atzvanus

## fetchLang(getDict)

Izveidojiet valodas pakotnes klausītāju, lai asinhroni iegūtu valodas pakotni un veiktu atsvaidzināšanas atzvanīšanu, kad valoda mainās

parametrs:
- `getDict` : iegūstiet valodas pakotnes asinhrono funkciju
  - parametrs
    - `code` : valodas kods
  - Atgriešanas vērtība: valodu pakotnes vārdnīca

Atgriešanas vērtība: funkcija, lai reģistrētu atsvaidzināšanas atzvanīšanu
- parametrs
  - `refresh` : atsvaidziniet atzvanīšanas funkciju, kad valoda ir atjaunināta
    - parametrs
      - `i18n` : valodu pakotnes vārdnīcas objekts
      - `code` : pašreizējās valodas kods
- Atgriešanas vērtība: funkcija, lai atceltu atsvaidzināšanas atzvana reģistrāciju