# fetch.js

Funkcia nástroja sieťových požiadaviek založená na zapuzdrení načítania

## F(url, opt)

Odošlite sieťovú požiadavku a vráťte objekt odpovede

parameter:
- `url` : Žiadosť o adresu
- `opt` : `fetch` objekt možností

Návratová hodnota: Objekt odpovede

## f(attr)

Funkcia vyššieho rádu, ktorá obalí požiadavku a analyzuje vrátený obsah v určenom formáte

parameter:
- `attr` : názov atribútu analýzy tela odpovede

Návratová hodnota: funkcia na asynchrónne vyžiadanie a analýzu obsahu
  - parameter
    - `url` : Žiadosť o adresu
    - `opt` : `fetch` objekt možností
  - Návratová hodnota: analyzovaný obsah

## fTxt

Odošlite sieťovú požiadavku a vráťte telo odpovede v textovom formáte

parameter:
- `url` : Žiadosť o adresu
- `opt` : `fetch` objekt možností

Návratová hodnota: text odpovede

## fJson(url, opt)

Odošlite sieťovú požiadavku a analyzujte a vráťte telo odpovede vo formáte JSON

parameter:
- `url` : Žiadosť o adresu
- `opt` : `fetch` objekt možností

Návratová hodnota: analyzovaný objekt JSON

## fBin(url, opt)

Odošlite sieťovú požiadavku a vráťte telo odpovede ako pole binárnych bajtov

parameter:
- `url` : Žiadosť o adresu
- `opt` : `fetch` objekt možností

Návratová hodnota: bajtové pole