# Toast.js

Toast popup-melding

## toast(render, timeout)

Vis standard popup-vindu

parameter:
- `render` : Gjengivelsesfunksjon, brukes til å tilpasse popup-innhold
  - parameter
    - `el` : DOM-element i popup-vinduet
- `timeout` : Forsinkelse sekunder for automatisk avslutning, standard 9, ingen automatisk avstenging når 0

Returverdi: DOM-element i popup-vinduet

## toastErr(render, timeout)

Vis feilmeldingspopup

parameter:
- `render` : Gjengivelsesfunksjon, brukes til å tilpasse popup-innhold
  - parameter
    - `el` : DOM-element i popup-vinduet
- `timeout` : Forsinkelse sekunder for automatisk avslutning, standard 9, ingen automatisk avstenging når 0

Returverdi: DOM-element i popup-vinduet for feil