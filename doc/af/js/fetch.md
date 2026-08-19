# fetch.js

Netwerk versoek instrument funksie gebaseer op haal encapsulation

## F(url, opt)

Stuur 'n netwerkversoek en stuur 'n antwoordvoorwerp terug

parameter:
- `url` : Versoek adres
- `opt` : `fetch` opsies voorwerp

Terugkeerwaarde: Responsobjek

## f(attr)

'n Hoër-orde funksie wat 'n versoek omvou en die teruggekeerde inhoud in 'n gespesifiseerde formaat ontleed

parameter:
- `attr` : reaksie liggaam ontleding kenmerk naam

Retourwaarde: funksie om inhoud asinchronies aan te vra en te ontleed
  - parameter
    - `url` : Versoek adres
    - `opt` : `fetch` opsies voorwerp
  - Terugkeerwaarde: ontleed inhoud

## fTxt

Stuur 'n netwerkversoek en stuur die antwoordliggaam in teksformaat terug

parameter:
- `url` : Versoek adres
- `opt` : `fetch` opsies voorwerp

Terugkeerwaarde: antwoordteks

## fJson(url, opt)

Stuur 'n netwerkversoek en ontleed en stuur die antwoordliggaam in JSON-formaat terug

parameter:
- `url` : Versoek adres
- `opt` : `fetch` opsies voorwerp

Retourwaarde: ontleed JSON-voorwerp

## fBin(url, opt)

Stuur 'n netwerkversoek en gee die antwoordliggaam terug as 'n binêre greepskikking

parameter:
- `url` : Versoek adres
- `opt` : `fetch` opsies voorwerp

Terugkeerwaarde: grepe-skikking