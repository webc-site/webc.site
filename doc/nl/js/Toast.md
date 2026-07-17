# Toast.js

Toast-pop-upberichtprompt

## toast(render, timeout)

Toon standaard promptpop-upvenster

parameter:
- `render` : Weergavefunctie, gebruikt om pop-upinhoud aan te passen
  - parameter
    - `el` : DOM-element van het pop-upvenster
- `timeout` : Vertragingsseconden voor automatische uitschakeling, standaard 9, geen automatische uitschakeling bij 0

Retourwaarde: DOM-element van het pop-upvenster

## toastErr(render, timeout)

Pop-up met foutmelding weergeven

parameter:
- `render` : Weergavefunctie, gebruikt om pop-upinhoud aan te passen
  - parameter
    - `el` : DOM-element van het pop-upvenster
- `timeout` : Vertragingsseconden voor automatische uitschakeling, standaard 9, geen automatische uitschakeling bij 0

Retourwaarde: DOM-element van het pop-upvenster met fouten