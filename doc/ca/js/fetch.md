# fetch.js

Funció de l'eina de sol·licitud de xarxa basada en l'encapsulació d'obtenció

## F(url, opt)

Envieu una sol·licitud de xarxa i retorneu un objecte de resposta

paràmetre:
- `url` : adreça de sol·licitud
- `opt` : `fetch` objecte d'opcions

Valor de retorn: objecte de resposta

## f(attr)

Una funció d'ordre superior que embolcalla una sol·licitud i analitza el contingut retornat en un format especificat

paràmetre:
- `attr` : nom de l'atribut d'anàlisi del cos de la resposta

Valor de retorn: funció per demanar i analitzar contingut de manera asíncrona
  - paràmetre
    - `url` : adreça de sol·licitud
    - `opt` : `fetch` objecte d'opcions
  - Valor de retorn: contingut analitzat

## fTxt

Envieu una sol·licitud de xarxa i retorneu el cos de la resposta en format de text

paràmetre:
- `url` : adreça de sol·licitud
- `opt` : `fetch` objecte d'opcions

Valor de retorn: text de resposta

## fJson(url, opt)

Envieu una sol·licitud de xarxa i analitzeu i retorneu el cos de la resposta en format JSON

paràmetre:
- `url` : adreça de sol·licitud
- `opt` : `fetch` objecte d'opcions

Valor de retorn: objecte JSON analitzat

## fBin(url, opt)

Envieu una sol·licitud de xarxa i retorneu el cos de la resposta com a matriu de bytes binaris

paràmetre:
- `url` : adreça de sol·licitud
- `opt` : `fetch` objecte d'opcions

Valor de retorn: matriu de bytes