# Toast.js

Toast pop-up besked prompt

## toast(render, timeout)

Vis standard prompt pop-up vindue

parameter:
- `render` : Gengivelsesfunktion, bruges til at tilpasse pop op-indhold
  - parameter
    - `el` : DOM-element i pop op-vinduet
- `timeout` : Forsinkelse sekunder for automatisk nedlukning, standard 9, ingen automatisk nedlukning, når 0

Returværdi: DOM-element i pop op-vinduet

## toastErr(render, timeout)

Vis fejlmeddelelse popup

parameter:
- `render` : Gengivelsesfunktion, bruges til at tilpasse pop op-indhold
  - parameter
    - `el` : DOM-element i pop op-vinduet
- `timeout` : Forsinkelse sekunder for automatisk nedlukning, standard 9, ingen automatisk nedlukning, når 0

Returværdi: DOM-element i fejl-pop-up-vinduet