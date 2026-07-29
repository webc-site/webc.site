# fetch.js

Tinklo užklausos įrankio funkcija, pagrįsta gavimo inkapsuliacija

## F(url, opt)

Išsiųskite tinklo užklausą ir grąžinkite atsakymo objektą

parametras:
- `url` : Prašyti adreso
- `opt` : `fetch` parinkčių objektas

Grąžinama vertė: atsako objektas

## f(attr)

Aukštesnės eilės funkcija, apvyniojanti užklausą ir išanalizuojanti grąžintą turinį nurodytu formatu

parametras:
- `attr` : atsakymo teksto analizės atributo pavadinimas

Grąžinimo reikšmė: funkcija, skirta asinchroniškai užklausti ir analizuoti turinį
  - parametras
    - `url` : Prašyti adreso
    - `opt` : `fetch` parinkčių objektas
  - Grąžinama vertė: išanalizuotas turinys

## fTxt

Išsiųskite tinklo užklausą ir grąžinkite atsakymo turinį teksto formatu

parametras:
- `url` : Prašyti adreso
- `opt` : `fetch` parinkčių objektas

Grąžinama reikšmė: atsakymo tekstas

## fJson(url, opt)

Išsiųskite tinklo užklausą ir išanalizuoti bei grąžinti atsakymo turinį JSON formatu

parametras:
- `url` : Prašyti adreso
- `opt` : `fetch` parinkčių objektas

Grąžinama vertė: išanalizuotas JSON objektas

## fBin(url, opt)

Išsiųskite tinklo užklausą ir grąžinkite atsakymo turinį kaip dvejetainį baitų masyvą

parametras:
- `url` : Prašyti adreso
- `opt` : `fetch` parinkčių objektas

Grąžinama vertė: baitų masyvas