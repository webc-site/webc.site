# route.js

Front-end routingbeheer op één pagina

## nowUrl()

Haal het huidige URL-pad op, waarbij de leidende schuine streep is verwijderd

Retourwaarde: huidige padtekenreeks

## route(hook)

Registreer de terugbelfunctie voor routewijzigingen. Bij registratie wordt deze eenmalig uitgevoerd met het huidige pad.

parameter:
- `hook` : Routebewaking callback-functie
  - parameter
    - `url` : huidig ​​pad
    - `pre` : laatste pad

Retourwaarde: niet-geregistreerde opschoonfunctie

## setPre(url)

Sla de laatst opgenomen URL op

parameter:
- `url` : padreeks

## preUrl()

Haal de URL van de laatste record op

Retourwaarde: laatste padtekenreeks

## refresh(url)

Forceer dat alle route-luister-callbacks worden geactiveerd op het opgegeven pad en update vooraf

parameter:
- `url` : doelpad, standaard huidig ​​pad

## removeSlash(url)

Verwijder schuine strepen uit padkoppen

parameter:
- `url` : padreeks

Retourwaarde: pad na het verwijderen van de leidende schuine streep

## setUrl(url)

Update de URL-status van de adresbalk van de browser

parameter:
- `url` : doelpad

Retourwaarde: 1 als het pad daadwerkelijk verandert

## goto(url)

Update het browseradres en activeer een routevernieuwing

parameter:
- `url` : doelpad