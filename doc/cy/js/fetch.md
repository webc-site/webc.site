# fetch.js

Swyddogaeth offeryn cais rhwydwaith yn seiliedig ar amgáu nôl

## F(url, opt)

Anfon cais rhwydwaith a dychwelyd gwrthrych ymateb

paramedr:
- `url` : Cyfeiriad y cais
- `opt` : `fetch` gwrthrych opsiynau

Gwerth dychwelyd: Gwrthrych ymateb

## f(attr)

Swyddogaeth lefel uwch sy'n lapio cais ac yn dosrannu'r cynnwys a ddychwelwyd mewn fformat penodedig

paramedr:
- `attr` : enw priodoledd dosrannu corff ymateb

Gwerth dychwelyd: swyddogaeth i ofyn am a dosrannu cynnwys yn asyncronig
  - paramedr
    - `url` : Cyfeiriad y cais
    - `opt` : `fetch` gwrthrych opsiynau
  - Gwerth dychwelyd: cynnwys wedi'i ddosrannu

## fTxt

Anfon cais rhwydwaith a dychwelyd y corff ymateb ar ffurf testun

paramedr:
- `url` : Cyfeiriad y cais
- `opt` : `fetch` gwrthrych opsiynau

Gwerth dychwelyd: testun ymateb

## fJson(url, opt)

Anfon cais rhwydwaith a dosrannu a dychwelyd y corff ymateb mewn fformat JSON

paramedr:
- `url` : Cyfeiriad y cais
- `opt` : `fetch` gwrthrych opsiynau

Gwerth dychwelyd: gwrthrych JSON wedi'i ddosrannu

## fBin(url, opt)

Anfon cais rhwydwaith a dychwelyd y corff ymateb fel arae beit ddeuaidd

paramedr:
- `url` : Cyfeiriad y cais
- `opt` : `fetch` gwrthrych opsiynau

Gwerth dychwelyd: arae beit