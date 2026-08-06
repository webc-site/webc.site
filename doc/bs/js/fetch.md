# fetch.js

Funkcija alata mrežnog zahtjeva zasnovana na enkapsulaciji preuzimanja

## F(url, opt)

Pošaljite mrežni zahtjev i vratite objekt odgovora

parametar:
- `url` : Zahtjev za adresu
- `opt` : `fetch` objekt opcija

Povratna vrijednost: Objekt odgovora

## f(attr)

Funkcija višeg reda koja obavija zahtjev i analizira vraćeni sadržaj u određenom formatu

parametar:
- `attr` : naziv atributa za raščlanjivanje tijela odgovora

Povratna vrijednost: funkcija za asinhrono traženje i raščlanjivanje sadržaja
  - parametar
    - `url` : Zahtjev za adresu
    - `opt` : `fetch` objekt opcija
  - Povratna vrijednost: raščlanjen sadržaj

## fTxt

Pošaljite mrežni zahtjev i vratite tijelo odgovora u tekstualnom formatu

parametar:
- `url` : Zahtjev za adresu
- `opt` : `fetch` objekt opcija

Povratna vrijednost: tekst odgovora

## fJson(url, opt)

Pošaljite mrežni zahtjev i analizirajte i vratite tijelo odgovora u JSON formatu

parametar:
- `url` : Zahtjev za adresu
- `opt` : `fetch` objekt opcija

Povratna vrijednost: raščlanjen JSON objekat

## fBin(url, opt)

Pošaljite mrežni zahtjev i vratite tijelo odgovora kao binarni niz bajtova

parametar:
- `url` : Zahtjev za adresu
- `opt` : `fetch` objekt opcija

Povratna vrijednost: niz bajtova