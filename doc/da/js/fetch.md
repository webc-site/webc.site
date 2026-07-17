# fetch.js

Netværksanmodningsværktøjsfunktion baseret på henteindkapsling

## F(url, opt)

Send en netværksanmodning og returner et svarobjekt

parameter:
- `url` : Anmod om adresse
- `opt` : `fetch` optionsobjekt

Returværdi: Svarobjekt

## f(attr)

En højere ordens funktion, der ombryder en anmodning og analyserer det returnerede indhold i et specificeret format

parameter:
- `attr` : navn på attributten for parsing af svartekst

Returværdi: funktion til asynkront at anmode om og parse indhold
  - parameter
    - `url` : Anmod om adresse
    - `opt` : `fetch` optionsobjekt
  - Returværdi: parset indhold

## fTxt

Send en netværksanmodning og returner svarteksten i tekstformat

parameter:
- `url` : Anmod om adresse
- `opt` : `fetch` optionsobjekt

Returværdi: svartekst

## fJson(url, opt)

Send en netværksanmodning og parse og returner svarteksten i JSON-format

parameter:
- `url` : Anmod om adresse
- `opt` : `fetch` optionsobjekt

Returværdi: parset JSON-objekt

## fBin(url, opt)

Send en netværksanmodning og returner svarteksten som en binær byte-array

parameter:
- `url` : Anmod om adresse
- `opt` : `fetch` optionsobjekt

Returværdi: byte array