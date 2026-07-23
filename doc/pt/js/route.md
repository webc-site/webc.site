# route.js

Gerenciamento de roteamento front-end de página única

## nowUrl()

Obtenha o caminho do URL atual com a barra inicial removida

Valor de retorno: string do caminho atual

## route(hook)

Registre o retorno de chamada de escuta para alterações de rota. Ao registrar, será executado uma vez com o caminho atual.

parâmetro:
- `hook` : função de retorno de chamada de monitoramento de rota
  - parâmetro
    - `url` : caminho atual
    - `pre` : último caminho

Valor de retorno: função de limpeza não registrada

## setPre(url)

Salve o último URL gravado

parâmetro:
- `url` : string de caminho

## preUrl()

Obtenha a URL do último registro

Valor de retorno: última string do caminho

## refresh(url)

Forçar todos os retornos de chamada de escuta de rota a serem acionados no caminho especificado e atualizar pré

parâmetro:
- `url` : caminho de destino, caminho atual padrão

## removeSlash(url)

Remover barras dos cabeçalhos dos caminhos

parâmetro:
- `url` : string de caminho

Valor de retorno: caminho após remover a barra inicial

## setUrl(url)

Atualizar o status do URL da barra de endereço do navegador

parâmetro:
- `url` : caminho de destino

Valor de retorno: 1 se o caminho realmente mudar

## goto(url)

Atualize o endereço do navegador e acione uma atualização de rota

parâmetro:
- `url` : caminho de destino