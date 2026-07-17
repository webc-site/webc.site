# fetchLang.js

Cargue paquetes de idiomas de forma asincrónica y vincule devoluciones de llamadas de actualización

## fetchLang(getDict)

Cree un oyente del paquete de idioma para obtener el paquete de idioma de forma asincrónica y ejecutar una devolución de llamada de actualización cuando el idioma cambie.

parámetro:
- `getDict`: obtiene la función asincrónica del paquete de idioma
  - parámetro
    - `code` : código de idioma
  - Valor de retorno: diccionario del paquete de idioma

Valor de retorno: función para registrar la devolución de llamada de actualización
- parámetro
  - `refresh`: Actualiza la función de devolución de llamada cuando se actualiza el idioma
    - parámetro
      - `i18n` : objeto de diccionario del paquete de idioma
      - `code` : Código de idioma actual
- Valor de retorno: función para cancelar el registro de la devolución de llamada de actualización