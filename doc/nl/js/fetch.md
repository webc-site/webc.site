# fetch.js

Netwerkverzoektoolfunctie gebaseerd op ophaalinkapseling

## F(url, opt)

Verzend een netwerkverzoek en retourneer een antwoordobject

parameter:
- `url` : Adres opvragen
- `opt` : `fetch` optieobject

Retourwaarde: antwoordobject

## f(attr)

Een functie van hogere orde die een verzoek verpakt en de geretourneerde inhoud in een opgegeven indeling parseert

parameter:
- `attr` : antwoordtekst parseert attribuutnaam

Retourwaarde: functie voor het asynchroon opvragen en parseren van inhoud
  - parameter
    - `url` : Adres opvragen
    - `opt` : `fetch` optieobject
  - Retourwaarde: geparseerde inhoud

## fTxt

Verzend een netwerkverzoek en retourneer de antwoordtekst in tekstindeling

parameter:
- `url` : Adres opvragen
- `opt` : `fetch` optieobject

Retourwaarde: antwoordtekst

## fJson(url, opt)

Verzend een netwerkverzoek en parseer en retourneer de antwoordtekst in JSON-indeling

parameter:
- `url` : Adres opvragen
- `opt` : `fetch` optieobject

Retourwaarde: geparseerd JSON-object

## fBin(url, opt)

Verzend een netwerkverzoek en retourneer de antwoordtekst als een binaire byte-array

parameter:
- `url` : Adres opvragen
- `opt` : `fetch` optieobject

Retourwaarde: bytearray