# fetch.js

Ang function sa tool sa paghangyo sa network base sa pagkuha sa encapsulation

## F(url, opt)

Pagpadala usa ka hangyo sa network ug ibalik ang usa ka butang nga tubag

parameter:
- `url` : Pangayo og adres
- `opt` : `fetch` mga opsyon nga butang

Ibalik nga bili: Tubag nga butang

## f(attr)

Usa ka mas taas nga han-ay nga function nga nagputos sa usa ka hangyo ug nag-parse sa gibalik nga sulod sa usa ka piho nga format

parameter:
- `attr` : ngalan sa attribute sa pag-parse sa lawas sa tubag

Ibalik ang bili: function sa asynchronous nga paghangyo ug pag-parse sa sulod
  - parametro
    - `url` : Pangayo og adres
    - `opt` : `fetch` mga opsyon nga butang
  - Ibalik nga bili: gi-parse nga sulod

## fTxt

Pagpadala usa ka hangyo sa network ug ibalik ang lawas sa tubag sa format sa teksto

parameter:
- `url` : Pangayo og adres
- `opt` : `fetch` mga opsyon nga butang

Ibalik nga bili: tubag nga teksto

## fJson(url, opt)

Pagpadala usa ka hangyo sa network ug pag-parse ug ibalik ang lawas sa pagtubag sa format nga JSON

parameter:
- `url` : Pangayo og adres
- `opt` : `fetch` mga opsyon nga butang

Ibalik nga bili: gi-parse ang JSON nga butang

## fBin(url, opt)

Ipadala ang hangyo sa network ug ibalik ang tubag nga lawas isip binary byte array

parameter:
- `url` : Pangayo og adres
- `opt` : `fetch` mga opsyon nga butang

Ibalik nga bili: byte array