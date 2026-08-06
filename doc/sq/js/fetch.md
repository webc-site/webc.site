# fetch.js

Funksioni i mjetit të kërkesës së rrjetit bazuar në kapsulimin e marrjes

## F(url, opt)

Dërgoni një kërkesë rrjeti dhe ktheni një objekt përgjigjeje

parametri:
- `url` : Kërko adresën
- `opt` : `fetch` objekt opsionesh

Vlera e kthimit: Objekti i përgjigjes

## f(attr)

Një funksion i rendit më të lartë që mbështjell një kërkesë dhe analizon përmbajtjen e kthyer në një format të caktuar

parametri:
- `attr` : emri i atributit të analizës së trupit të përgjigjes

Vlera e kthimit: funksioni për të kërkuar dhe analizuar në mënyrë asinkrone përmbajtjen
  - parametri
    - `url` : Kërko adresën
    - `opt` : `fetch` objekt opsionesh
  - Vlera e kthimit: përmbajtje e analizuar

## fTxt

Dërgoni një kërkesë rrjeti dhe kthejeni trupin e përgjigjes në format teksti

parametri:
- `url` : Kërko adresën
- `opt` : `fetch` objekt opsionesh

Vlera e kthimit: teksti i përgjigjes

## fJson(url, opt)

Dërgoni një kërkesë rrjeti dhe analizoni dhe ktheni trupin e përgjigjes në formatin JSON

parametri:
- `url` : Kërko adresën
- `opt` : `fetch` objekt opsionesh

Vlera e kthimit: objekt JSON i analizuar

## fBin(url, opt)

Dërgoni një kërkesë rrjeti dhe ktheni trupin e përgjigjes si një grup binar bite

parametri:
- `url` : Kërko adresën
- `opt` : `fetch` objekt opsionesh

Vlera e kthimit: grup bajt