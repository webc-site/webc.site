# c-t.js

Internacionalização HTML

A tag `<c-t>key</c-t>` é personalizada e `key` é a chave do pacote de idiomas.

## cTranSet(el, genUrl)

Defina o texto para `c-t`.

parâmetro:
- `el` : elemento raiz, global pode ser passado em `document`
- `genUrl` : função para obter o dicionário do pacote de idiomas
  - parâmetro
    - `code` : código do idioma
  - Valor de retorno: um objeto de dicionário de pacote de idiomas ou uma promessa que resolve esse objeto