# fetch.js

Función da ferramenta de solicitude de rede baseada na encapsulación de recuperación

## F(url, opt)

Envía unha solicitude de rede e devolve un obxecto de resposta

parámetro:
- `url` : enderezo de solicitude
- `opt` : `fetch` obxecto de opcións

Valor de retorno: obxecto de resposta

## f(attr)

Unha función de orde superior que envolve unha solicitude e analiza o contido devolto nun formato especificado

parámetro:
- `attr` : nome do atributo de análise do corpo da resposta

Valor de retorno: función para solicitar e analizar contido de forma asíncrona
  - parámetro
    - `url` : enderezo de solicitude
    - `opt` : `fetch` obxecto de opcións
  - Valor de retorno: contido analizado

## fTxt

Envía unha solicitude de rede e devolve o corpo da resposta en formato de texto

parámetro:
- `url` : enderezo de solicitude
- `opt` : `fetch` obxecto de opcións

Valor de retorno: texto de resposta

## fJson(url, opt)

Envía unha solicitude de rede e analiza e devolve o corpo da resposta en formato JSON

parámetro:
- `url` : enderezo de solicitude
- `opt` : `fetch` obxecto de opcións

Valor de retorno: obxecto JSON analizado

## fBin(url, opt)

Envía unha solicitude de rede e devolve o corpo da resposta como unha matriz de bytes binarios

parámetro:
- `url` : enderezo de solicitude
- `opt` : `fetch` obxecto de opcións

Valor de retorno: matriz de bytes