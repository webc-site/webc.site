# route.js

Xestión de enrutamento front-end dunha soa páxina

## nowUrl()

Obtén a ruta do URL actual coa barra inclinada inicial eliminada

Valor de retorno: cadea de ruta actual

## route(hook)

Rexistra a devolución de chamada de escoita para os cambios de ruta. Ao rexistrarse, executarase unha vez coa ruta actual.

parámetro:
- `hook` : función de devolución de chamada de seguimento de rutas
  - parámetro
    - `url`: ruta actual
    - `pre`: último camiño

Valor de retorno: función de limpeza non rexistrada

## setPre(url)

Garda o último URL gravado

parámetro:
- `url` : cadea de ruta

## preUrl()

Obter o URL do último rexistro

Valor de retorno: última cadea de ruta

## refresh(url)

Forzar que todas as devolucións de chamada de escoita de rutas se activen na ruta especificada e actualízase previamente

parámetro:
- `url` : ruta de destino, ruta actual predeterminada

## removeSlash(url)

Elimina as barras inclinadas das cabeceiras das rutas

parámetro:
- `url` : cadea de ruta

Valor de retorno: camiño despois de eliminar a barra inclinada inicial

## setUrl(url)

Actualiza o estado do URL da barra de enderezos do navegador

parámetro:
- `url`: camiño de destino

Valor de retorno: 1 se o camiño realmente cambia

## goto(url)

Actualiza o enderezo do navegador e activa unha actualización da ruta

parámetro:
- `url`: camiño de destino