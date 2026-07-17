# fetch.js

Pag-andar ng tool sa kahilingan sa network batay sa fetch encapsulation

## F(url, opt)

Magpadala ng kahilingan sa network at magbalik ng object ng tugon

parameter:
- `url` : Humiling ng address
- `opt` : `fetch` object ng mga opsyon

Return value: Response object

## f(attr)

Isang function na mas mataas ang pagkakasunud-sunod na bumabalot sa isang kahilingan at nag-parse ng ibinalik na nilalaman sa isang tinukoy na format

parameter:
- `attr` : pangalan ng attribute ng pag-parse ng katawan ng tugon

Return value: function na asynchronously humiling at mag-parse ng content
  - parameter
    - `url` : Humiling ng address
    - `opt` : `fetch` object ng mga opsyon
  - Ibinalik na halaga: na-parse na nilalaman

## fTxt

Magpadala ng kahilingan sa network at ibalik ang katawan ng tugon sa format ng teksto

parameter:
- `url` : Humiling ng address
- `opt` : `fetch` object ng mga opsyon

Return value: text ng tugon

## fJson(url, opt)

Magpadala ng kahilingan sa network at i-parse at ibalik ang katawan ng tugon sa format na JSON

parameter:
- `url` : Humiling ng address
- `opt` : `fetch` object ng mga opsyon

Return value: na-parse na JSON object

## fBin(url, opt)

Magpadala ng kahilingan sa network at ibalik ang response body bilang isang binary byte array

parameter:
- `url` : Humiling ng address
- `opt` : `fetch` object ng mga opsyon

Ibinalik na halaga: byte array