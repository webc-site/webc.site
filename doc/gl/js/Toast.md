# Toast.js

Mensaxe emerxente de brinde

## toast(render, timeout)

Mostrar a ventá emerxente de aviso estándar

parámetro:
- `render` : función de renderizado que se usa para personalizar o contido emerxente
  - parámetro
    - `el` : elemento DOM da ventá emerxente
- `timeout`: segundos de atraso para o apagado automático, predeterminado 9, sen apagado automático cando 0

Valor de retorno: elemento DOM da ventá emerxente

## toastErr(render, timeout)

Mostrar a mensaxe emerxente de erro

parámetro:
- `render` : función de renderizado que se usa para personalizar o contido emerxente
  - parámetro
    - `el` : elemento DOM da ventá emerxente
- `timeout`: segundos de atraso para o apagado automático, predeterminado 9, sen apagado automático cando 0

Valor de retorno: elemento DOM da ventá emerxente de erro