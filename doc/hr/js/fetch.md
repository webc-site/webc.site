# fetch.js

Funkcija alata za mrežni zahtjev temeljena na enkapsulaciji dohvaćanja

## F(url, opt)

Pošaljite mrežni zahtjev i vratite objekt odgovora

parametar:
- `url` : Adresa zahtjeva
- `opt` : `fetch` objekt opcija

Povratna vrijednost: Objekt odgovora

## f(attr)

Funkcija višeg reda koja obavija zahtjev i analizira vraćeni sadržaj u određenom formatu

parametar:
- `attr` : naziv atributa analize tijela odgovora

Povratna vrijednost: funkcija za asinkroni zahtjev i analizu sadržaja
  - parametar
    - `url` : Adresa zahtjeva
    - `opt` : `fetch` objekt opcija
  - Povratna vrijednost: raščlanjeni sadržaj

## fTxt

Pošaljite mrežni zahtjev i vratite tijelo odgovora u tekstualnom formatu

parametar:
- `url` : Adresa zahtjeva
- `opt` : `fetch` objekt opcija

Povratna vrijednost: tekst odgovora

## fJson(url, opt)

Pošaljite mrežni zahtjev i raščlanite i vratite tijelo odgovora u JSON formatu

parametar:
- `url` : Adresa zahtjeva
- `opt` : `fetch` objekt opcija

Povratna vrijednost: raščlanjeni JSON objekt

## fBin(url, opt)

Pošaljite mrežni zahtjev i vratite tijelo odgovora kao binarno polje bajtova

parametar:
- `url` : Adresa zahtjeva
- `opt` : `fetch` objekt opcija

Povratna vrijednost: niz bajtova