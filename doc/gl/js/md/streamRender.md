# md/streamRender.js

Renderizado de streaming Markdown

## default(container, source)

Transmisión de texto de Markdown no contenedor DOM especificado, compatible con efectos de cursor de máquina de escribir e desprazamento automático

parámetro:
- `container` : elemento do contedor DOM que aloxa contido renderizado
- `source` : fonte de datos de texto ReadableStream

Valor de retorno:

- `cancel` : función para deter a renderización e a lectura do fluxo de datos
- `setStop` : función para definir se se debe pausar o desprazamento automático
  - parámetro
    - `val`: valor booleano para pausar ou non