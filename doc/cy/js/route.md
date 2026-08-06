# route.js

Rheolaeth llwybro pen blaen un dudalen

## nowUrl()

Cael y llwybr URL presennol gyda'r slaes arweiniol wedi'i dynnu

Gwerth dychwelyd: llinyn llwybr cyfredol

## route(hook)

Cofrestrwch yr alwad gwrando yn ôl ar gyfer newidiadau llwybr. Wrth gofrestru, bydd yn cael ei weithredu unwaith gyda'r llwybr presennol.

paramedr:
- `hook` : Swyddogaeth monitro llwybr galw'n ôl
  - paramedr
    - `url` : llwybr presennol
    - `pre` : llwybr olaf

Gwerth dychwelyd: Swyddogaeth glanhau heb ei gofrestru

## setPre(url)

Arbedwch yr URL diwethaf a gofnodwyd

paramedr:
- `url` : llinyn llwybr

## preUrl()

Cael URL y cofnod diwethaf

Gwerth dychwelyd: llinyn llwybr olaf

## refresh(url)

Gorfodi holl alwadau gwrando llwybr yn cael eu sbarduno ar y llwybr penodedig a diweddaru cyn

paramedr:
- `url` : llwybr targed, llwybr presennol diofyn

## removeSlash(url)

Tynnwch slaes o benawdau'r llwybr

paramedr:
- `url` : llinyn llwybr

Gwerth dychwelyd: llwybr ar ôl tynnu'r slaes arweiniol

## setUrl(url)

Diweddaru statws URL bar cyfeiriad porwr

paramedr:
- `url` : llwybr targed

Gwerth dychwelyd: 1 os yw'r llwybr yn newid mewn gwirionedd

## goto(url)

Diweddarwch gyfeiriad y porwr a sbarduno adnewyddiad llwybr

paramedr:
- `url` : llwybr targed