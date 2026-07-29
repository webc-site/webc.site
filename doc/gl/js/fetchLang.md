# fetchLang.js

Carga asíncrona paquetes de idioma e vincula as devolucións de chamada de actualización

## fetchLang(getDict)

Crea un oínte do paquete de idioma para obter o paquete de idioma de forma asíncrona e executar unha devolución de chamada de actualización cando o idioma cambie

parámetro:
- `getDict` : obtén a función asíncrona do paquete de idiomas
  - parámetro
    - `code` : código de idioma
  - Valor de retorno: dicionario do paquete de idiomas

Valor de retorno: función para rexistrar a devolución de chamada de actualización
- parámetro
  - `refresh`: actualiza a función de devolución de chamada cando se actualiza o idioma
    - parámetro
      - `i18n` : obxecto dicionario do paquete de idiomas
      - `code` : código de idioma actual
- Valor de retorno: función para anular o rexistro da devolución de chamada de actualización