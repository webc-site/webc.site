# route.js

Gestión de enrutamiento front-end de una sola página

## nowUrl()

Obtener la ruta URL actual sin la barra diagonal inicial

Valor de retorno: cadena de ruta actual

## route(hook)

Registre la devolución de llamada de escucha para cambios de ruta. Al registrarse, se ejecutará una vez con la ruta actual.

parámetro:
- `hook`: Función de devolución de llamada de monitoreo de ruta
  - parámetro
    - `url`: ruta actual
    - `pre` : última ruta

Valor de retorno: función de limpieza no registrada

## setPre(url)

Guarde la última URL registrada

parámetro:
- `url`: cadena de ruta

## preUrl()

Obtener la URL del último registro

Valor de retorno: última cadena de ruta

## refresh(url)

Fuerce que todas las devoluciones de llamadas de escucha de ruta se activen en la ruta especificada y actualice previamente

parámetro:
- `url`: ruta de destino, ruta actual predeterminada

## removeSlash(url)

Eliminar barras de los encabezados de las rutas

parámetro:
- `url`: cadena de ruta

Valor de retorno: ruta después de eliminar la barra diagonal inicial

## setUrl(url)

Actualizar el estado de la URL de la barra de direcciones del navegador

parámetro:
- `url`: ruta de destino

Valor de retorno: 1 si la ruta realmente cambia

## goto(url)

Actualice la dirección del navegador y active una actualización de ruta

parámetro:
- `url`: ruta de destino