# c-t.js

Internacionalización HTML

A etiqueta `<c-t>key</c-t>` está personalizada e `key` é a clave do paquete de idioma.

## cTranSet(el, genUrl)

Establece o texto para `c-t`.

parámetro:
- `el` : elemento raíz, global pódese pasar en `document`
- `genUrl` : función para obter o dicionario do paquete de idiomas
  - parámetro
    - `code` : código de idioma
  - Valor de retorno: un obxecto de dicionario do paquete de idiomas ou un Promise que resolve este obxecto