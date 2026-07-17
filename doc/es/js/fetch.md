# fetch.js

Función de herramienta de solicitud de red basada en encapsulación de recuperación

## F(url, opt)

Enviar una solicitud de red y devolver un objeto de respuesta

parámetro:
- `url` : Solicitar dirección
- `opt` : `fetch` objeto de opciones

Valor de retorno: objeto de respuesta

## f(attr)

Una función de orden superior que envuelve una solicitud y analiza el contenido devuelto en un formato específico.

parámetro:
- `attr`: nombre del atributo de análisis del cuerpo de la respuesta

Valor de retorno: función para solicitar y analizar contenido de forma asincrónica
  - parámetro
    - `url` : Solicitar dirección
    - `opt` : `fetch` objeto de opciones
  - Valor de retorno: contenido analizado

## fTxt

Enviar una solicitud de red y devolver el cuerpo de la respuesta en formato de texto

parámetro:
- `url` : Solicitar dirección
- `opt` : `fetch` objeto de opciones

Valor de retorno: texto de respuesta

## fJson(url, opt)

Envíe una solicitud de red y analice y devuelva el cuerpo de la respuesta en formato JSON

parámetro:
- `url` : Solicitar dirección
- `opt` : `fetch` objeto de opciones

Valor de retorno: objeto JSON analizado

## fBin(url, opt)

Enviar una solicitud de red y devolver el cuerpo de la respuesta como una matriz de bytes binarios

parámetro:
- `url` : Solicitar dirección
- `opt` : `fetch` objeto de opciones

Valor de retorno: matriz de bytes