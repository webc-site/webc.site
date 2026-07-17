# md/streamRender.js

Representación de transmisión de rebajas

## default(container, source)

Transmisión en streaming de texto Markdown al contenedor DOM especificado, compatible con efectos de cursor de máquina de escribir y desplazamiento automático

parámetro:
- `container`: elemento contenedor DOM que aloja contenido renderizado
- `source`: fuente de datos de texto ReadableStream

Valor de retorno:

- `cancel`: Función para detener la renderización y la lectura del flujo de datos
- `setStop`: Función para establecer si se debe pausar el desplazamiento automático
  - parámetro
    - `val`: valor booleano para pausar o no