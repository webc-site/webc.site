# fetch.js

Funkcija orodja za omrežne zahteve, ki temelji na enkapsulaciji pridobivanja

## F(url, opt)

Pošljite omrežno zahtevo in vrnite odgovorni objekt

parameter:
- `url` : Zahtevani naslov
- `opt` : predmet možnosti `fetch`

Povratna vrednost: Odzivni objekt

## f(attr)

Funkcija višjega reda, ki ovije zahtevo in razčleni vrnjeno vsebino v določeni obliki

parameter:
- `attr` : ime atributa razčlenjevanja telesa odgovora

Povratna vrednost: funkcija za asinhrono zahtevanje in razčlenjevanje vsebine
  - parameter
    - `url` : Zahtevani naslov
    - `opt` : predmet možnosti `fetch`
  - Povratna vrednost: razčlenjena vsebina

## fTxt

Pošljite omrežno zahtevo in vrnite telo odgovora v besedilni obliki

parameter:
- `url` : Zahtevani naslov
- `opt` : predmet možnosti `fetch`

Povratna vrednost: besedilo odgovora

## fJson(url, opt)

Pošljite omrežno zahtevo ter razčlenite in vrnite telo odgovora v formatu JSON

parameter:
- `url` : Zahtevani naslov
- `opt` : predmet možnosti `fetch`

Povratna vrednost: razčlenjen objekt JSON

## fBin(url, opt)

Pošljite omrežno zahtevo in vrnite telo odgovora kot binarno niz bajtov

parameter:
- `url` : Zahtevani naslov
- `opt` : predmet možnosti `fetch`

Povratna vrednost: niz bajtov