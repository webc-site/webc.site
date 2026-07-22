# md/streamRender.js

Renderização de streaming Markdown

## default(container, source)

Streaming de renderização de texto Markdown no contêiner DOM especificado, suportando efeitos de cursor de máquina de escrever e rolagem automática

parâmetro:
- `container` : elemento contêiner DOM que hospeda conteúdo renderizado
- `source` : fonte de dados de texto ReadableStream

Valor de retorno:

- `cancel` : Função para interromper a renderização e a leitura do fluxo de dados
- `setStop` : Função para definir se a rolagem automática deve ser pausada
  - parâmetro
    - `val` : valor booleano para pausar ou não