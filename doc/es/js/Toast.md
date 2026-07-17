# Toast.js

Mensaje emergente de brindis

## toast(render, timeout)

Mostrar ventana emergente de aviso estándar

parámetro:
- `render`: función de renderizado, utilizada para personalizar el contenido emergente
  - parámetro
    - `el` : elemento DOM de la ventana emergente
- `timeout`: Segundos de retraso para el apagado automático, valor predeterminado 9, sin apagado automático cuando 0

Valor de retorno: elemento DOM de la ventana emergente

## toastErr(render, timeout)

Mostrar ventana emergente de mensaje de error

parámetro:
- `render`: función de renderizado, utilizada para personalizar el contenido emergente
  - parámetro
    - `el` : elemento DOM de la ventana emergente
- `timeout`: Segundos de retraso para el apagado automático, valor predeterminado 9, sin apagado automático cuando 0

Valor de retorno: elemento DOM de la ventana emergente de error