# route.js

Single Säit Front-End Routing Management

## nowUrl()

Kritt den aktuellen URL Wee mat dem féierende Slash ewechgeholl

Retour Wäert: aktuell Wee String

## route(hook)

Registréiert den Oflauschterskandal fir Streck Ännerungen. Wann Dir registréiert, gëtt et eemol mam aktuelle Wee ausgefouert.

parameter:
- `hook` : Route Iwwerwachung Callback Funktioun
  - parameter
    - `url` : aktuelle Wee
    - `pre` : leschte Wee

Retour Wäert: Onregistréiert Botzen Funktioun

## setPre(url)

Späichert déi lescht opgeholl URL

parameter:
- `url` : path string

## preUrl()

Kritt d'URL vum leschte Rekord

Retour Wäert: leschte Wee String

## refresh(url)

Kraaft all Wee lauschteren Callbacks um spezifizéierte Wee ausgeléist ginn an update Pre

parameter:
- `url` : Zilwee, Standard aktuelle Wee

## removeSlash(url)

Ewechzehuelen Slashes aus Wee Header

parameter:
- `url` : path string

Retour Wäert: Wee nodeems Dir de féierende Slash ewechgeholl huet

## setUrl(url)

Update Browser Adressbar URL Status

parameter:
- `url` : Zilwee

Retour Wäert: 1 wann de Wee eigentlech Ännerungen

## goto(url)

Update d'Browseradress an léist e Routerfrëschung aus

parameter:
- `url` : Zilwee