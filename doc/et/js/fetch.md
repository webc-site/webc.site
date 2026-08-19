# fetch.js

Võrgupäringu tööriista funktsioon, mis põhineb kapseldamisel

## F(url, opt)

Saatke võrgupäring ja tagastage vastuse objekt

parameeter:
- `url` : Küsi aadressi
- `opt` : `fetch` valikute objekt

Tagastamisväärtus: vastuse objekt

## f(attr)

Kõrgemat järku funktsioon, mis pakib päringu ja analüüsib tagastatud sisu määratud vormingus

parameeter:
- `attr` : vastuse keha parsimise atribuudi nimi

Tagastusväärtus: funktsioon sisu asünkroonseks taotlemiseks ja sõelumiseks
  - parameeter
    - `url` : Küsi aadressi
    - `opt` : `fetch` valikute objekt
  - Tagastusväärtus: sõelutud sisu

## fTxt

Saatke võrgupäring ja tagastage vastuse sisu tekstivormingus

parameeter:
- `url` : Küsi aadressi
- `opt` : `fetch` valikute objekt

Tagastatav väärtus: vastuse tekst

## fJson(url, opt)

Saatke võrgupäring ning sõeluge ja tagastage vastuse keha JSON-vormingus

parameeter:
- `url` : Küsi aadressi
- `opt` : `fetch` valikute objekt

Tagastamisväärtus: sõelutud JSON-objekt

## fBin(url, opt)

Saatke võrgupäring ja tagastage vastuse keha binaarse baidimassiivina

parameeter:
- `url` : Küsi aadressi
- `opt` : `fetch` valikute objekt

Tagastusväärtus: baidimassiivi