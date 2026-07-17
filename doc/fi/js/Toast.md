# Toast.js

Toast-ponnahdusviestikehote

## toast(render, timeout)

Näytä normaali kehotteen ponnahdusikkuna

parametri:
- `render` : Renderöintitoiminto, jota käytetään ponnahdusikkunoiden sisällön mukauttamiseen
  - parametri
    - `el` : ponnahdusikkunan DOM-elementti
- `timeout` : Automaattisen sammutuksen viive, oletus 9, ei automaattista sammutusta, kun 0

Palautusarvo: ponnahdusikkunan DOM-elementti

## toastErr(render, timeout)

Näytä virheilmoituksen ponnahdusikkuna

parametri:
- `render` : Renderöintitoiminto, jota käytetään ponnahdusikkunoiden sisällön mukauttamiseen
  - parametri
    - `el` : ponnahdusikkunan DOM-elementti
- `timeout` : Automaattisen sammutuksen viive, oletus 9, ei automaattista sammutusta, kun 0

Palautusarvo: virheponnahdusikkunan DOM-elementti