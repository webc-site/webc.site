# Toast.js

Toast popup-meddelande prompt

## toast(render, timeout)

Visa standard popup-fönster

parameter:
- `render` : Återgivningsfunktion, används för att anpassa popup-innehåll
  - parameter
    - `el` : DOM-element i popup-fönstret
- `timeout` : Fördröjning sekunder för automatisk avstängning, standard 9, ingen automatisk avstängning när 0

Returvärde: DOM-element i popup-fönstret

## toastErr(render, timeout)

Visa felmeddelande popup

parameter:
- `render` : Återgivningsfunktion, används för att anpassa popup-innehåll
  - parameter
    - `el` : DOM-element i popup-fönstret
- `timeout` : Fördröjning sekunder för automatisk avstängning, standard 9, ingen automatisk avstängning när 0

Returvärde: DOM-element i popup-fönstret för fel