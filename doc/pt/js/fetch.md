# fetch.js

Função da ferramenta de solicitação de rede baseada no encapsulamento de busca

## F(url, opt)

Envie uma solicitação de rede e retorne um objeto de resposta

parâmetro:
- `url` : Endereço da solicitação
- `opt` : `fetch` objeto de opções

Valor de retorno: objeto de resposta

## f(attr)

Uma função de ordem superior que agrupa uma solicitação e analisa o conteúdo retornado em um formato especificado

parâmetro:
- `attr` : nome do atributo de análise do corpo da resposta

Valor de retorno: função para solicitar e analisar conteúdo de forma assíncrona
  - parâmetro
    - `url` : Endereço da solicitação
    - `opt` : `fetch` objeto de opções
  - Valor de retorno: conteúdo analisado

## fTxt

Envie uma solicitação de rede e retorne o corpo da resposta em formato de texto

parâmetro:
- `url` : Endereço da solicitação
- `opt` : `fetch` objeto de opções

Valor de retorno: texto de resposta

## fJson(url, opt)

Envie uma solicitação de rede e analise e retorne o corpo da resposta no formato JSON

parâmetro:
- `url` : Endereço da solicitação
- `opt` : `fetch` objeto de opções

Valor de retorno: objeto JSON analisado

## fBin(url, opt)

Envie uma solicitação de rede e retorne o corpo da resposta como uma matriz de bytes binários

parâmetro:
- `url` : Endereço da solicitação
- `opt` : `fetch` objeto de opções

Valor de retorno: matriz de bytes