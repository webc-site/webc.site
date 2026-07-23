# fetch.js

Nätverksbegäran verktygsfunktion baserad på hämta inkapsling

## F(url, opt)

Skicka en nätverksbegäran och returnera ett svarsobjekt

parameter:
- `url` : Begär adress
- `opt` : `fetch` alternativobjekt

Returvärde: Responsobjekt

## f(attr)

En högre ordningsfunktion som omsluter en begäran och analyserar det returnerade innehållet i ett angivet format

parameter:
- `attr` : namn på attribut för analys av svarskropp

Returvärde: funktion för att asynkront begära och analysera innehåll
  - parameter
    - `url` : Begär adress
    - `opt` : `fetch` alternativobjekt
  - Returvärde: analyserat innehåll

## fTxt

Skicka en nätverksförfrågan och returnera svarstexten i textformat

parameter:
- `url` : Begär adress
- `opt` : `fetch` alternativobjekt

Returvärde: svarstext

## fJson(url, opt)

Skicka en nätverksbegäran och analysera och returnera svarstexten i JSON-format

parameter:
- `url` : Begär adress
- `opt` : `fetch` alternativobjekt

Returvärde: analyserat JSON-objekt

## fBin(url, opt)

Skicka en nätverksbegäran och returnera svarskroppen som en binär byte-array

parameter:
- `url` : Begär adress
- `opt` : `fetch` alternativobjekt

Returvärde: byte array