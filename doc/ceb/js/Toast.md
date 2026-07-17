# Toast.js

Toast pop-up nga mensahe prompt

## toast(render, timeout)

Ipakita ang standard prompt pop-up window

parameter:
- `render` : Pag-render function, gigamit sa pag-customize sa pop-up content
  - parametro
    - `el` : DOM nga elemento sa pop-up window
- `timeout` : Paglangan sa mga segundo para sa awtomatik nga pagsira, default 9, walay awtomatikong pagsira kung 0

Ibalik nga bili: DOM nga elemento sa pop-up nga bintana

## toastErr(render, timeout)

Ipakita ang popup nga mensahe sa sayup

parameter:
- `render` : Pag-render function, gigamit sa pag-customize sa pop-up content
  - parametro
    - `el` : DOM nga elemento sa pop-up window
- `timeout` : Paglangan sa mga segundo para sa awtomatik nga pagsira, default 9, walay awtomatikong pagsira kung 0

Ibalik nga bili: DOM nga elemento sa error pop-up window