# c-t.js

Internacionalización HTML

La etiqueta `<c-t>key</c-t>` está personalizada y `key` es la clave del paquete de idioma.

## cTranSet(el, genUrl)

Establezca el texto para `c-t`.

parámetro:
- `el`: elemento raíz, global se puede pasar en `document`
- `genUrl`: función para obtener el diccionario del paquete de idioma
  - parámetro
    - `code` : código de idioma
  - Valor de retorno: un objeto de diccionario de paquete de idioma o una promesa que se resuelve en este objeto