# fetch.js

Funkce nástroje síťového požadavku založená na zapouzdření načítání

## F(url, opt)

Odešlete síťový požadavek a vraťte objekt odpovědi

parametr:
- `url` : Adresa požadavku
- `opt` : `fetch` objekt možností

Návratová hodnota: Objekt odpovědi

## f(attr)

Funkce vyššího řádu, která zabalí požadavek a analyzuje vrácený obsah v určeném formátu

parametr:
- `attr` : název atributu analýzy těla odpovědi

Návratová hodnota: funkce pro asynchronní vyžádání a analýzu obsahu
  - parametr
    - `url` : Adresa požadavku
    - `opt` : `fetch` objekt možností
  - Návratová hodnota: analyzovaný obsah

## fTxt

Odešlete síťový požadavek a vraťte tělo odpovědi v textovém formátu

parametr:
- `url` : Adresa požadavku
- `opt` : `fetch` objekt možností

Návratová hodnota: text odpovědi

## fJson(url, opt)

Odešlete síťový požadavek a analyzujte a vraťte tělo odpovědi ve formátu JSON

parametr:
- `url` : Adresa požadavku
- `opt` : `fetch` objekt možností

Návratová hodnota: analyzovaný objekt JSON

## fBin(url, opt)

Odešlete síťový požadavek a vraťte tělo odpovědi jako pole binárních bajtů

parametr:
- `url` : Adresa požadavku
- `opt` : `fetch` objekt možností

Návratová hodnota: bajtové pole