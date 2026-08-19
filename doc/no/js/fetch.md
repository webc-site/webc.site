# fetch.js

Verktøyfunksjon for nettverksforespørsel basert på henteinnkapsling

## F(url, opt)

Send en nettverksforespørsel og returner et svarobjekt

parameter:
- `url` : Be om adresse
- `opt` : `fetch` alternativobjekt

Returverdi: Responsobjekt

## f(attr)

En høyere ordensfunksjon som bryter en forespørsel og analyserer det returnerte innholdet i et spesifisert format

parameter:
- `attr` : navn på attributt for analyse av svartekst

Returverdi: funksjon for asynkront å be om og analysere innhold
  - parameter
    - `url` : Be om adresse
    - `opt` : `fetch` alternativobjekt
  - Returverdi: analysert innhold

## fTxt

Send en nettverksforespørsel og returner svarteksten i tekstformat

parameter:
- `url` : Be om adresse
- `opt` : `fetch` alternativobjekt

Returverdi: svartekst

## fJson(url, opt)

Send en nettverksforespørsel og analyser og returner svarteksten i JSON-format

parameter:
- `url` : Be om adresse
- `opt` : `fetch` alternativobjekt

Returverdi: analysert JSON-objekt

## fBin(url, opt)

Send en nettverksforespørsel og returner svarteksten som en binær byte-matrise

parameter:
- `url` : Be om adresse
- `opt` : `fetch` alternativobjekt

Returverdi: byte array